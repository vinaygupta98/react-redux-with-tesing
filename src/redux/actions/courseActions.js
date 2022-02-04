import * as courseApi from "../../api/courseApi";
import * as types from "../actions/actionsTypes";
import {
  beginApiCall,
  apiCallError,
} from "./apiStatusActions";

export function courseActions(
  course
) {
  return {
    type: types.CREATE_COURSE,
    course,
  };
}
export function deleteCourseOptimistic(
  course
) {
  return {
    type: types.DELETE_COURSE_OPTIMISTIC,
    course,
  };
}
export function loadCoursesSuccess(
  courses
) {
  return {
    type: types.LOAD_COURSE_SUCCESS,
    courses,
  };
}
export function createCourseSuccess(
  course
) {
  return {
    type: types.CREATE_COURSE_SUCCESS,
    course,
  };
}
export function updateCourseSuccess(
  course
) {
  return {
    type: types.UPDATE_COURSE_SUCCESS,
    course,
  };
}
export function loadCourses() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(
          loadCoursesSuccess(
            courses
          )
        );
      })
      .catch((error) => {
        dispatch(
          apiCallError(error)
        );
        throw error;
      });
  };
}
export function saveCourse(
  course
) {
  return function (
    dispatch,
    getState
  ) {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(
            updateCourseSuccess(
              savedCourse
            )
          )
          : dispatch(
            createCourseSuccess(
              savedCourse
            )
          );
      })
      .catch((error) => {
        dispatch(
          apiCallError(error)
        );
        throw error;
      });
  };
}
export function deleteCourse(
  course
) {
  return function (
    dispatch,
    getState
  ) {
    dispatch(
      deleteCourseOptimistic(
        course
      )
    )
    return courseApi
      .deleteCourse(course.id)

  };
}
