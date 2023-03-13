import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoursesState } from "./courses.reducer";
import { Course, CreateCourse } from "../../models/courses-api-results";
import {
    requestAllCourses,
    requestCreateCourse,
    requestDeleteCourse,
    requestEditCourse,
    requestFilteredCourses,
    requestSingleCourse,
} from './courses.actions';
import {
    getAllCourses,
    getCourse,
    getCourses,
    getErrorMessage,
    isAllCoursesLoadingSelector,
    isSearchingStateSelector,
    isSingleCourseLoadingSelector
} from "./courses.selectors";

@Injectable()
export class CoursesStateFacade {
    constructor(private store: Store<CoursesState>) { }

    isAllCoursesLoading$ = this.store.select(isAllCoursesLoadingSelector);
    isSingleCourseLoading$ = this.store.select(isSingleCourseLoadingSelector);
    isSearchingState$ = this.store.select(isSearchingStateSelector);
    courses$ = this.store.select(getCourses);
    allCourses$ = this.store.select(getAllCourses);
    course$ = this.store.select(getCourse);
    errorMessage$ = this.store.select(getErrorMessage);

    getAllCourses() {
        this.store.dispatch(requestAllCourses());
    }

    getSingleCourse(id: string) {
        this.store.dispatch(requestSingleCourse({ id }));
    }

    filteredCourses(searchValue: string) {
        this.store.dispatch(requestFilteredCourses({ searchValue }));
    }

    editCourse(id: string, course: Course) {
        this.store.dispatch(requestEditCourse({ id, course }));
    }

    createCourse(course: CreateCourse) {
        this.store.dispatch(requestCreateCourse({ course }));
    }

    deleteCourse(id: string) {
        this.store.dispatch(requestDeleteCourse({ id }));
    }
}