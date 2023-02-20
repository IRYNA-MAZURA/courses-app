import { Component } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  readonly mockedCourseList: Card[] = [
    {
      id: "de5aaa59-90f5-4dbc-b8a9-aaf205c551ba",
      title: "JavaScript",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                    nchanged.`,
      creationDate: new Date(2021, 3, 8),
      duration: 160,
      authors: ["Vasiliy Dobkin", "Nicolas Kim"],
    },
    {
      id: "b5630fdd-7bf7-4d39-b75a-2b5906fd0916",
      title: "Angular",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book.`,
      creationDate: new Date(2020, 11, 10),
      duration: 210,
      authors: ["Anna Sidorenko", "Valentina Larina"],
    },
  ];

  search(): void {
    console.log('Search');
  }
}
