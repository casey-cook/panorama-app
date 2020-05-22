import React, { Component } from 'react';
import Navigation from '../Nav/index'
import WelcomeDash from '../WelcomeDash/index';
import EmpSnapshot from '../EmpSnapshot/index';
import TeamAverage from '../TeamAverage/index';
import UpcomingReviews from '../UpcomingReviews/index';

class Dashboard extends Component {

  render() {
    return (
      <React.Fragment>
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