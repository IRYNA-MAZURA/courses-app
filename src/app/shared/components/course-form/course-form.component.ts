import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder, FormControl, FormGroup, Validators
} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  courseForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.pattern(/^[a-zA-Z0-9]*$/)]),
    authors: new FormArray([]),
    duration: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)])
  });

  authorsFormArray: FormArray = this.courseForm.get('authors') as FormArray;

  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  addAuthor(value: string): void {
    this.authorsFormArray.push(new FormControl(value, [Validators.required]));
  }

  removeAuthor(index: number): void {
    this.authorsFormArray.removeAt(index);
  }
}
