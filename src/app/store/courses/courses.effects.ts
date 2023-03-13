import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, of, tap } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CoursesService } from "../../services/courses/courses.service";
import { Router } from "@angular/router";
import {
    requestAllCourses,
    requestAllCoursesFail,
    requestAllCoursesSuccess,
    requestSingleCourse,
    requestSingleCourseSuccess,
    requestSingleCourseFail,
    requestDeleteCourseFail,
    requestDeleteCourse,
    requestDeleteCourseSuccess,
    requestEditCourse,
    requestEditCourseSuccess,
    requestEditCourseFail,
    requestCreateCourse,
    requestCreateCourseFail,
    requestCreateCourseSuccess,
    requestFilteredCourses,
    requestFilteredCoursesSuccess,
    requestFilteredCoursesFail,
} from "./courses.actions";

@Injectable()
export class CoursesEffects {

    constructor(
        private actions$: Actions,
        private coursesService: CoursesService,
        private router: Router
    ) { }

    getAll$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestAllCourses, requestDeleteCourseSuccess),
            mergeMap(() => this.coursesService.getAll()
                .pipe(
                    filter(res => res.successful),
                    map(({ result }) => requestAllCoursesSuccess({ allCourses: result })),
                    catchError(() => of(requestAllCoursesFail()))
                )
            )
        )
    );

    filteredCourses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestFilteredCourses),
            mergeMap(({ searchValue }) => this.coursesService.filterCourses(searchValue)
                .pipe(
                    map(({ result }) => requestFilteredCoursesSuccess({ allCourses: result })),
                    catchError(() => of(requestFilteredCoursesFail()))
                )
            )
        )
    );

    getSpecificCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestSingleCourse),
            mergeMap(({ id }) => this.coursesService.getCourse(id)
                .pipe(
                    filter(res => res.successful),
                    map(({ result }) => requestSingleCourseSuccess({ course: result })),
                    catchError(() => of(requestSingleCourseFail()))
                )
            )
        )
    );

    deleteCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestDeleteCourse),
            mergeMap(({ id }) => this.coursesService.deleteCourse(id)
                .pipe(
                    filter((res) => res.successful),
                    map(() => requestDeleteCourseSuccess()),
                    catchError(() => of(requestDeleteCourseFail()))
                )
            )
        )
    );

    editCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestEditCourse),
            mergeMap(({ id, course }) => this.coursesService.editCourse(id, course)
                .pipe(
                    filter((res) => res.successful),
                    map(({ result }) => requestEditCourseSuccess({ course: result })),
                    catchError(() => of(requestEditCourseFail()))
                )
            )
        )
    );

    createCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestCreateCourse),
            mergeMap(({ course }) => this.coursesService.createCourse(course)
                .pipe(
                    filter((res) => res.successful),
                    map(({ result }) => requestCreateCourseSuccess({ course: result })),
                    catchError(() => of(requestCreateCourseFail()))
                )
            )
        )
    );

    redirectToTheCoursesPage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestCreateCourseSuccess, requestEditCourseSuccess, requestSingleCourseSuccess),
            tap(({ course }) => {
                this.router.navigate([`/courses/${course.id}`])
            })
        ),
        { dispatch: false }
    );
}