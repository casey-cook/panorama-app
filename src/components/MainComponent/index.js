import React, { Component } from 'react';
import { EMPLOYEES } from '../../shared/employeeData';
import Dashboard from '../Dashboard/index';
import Employees from '../Employees/index';
import Reviews from '../Reviews/index';
import EmployeeInfo from '../EmployeeInfo/index';

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
            
            
            <Redirect to='/dashboard' />
          </Switch>
        </div>;
  }
}

export default withRouter(MainComponent);
