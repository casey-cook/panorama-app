import React, { Component } from 'react';
import ReviewsCompletedList from '../ReviewsCompletedList';


class Reviews extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row mt-5">
            <div className="col">
              <ReviewsCompletedList employees={this.props.employees}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Reviews;