import { EMPLOYEES } from '../shared/employeeData';
import * as ActionTypes from './ActionTypes';

export const Reviews = (state = EMPLOYEES, action) => {
  switch (action.type) {

    //DELETING REVIEW
    case ActionTypes.REVIEW_REMOVED:
    
      const empCopy = state.find(employee => employee.name === action.payload.review.name)

      const newReviews = empCopy.reviews.filter(review => review.id !== action.payload.review.id)

      empCopy.reviews = newReviews;

      state[empCopy.id] = empCopy;

      return [
        ...state
      ]

    //CREATING REVIEW
    case ActionTypes.REVIEW_CREATED:

      //Make copy of employee
      const employeeCopy = state.find(employee => employee.name === action.payload.employeeName)

      //Extract what we need pre-newReview-build
      const newReviewId = employeeCopy.reviews.length;

      const newPageNumber = (function() {
        let counter = 0;
        state.map(employee=>{
          counter += employee.reviews.length
          return counter;
        })
        return counter;
      })();
      
      const dateSplit = action.payload.date.split('-')
      const revYear = dateSplit[0]
      const revMonth = dateSplit[1]
      const revDay = dateSplit[2]

      //Build new review
      const newReview = {
        employeeId: employeeCopy.id,
          id: newReviewId,
          reviewPage: newPageNumber,
          name: action.payload.employeeName,
          date: {
            year: revYear,
            month: revMonth,
            day: revDay,
          },
          areas: {
            0: 'Customer Service',
            1: 'Attendance',
            2: 'Cash Handling',
          },
          scores: {
            0: '',
            1: '',
            2: '',
          },
          notes: `This is a placeholder for a newly schedled review.`,
          complete: false,
      }

      //Push review to employee copy
      employeeCopy.reviews = [...employeeCopy.reviews, newReview]

      //Re-assign copy of employee (with new review info) into state version of same employee
      state[employeeCopy.id] = employeeCopy;

      return [
        ...state
      ]

    
    //COMPLETING REVIEW  
    case ActionTypes.REVIEW_COMPLETED:

      //copying payload, maybe un-needed, but does make code slightly more succint overall
      const review = action.payload;
      
      //Make copy of employee whose review has been completed
      const employee = state[review.employeeId]
      
      //Convert payload into same structure as receiving object 
      const forMerge = {
        id: review.reviewId,
        name: review.name,
        scores: {
          0: parseInt(review.area1),
          1: parseInt(review.area2),
          2: parseInt(review.area3)
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