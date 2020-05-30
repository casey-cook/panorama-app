import React, { Component } from 'react';
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
              <WelcomeDash incomplete={this.props.incomplete} />
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
              <UpcomingReviews testFunction={this.props.testFunction} incomplete={this.props.incomplete} employees={this.props.employees} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard;