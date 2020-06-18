import { EMPLOYEES } from '../shared/employeeData';
import * as ActionTypes from './ActionTypes';


export const Employees = (state = EMPLOYEES, action) => {
  switch (action.type) {
    
    case ActionTypes.REVIEW_COMPLETED:

      //copying payload, maybe un-needed, but does make code slightly more succint overall
      const review = action.payload;
      console.log(review)
      
      //Make copy of employee whose review has been completed
      const employee = state[review.employeeId]
      console.log(employee)
      
      //Convert payload into same structure as receiving object 
      const forMerge = {
        id: review.reviewId,
        name: review.name,
        scores: {
          0: review.area1,
          1: review.area2,
          2: review.area3
        },
        notes: review.notes,
        complete: true
      }

      //merge old review with review info from payload
      Object.assign(employee.reviews[review.reviewId], forMerge);

      //re-assign copy of employee (with new review info) into state version of same employee
      state[review.employeeId] = employee;
      
      return [

        ...state, 
      ]
    
    default:
      return state;
  }
}