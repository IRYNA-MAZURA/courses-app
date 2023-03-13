import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/courses-api-results';
import { IconName } from '../../enums/iconName.enum';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  @Input()
  courses: Course[] | null = null;

  @Input()
  isEditable: boolean = true;

  @Output()
  cardInfo: EventEmitter<Course> = new EventEmitter<Course>();

  @Output()
  deleteCourse = new EventEmitter<string>()

  constructor(
    private router: Router
  ) { }

  iconEnum: typeof IconName = IconName;

  edit(course: Course): void {
    const {id, title, description, creationDate, duration, authors} = course;
    console.log('edit');
    this.router.navigate([`/courses/edit/${course.id}`], { queryParams: { id, title, description, creationDate, duration, authors: authors.join(',')} });
  }

  remove(id: string): void {
    console.log('remove');
    this.deleteCourse.emit(id);
  }

  clickOnShow(data: Course): void {
    this.cardInfo.emit(data);
  }
}
