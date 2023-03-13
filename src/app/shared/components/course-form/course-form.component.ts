import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder, FormControl, FormGroup, Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Course } from 'src/app/models/courses-api-results';
import { CoursesStoreService } from 'src/app/services/courses-store/courses-store.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  course!: Course;
  place: string[] = this.router.url.split('/');
  cardId: string | null = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    if (this.cardId) {
      this.coursesStoreService.getCourse(this.cardId).subscribe(data => {
        this.course = data.result;
        this.setCourseForm(this.course);
      });
    }
  }

  constructor(public fb: FormBuilder, public library: FaIconLibrary, private coursesStoreService: CoursesStoreService, private router: Router, private route: ActivatedRoute) {
    library.addIconPacks(fas);
  }

  @Input()
  calledPlace: 'add' | 'edit' = this.place[this.place.length - 1] === 'add' ? 'add' : 'edit';

  courseForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.pattern(/^[a-zA-Z0-9]*$/)]),
    authors: new FormArray([]),
    duration: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)])
  });

  setCourseForm(course: Course) {
    this.courseForm.controls['title'].setValue(course.title);
    this.courseForm.controls['description'].setValue(course.description);
    this.courseForm.controls['duration'].setValue(course.duration);

    course.authors.forEach(author => {
      this.newAuthors.push(author);
      this.coursesStoreService.getAuthorById(author).subscribe(value => {
        (this.courseForm.controls['authors'] as FormArray).push(new FormControl(value.result.name));
      })
    });
  }

  authorsFormArray: FormArray = this.courseForm.get('authors') as FormArray;
  newAuthors: string[] = [];

  addAuthor(value: string): void {
    this.authorsFormArray.push(new FormControl(value, [Validators.required]));
    this.coursesStoreService.createAuthor(value).subscribe((value) => this.newAuthors.push(value.result.id));
  }

  removeAuthor(index: number): void {
    this.authorsFormArray.removeAt(index);
    this.newAuthors.splice(index, 1);
  }

  createCourse(): void {
    const course = {
      title: this.courseForm.get('title')?.value as string,
      description: this.courseForm.get('description')?.value as string,
      duration: this.courseForm.get('duration')?.value as number,
      authors: this.newAuthors,
      creationDate: new Date().toLocaleString()
    };

    if (this.cardId) {
      const courseData = {
        id: this.cardId,
        ...course
      };

      this.coursesStoreService.editCourse(this.cardId, courseData).subscribe();
    } else {
      this.coursesStoreService.createCourse(course).subscribe();
    }
  }

  goToCourses(): void {
    this.router.navigate(['/courses']);
  }
}
