import React from 'react';
import {Link} from 'react-router-dom';

const empRowStyle = {
	backgroundColor: '#d0fdf9',
  minWidth: 100,
	borderRadius: 6,
	boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
	color: '#126872',
};

const imageStyle = {
	borderRadius: 50,
};

function ReviewList({employees}) {
 
  return employees.employees.map((employee) => (
      employee.reviews
      
      .filter(review => review.complete !== false) 

      .map(review=>(
        <Link 
          to={`/reviews/${review.reviewPage}`} 
          employee={employee} 
          key={review.id}>
          <div
          className='row pt-2 pb-2 mb-3'
          style={empRowStyle}
          >
          <div className='col-1'>
            <img
              style={imageStyle}
              alt='profile-pic'
              className='my-auto'
              height='30'
              src={employee.photo}
            />
          </div>
          <div className='col-5 ml-2 my-auto'>{employee.name}</div>
          <div className='col-3 my-auto'>{review.date.month}/{review.date.day}/{review.date.year}</div>
        </div>
      </Link>
      ))
      
));
  
}

export default ReviewList;