import { createReducer, on } from "@ngrx/store";
import { Course } from "src/app/models/courses-api-results";
import {
    requestAllCourses,
    requestAllCoursesFail,
    requestAllCoursesSuccess,
    requestCreateCourse,
    requestCreateCourseFail,
    requestCreateCourseSuccess,
    requestDeleteCourse,
    requestDeleteCourseFail,
    requestDeleteCourseSuccess,
    requestEditCourse,
    requestEditCourseFail,
    requestEditCourseSuccess,
    requestFilteredCourses,
    requestFilteredCoursesFail,
    requestFilteredCoursesSuccess,
    requestSingleCourse,
    requestSingleCourseFail,
    requestSingleCourseSuccess
} from "./courses.actions";

export const coursesFeatureKey = 'courses';

export interface CoursesState {
    allCourses: Course[];
    course: Course;
    isAllCoursesLoading: boolean;
    isSingleCourseLoading: boolean;
    isSearchState: boolean;
    errorMessage: string;
}

const initialState: CoursesState = {
    allCourses: [],
    course: {} as Course,
    isAllCoursesLoading: false,
    isSingleCourseLoading: false,
    isSearchState: false,
    errorMessage: ''
}

export const coursesFeatureReducer = createReducer(initialState,
    on(requestAllCourses, (state) => ({ ...state })),
    on(requestAllCoursesSuccess, (state, { allCourses }) => ({ ...state, allCourses })),
    on(requestAllCoursesFail, (state) => ({ ...state, errorMessage: 'Request for all courses - fail' })),
    on(requestSingleCourse, (state) => ({ ...state })),
    on(requestSingleCourseSuccess, (state, { course }) => ({ ...state, course })),
    on(requestSingleCourseFail, (state) => ({ ...state, errorMessage: 'Request for single course - fail' })),
    on(requestFilteredCourses, (state) => ({ ...state })),
    on(requestFilteredCoursesSuccess, (state, { allCourses }) => ({ ...state, allCourses })),
    on(requestFilteredCoursesFail, (state) => ({ ...state, errorMessage: 'Request for filtered courses - fail' })),
    on(requestDeleteCourse, (state) => ({ ...state })),
    on(requestDeleteCourseSuccess, (state) => ({ ...state })),
    on(requestDeleteCourseFail, (state) => ({ ...state, errorMessage: 'Request for delete course - fail' })),
    on(requestEditCourse, (state) => ({ ...state })),
    on(requestEditCourseSuccess, (state) => ({ ...state })),
    on(requestEditCourseFail, (state) => ({ ...state, errorMessage: 'Request for edit course - fail' })),
    on(requestCreateCourse, (state) => ({ ...state })),
    on(requestCreateCourseSuccess, (state) => ({ ...state })),
    on(requestCreateCourseFail, (state) => ({ ...state, errorMessage: 'Request for create course - fail' })),
);