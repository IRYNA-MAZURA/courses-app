import { Component, Input } from '@angular/core';
import { IconName } from '../../enums/iconName.enum';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  isEditable!: boolean;

  @Input()
  cardData!: Card;

  iconEnum: typeof IconName = IconName;

  edit(): void {
    console.log('edit');
  }

  remove(): void {
    console.log('remove');
  }
}
