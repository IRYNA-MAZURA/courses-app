import { Component, Input } from '@angular/core';
import { Card } from 'src/app/features/models/card.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input()
  cardData!: Card;

  isShowModal!: boolean;

  clickOnShowHandler(): void {
    this.isShowModal = !this.isShowModal;
  }

  getResult(result: boolean): void {
    this.clickOnShowHandler();
    console.log(result);
  }
}
