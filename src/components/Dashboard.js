import React, { Component } from 'react';
import { EMPLOYEES } from '../shared/employeeData';
import Navigation from './Nav'
import WelcomeDash from './WelcomeDash';
import EmpSnapshot from './EmpSnapshot';
import TeamAverage from './TeamAverage';
import UpcomingReviews from './UpcomingReviews';

class Dashboard extends Component {

  constructor(props) {
		super(props);
		this.state = {
			employees: EMPLOYEES,
		};
	}


  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className='container'>
          <div className="row">
            <div className="col">
              <WelcomeDash />
            </div>
            <div className="col">
              <TeamAverage employees={this.state.employees} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <EmpSnapshot employees={this.state.employees} />
            </div>
            <div className="col">
              <UpcomingReviews employees={this.state.employees} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard;