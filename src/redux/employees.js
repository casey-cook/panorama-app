import { EMPLOYEES } from '../shared/employeeData';
import * as ActionTypes from './ActionTypes';

export const Employees = (state = EMPLOYEES, action) => {
  switch (action.type) {
    
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
    

    //ADDING EMPLOYEE  
    case ActionTypes.EMPLOYEE_ADDED:

    const newId = (state.length);
    const newName = action.payload.name;
    const newMonth = new Date().getMonth() + 1
    const newDay = new Date().getDate() 
    const newYear = new Date().getFullYear()

    //IIFE for pageNumber
    const pageNumber = (function() {
      let counter = 0;
      state.map(employee=>{
        counter += employee.reviews.length
        return counter;
      })
      console.log(`Counter: ${counter}`)
      return counter;
      
    })();

    //Building new employee
    const newEmployee = {
      id: newId,
      name: newName,
      photo: 'assets/img/newEmployee.png',
      totalScore: function () {
        return (
          (this.performanceAreaScores[0] +
            this.performanceAreaScores[1] +
            this.performanceAreaScores[2]) /
          3
        ).toFixed(1);
      },
      performanceAreas: {
        0: 'Customer Service',
        1: 'Attendance',
        2: 'Cash Handling',
      },
      performanceAreaScores: {
        0: 3.0,
        1: 3.0,
        2: 3.0,
      },
      reviews: [
        {
          employeeId: newId,
          id: 0,
          reviewPage: pageNumber,
          name: newName,
          date: {
            year: newYear,
            month: newMonth,
            day: newDay,
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
          notes: `This is a placeholder review for new employees.`,
          complete: false,
        },
      ],
    };

    return [
      ...state, newEmployee
    ]

    case ActionTypes.EMPLOYEE_REMOVED:
        
      return [...state.filter(employee => employee.name !== action.payload.name)];

    default:
      return state;
  }
}


