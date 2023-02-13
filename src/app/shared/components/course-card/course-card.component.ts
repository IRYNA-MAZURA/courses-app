import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/features/models/card.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit{
  @Input()
  cardData!: Card;

  durationDate!: Date;

  isShowModal!: boolean;

  ngOnInit(): void {
    this.durationDate = new Date(1970, 1, 1, 0, this.cardData.duration);
  }

  clickOnShowHandler(): void {
    this.isShowModal = !this.isShowModal;
  }

  getResult(result: boolean): void {
    this.clickOnShowHandler();
    console.log(result);
  }
}
