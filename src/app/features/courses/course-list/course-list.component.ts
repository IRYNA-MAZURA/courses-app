import { Component, Input } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  @Input()
  listData!: Card[];

  @Input()
  isEditable: boolean = true;
}
