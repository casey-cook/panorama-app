import { EMPLOYEES } from '../shared/employeeData';
import * as ActionTypes from './ActionTypes';

export const Employees = (state = EMPLOYEES, action) => {
	switch (action.type) {
		//ADDING EMPLOYEE
		case ActionTypes.EMPLOYEE_ADDED:
			const newId = state.length;
			const newName = action.payload.name;

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
					0: '',
					1: '',
					2: '',
				},
				reviews: [],
			};

			return [...state, newEmployee];

		//REMOVING EMPLOYEE
		case ActionTypes.EMPLOYEE_REMOVED:
			return [
				...state.filter((employee) => employee.name !== action.payload.name),
			];

		default:
			return state;
	}
};
