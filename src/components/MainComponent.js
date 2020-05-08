import React from 'react';
import Dashboard from './Dashboard';
import Employees from './Employees';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

function MainComponent() {
	return <div>
          <Switch >
            <Route path='/dashboard' component={Dashboard}  />
            <Route path='/employees' component={Employees}  />

            <Redirect to='/dashboard' />
          </Switch>
        </div>;
}

export default withRouter(MainComponent);
