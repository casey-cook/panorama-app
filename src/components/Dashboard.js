import React, { Component } from 'react';
import Navigation from './Nav'
import WelcomeDash from './WelcomeDash';
import EmpSnapshot from './EmpSnapshot';
import TeamAverage from './TeamAverage';
import UpcomingReviews from './UpcomingReviews';

class Dashboard extends Component {

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
              <TeamAverage employees={this.props.employees} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <EmpSnapshot employees={this.props.employees} />
            </div>
            <div className="col">
              <UpcomingReviews employees={this.props.employees} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard;