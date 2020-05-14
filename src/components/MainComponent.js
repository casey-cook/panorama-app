import React, { Component } from 'react';
import { EMPLOYEES } from '../shared/employeeData';
import Dashboard from './Dashboard';
import Employees from './Employees';
import Reviews from './Reviews';
import WelcomeDash from './WelcomeDash';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class MainComponent extends Component {

  constructor(props) {
		super(props);
		this.state = {
			employees: EMPLOYEES,
		};
	}
  
  render() {

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
              path={'employees/:1'}
              component = {WelcomeDash}
            />
            
            
            <Redirect to='/dashboard' />
          </Switch>
        </div>;
  }
}

export default withRouter(MainComponent);
