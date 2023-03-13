import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  course$ = this.coursesStateService.course$;

  constructor(
    private route: ActivatedRoute,
    private coursesStateService: CoursesStateFacade,
    private router: Router
  ) { }

  ngOnInit() {
    const cardId = this.route.snapshot.paramMap.get('id');
    if (cardId) {
      this.coursesStateService.getSingleCourse(cardId);
    }
  }

  goBack() {
    this.router.navigate(['/courses']);
  }
}
