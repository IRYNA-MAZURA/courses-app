import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseListComponent } from './course-list/course-list.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CoursesComponent,
    CourseListComponent,
  ],
})
export class CoursesModule { }
