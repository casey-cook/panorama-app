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
            <div className="col-xs-12 col-md-6 ">
              <WelcomeDash incomplete={this.props.incomplete} />
            </div>
            <div className="col-xs-12 col-md-6 ">
              <TeamAverage employees={this.props.employees} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6 ">
              <EmpSnapshot employees={this.props.employees} addEmployee={this.props.addEmployee} />
            </div>
            <div className="col-xs-12 col-md-6 ">
              <UpcomingReviews  
                incomplete={this.props.incomplete} 
                employees={this.props.employees} 
                completeReview={this.props.completeReview} 
                createReview={this.props.createReview} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard;