import { EMPLOYEES } from '../shared/employeeData';
import * as ActionTypes from './ActionTypes';


export const Employees = (state = EMPLOYEES, action) => {
  switch (action.type) {
    
    case ActionTypes.REVIEW_COMPLETED:
      //this below step may be un-needed, but does make code slightly more succint overall?
      const review = action.payload;
      console.log(`Review from inside reducer ${JSON.stringify(action.payload)}`)
      
      //Make copy of employee whose review has been completed
      const employee = state[0]
      
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
      Object.assign(employee.reviews[1], forMerge);

      state[0] = employee;
      
      return [
        // needs to be new EMPLOYEES with copy of employee with new review inserted
        ...state, 
      ]
    
    default:
      return state;
  }
}