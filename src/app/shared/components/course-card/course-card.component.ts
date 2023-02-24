import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/features/models/card.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input()
  cardData!: Card;

  @Output()
  clickOnShow: EventEmitter<Card> = new EventEmitter<Card>();

  clickOnShowHandler(): void {
    this.clickOnShow.emit(this.cardData);
  }
}
