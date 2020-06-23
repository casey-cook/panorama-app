import React, { Component } from 'react';

import Navigation from '../Nav';
import Dashboard from '../DashboardScreen/Dashboard';
import Employees from '../EmployeeScreen/Employees';
import Reviews from '../ReviewsScreen/Reviews';
import EmployeeInfo from '../EmployeeInfoScreen/EmployeeInfo';
import ReviewInfo from '../ReviewInfoScreen/ReviewInfo';

import {TransitionGroup, CSSTransition} from 'react-transition-group';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { createReview, completeReview, addEmployee, delEmployee, deleteReview } from '../../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    employees: state.employees
  }
}

//handles allowing/making the dispatching of actions available to components
const mapDispatchToProps = {
  createReview: (employeeName, date) => (createReview(employeeName, date)),
  completeReview: (reviewId, name, area1, area2, area3, notes, complete) => (completeReview(reviewId, name, area1, area2, area3, notes, complete)),
  deleteReview: (review) => (deleteReview(review)),
  addEmployee: (name) => (addEmployee(name)),
  delEmployee: (name) => (delEmployee(name)),
  
}

class MainComponent extends Component {
  
  render() {

  //Create array of incomplete reviews for dashboard
  let incomplete = [];
  this.props.employees.forEach((employee)=>{
    incomplete.push(employee.reviews.filter((review) => review.complete === false))
  })

  incomplete = incomplete.filter(el => {
    return el != null;
  });

  const EmployeeWithId = ({match}) => {
    return (
      <EmployeeInfo employee={this.props.employees.filter(employee => employee.id === +match.params.employeeId)[0]} />
    )
  }

  const ReviewWithId = ({match}) => {
    return (
      <ReviewInfo 
        review={
          this.props.employees.map(employee =>{
          return (employee.reviews.filter(review => review.reviewPage === +match.params.reviewId)
          )})
        }
        deleteReview={this.props.deleteReview}
      />
    )
  }

  return <div>
          <Navigation />
          <TransitionGroup> 
            <CSSTransition key={this.props.location.key} classNames='page' timeout={300}> 
              <Switch >
                <Route
                    exact
                    path='/dashboard'
                    render={() => <Dashboard 
                                    incomplete={incomplete} 
                                    employees={this.props.employees}
                                    createReview={this.props.createReview}
                                    completeReview={this.props.completeReview} 
                                    addEmployee={this.props.addEmployee}
                                  />}
                />
                  <Route
                    exact
                    path='/employees'
                    render={() => <Employees employees={this.props.employees} delEmployee={this.props.delEmployee} />}
                  />
                  <Route
                    exact
                    path='/reviews'
                    render={() => <Reviews employees={this.props.employees} />}
                  
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
              </CSSTransition>
            </TransitionGroup>
        </div>;
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
