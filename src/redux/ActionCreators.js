import * as ActionTypes from './ActionTypes';

// defining action creator functions

export const completeReview = (employeeId, reviewId, name, area1, area2, area3, notes, complete) => ({
  type: ActionTypes.REVIEW_COMPLETED,
  payload: {
    employeeId: employeeId,
    reviewId: reviewId,
    name: name,
    area1: area1,
    area2: area2,
    area3: area3,
    notes: notes,
    complete: complete
  }
})

export const addEmployee = (name) => ({
  type: ActionTypes.EMPLOYEE_ADDED,
  payload: {
    name: name
  }
})

export const delEmployee = (name) => ({
  type: ActionTypes.EMPLOYEE_REMOVED,
  payload: {
    name: name
  }
})