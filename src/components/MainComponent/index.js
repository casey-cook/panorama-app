import React, { Component } from 'react';
import { EMPLOYEES } from '../../shared/employeeData';
import Dashboard from '../Dashboard';
import Employees from '../Employees';
import Reviews from '../Reviews';
import EmployeeInfo from '../EmployeeInfo';
import ReviewInfo from '../ReviewInfo';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class MainComponent extends Component {

  constructor(props) {
		super(props);
		this.state = {
			employees: EMPLOYEES,
		};
  }
  
  
  
  render() {

  const EmployeeWithId = ({match}) => {
    return (
      <EmployeeInfo employee={this.state.employees.filter(employee => employee.id === +match.params.employeeId)[0]} />
    )
  }

  const ReviewWithId = ({match}) => {
    //note: match = review.id
    return (
      <ReviewInfo 
        review={
          this.state.employees.map(employee =>{
          return (employee.reviews.filter(review => review.id === +match.params.reviewId)
          )})
        }
      />
    )
  }

  return <div>
          <Switch >
          <Route
              exact
              path='/dashboard'
              render={() => <Dashboard employees={this.state.employees} />}
					  />
            <Route
              exact
              path='/employees'
              render={() => <Employees employees={this.state.employees} />}
					  />
            <Route
              exact
              path='/reviews'
              render={() => <Reviews employees={this.state.employees} />}
            
					  />
            <Route
              exact
              path={'/employees/:employeeId'}
              component={EmployeeWithId}
            />
            <Route
              exact
              path={'/reviews/:reviewId'}
              component={ReviewWithId}
            />
            
            <Redirect to='/dashboard' />
          </Switch>
        </div>;
  }
}

export default withRouter(MainComponent);
