import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from '../course/course.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseListComponent,
    CourseComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule,
  ],
  exports: [
    CoursesComponent,
    CourseListComponent,
    CourseComponent,
  ],
})
export class CoursesModule { }
