import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconName } from '../../enums/iconName.enum';
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

  @Output()
  cardInfo: EventEmitter<Card> = new EventEmitter<Card>();

  iconEnum: typeof IconName = IconName;

  edit(): void {
    console.log('edit');
  }

  remove(): void {
    console.log('remove');
  }

  clickOnShow(data: Card): void {
    this.cardInfo.emit(data);
  }
}
