import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input()
  placeholder!: string;

  @Output()
  onSearch: EventEmitter<string> = new EventEmitter<string>();

  searchText!: string;

  clickSearch(): void {
    this.onSearch.emit(this.searchText);
  }
}

