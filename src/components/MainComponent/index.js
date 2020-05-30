import React, { Component } from 'react';
import { EMPLOYEES } from '../../shared/employeeData';
import Dashboard from '../DashboardScreen/Dashboard';
import Employees from '../EmployeeScreen/Employees';
import Reviews from '../ReviewsScreen/Reviews';
import EmployeeInfo from '../EmployeeInfoScreen/EmployeeInfo';
import ReviewInfo from '../ReviewInfoScreen/ReviewInfo';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Navigation from '../Nav';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class MainComponent extends Component {

  constructor(props) {
		super(props);
		this.state = {
      employees: EMPLOYEES,
      addReview: function(newReview, employeeID) {
        //do like this-> this.setState((state) => ({ value: state.value + 1}));
        // this.setState(state) => ( state.employees.employeeId?.push(newReview) )
      },
      testFunction: function(){
        console.log('Triggered Yo')
      }
		};
  }
  
  
  
  
  render() {

  //Create array of incomplete reviews for dashboard
  let incomplete = [];
  this.state.employees.forEach((employee)=>{
    incomplete.push(employee.reviews.filter((review) => review.complete === false))
  })



  const EmployeeWithId = ({match}) => {
    return (
      <EmployeeInfo employee={this.state.employees.filter(employee => employee.id === +match.params.employeeId)[0]} />
    )
  }

  const ReviewWithId = ({match}) => {
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
          <Navigation />
          <TransitionGroup> 
            <CSSTransition key={this.props.location.key} classNames='page' timeout={300}> 
              <Switch >
                <Route
                    exact
                    path='/dashboard'
                    render={() => <Dashboard addReview={this.state.addReview.bind(this)} incomplete={incomplete} employees={this.state.employees} />}
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
              </CSSTransition>
            </TransitionGroup>
        </div>;
  }
}

export default withRouter(MainComponent);
