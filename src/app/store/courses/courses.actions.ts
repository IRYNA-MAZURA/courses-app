import { createAction, props } from "@ngrx/store";
import { Course, CreateCourse } from "../../models/courses-api-results";

export enum CoursesActions {
    RequestAllCourses = '[Courses] Request all',
    RequestAllCoursesSuccess = '[Courses] Request all - Success',
    RequestAllCoursesFail = '[Courses] Request all - Fail',

    RequestSingleCourse = '[Courses] Request single',
    RequestSingleCourseSuccess = '[Courses] Request single - Success',
    RequestSingleCourseFail = '[Courses] Request single - Fail',

    RequestFilteredCourses = '[Courses] Request filtered courses',
    RequestFilteredCoursesSuccess = '[Courses] Request filtered courses - Success',
    RequestFilteredCoursesFail = '[Courses] Request filtered courses - Fail',

    RequestDeleteCourse = '[Courses] Request delete course',
    RequestDeleteCourseSuccess = '[Courses] Request delete course - Success',
    RequestDeleteCourseFail = '[Courses] Request delete course - Fail',

    RequestEditCourse = '[Courses] Request edit course',
    RequestEditCourseSuccess = '[Courses] Request edit course - Success',
    RequestEditCourseFail = '[Courses] Request edit course - Fail',

    RequestCreateCourse = '[Courses] Request create course',
    RequestCreateCourseSuccess = '[Courses] Request create course - Success',
    RequestCreateCourseFail = '[Courses] Request create course - Fail',
}

export const requestAllCourses = createAction(CoursesActions.RequestAllCourses);
export const requestAllCoursesSuccess = createAction(CoursesActions.RequestAllCoursesSuccess, props<{ allCourses: Course[] }>());
export const requestAllCoursesFail = createAction(CoursesActions.RequestAllCoursesFail);

export const requestSingleCourse = createAction(CoursesActions.RequestSingleCourse, props<{ id: string }>());
export const requestSingleCourseSuccess = createAction(CoursesActions.RequestSingleCourseSuccess, props<{ course: Course }>());
export const requestSingleCourseFail = createAction(CoursesActions.RequestSingleCourseFail);

export const requestFilteredCourses = createAction(CoursesActions.RequestFilteredCourses, props<{ searchValue: string }>());
export const requestFilteredCoursesSuccess = createAction(CoursesActions.RequestFilteredCoursesSuccess, props<{ allCourses: Course[] }>());
export const requestFilteredCoursesFail = createAction(CoursesActions.RequestFilteredCoursesFail);

export const requestDeleteCourse = createAction(CoursesActions.RequestDeleteCourse, props<{ id: string }>());
export const requestDeleteCourseSuccess = createAction(CoursesActions.RequestDeleteCourseSuccess);
export const requestDeleteCourseFail = createAction(CoursesActions.RequestDeleteCourseFail);

export const requestEditCourse = createAction(CoursesActions.RequestEditCourse, props<{ id: string, course: Course }>());
export const requestEditCourseSuccess = createAction(CoursesActions.RequestEditCourseSuccess, props<{ course: Course }>());
export const requestEditCourseFail = createAction(CoursesActions.RequestEditCourseFail);

export const requestCreateCourse = createAction(CoursesActions.RequestCreateCourse, props<{ course: CreateCourse }>());
export const requestCreateCourseSuccess = createAction(CoursesActions.RequestCreateCourseSuccess, props<{ course: Course }>());
export const requestCreateCourseFail = createAction(CoursesActions.RequestCreateCourseFail);