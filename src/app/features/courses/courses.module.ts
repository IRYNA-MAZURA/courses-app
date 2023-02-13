import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from './card/card.component';
import { CourseListComponent } from './course-list/course-list.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CardComponent,
    CourseListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CoursesComponent,
    CardComponent,
    CourseListComponent,
  ],
})
export class CoursesModule { }
