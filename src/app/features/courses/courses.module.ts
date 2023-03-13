import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from '../course/course.component';
import { coursesFeatureKey, coursesFeatureReducer } from 'src/app/store/courses/courses.reducer';
import { CoursesEffects } from 'src/app/store/courses/courses.effects';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";



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
    StoreModule.forFeature(
      coursesFeatureKey,
      coursesFeatureReducer
    ),
    EffectsModule.forFeature([CoursesEffects])
  ],
  providers: [
    CoursesStateFacade
  ],
  exports: [
    CoursesComponent,
    CourseListComponent,
    CourseComponent,
  ],
})
export class CoursesModule { }
