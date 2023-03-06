import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/courses-api-results';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input()
  cardData!: Course;

  @Output()
  clickOnShow: EventEmitter<Course> = new EventEmitter<Course>();

  constructor(private router: Router) {
  }

  clickOnShowHandler(): void {
    this.router.navigate([`/courses/${this.cardData.id}`])
  }
}
