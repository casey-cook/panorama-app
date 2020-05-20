import React from 'react';
import {Link} from 'react-router-dom';

const empRowStyle = {
	backgroundColor: '#d0fdf9',
  minWidth: 100,
	borderRadius: 6,
	boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
	color: '#126872',
};

const scoreStyle = {
	borderRadius: '50%',
	backgroundColor: '#0b877d',
	minWidth: 25,
	minHeight: 30,
	color: 'white',
  fontSize: '.9em',
};

const imageStyle = {
	borderRadius: 50,
};

function ReviewList({employees}) {
 
  return employees.employees.map((employee) => (
      employee.reviews.map(review=>(
        <Link to={`/reviews/${review.id}`} employee={employee} key={review.id}>
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
          <div style={scoreStyle} className='col-1 ml-4 pl-2 pt-1 my-auto'>{((review.scores[0]+review.scores[1]+review.scores[2])/3).toFixed(1)}</div>
        </div>
      </Link>
      ))
      
));
  
}


export default ReviewList;