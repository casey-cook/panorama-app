import React, { Component } from 'react';
import Navigation from '../Nav/index';
import ReviewsCompletedList from '../ReviewsCompletedList';

class Reviews extends Component {

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="container">
          <div className="row mt-5">
            <div className="col">
              <ReviewsCompletedList employees={this.employees}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Reviews;