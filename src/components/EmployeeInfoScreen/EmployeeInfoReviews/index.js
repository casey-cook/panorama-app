import React from 'react';
import {Link} from 'react-router-dom';

const windowStyleRevHistory = {
	minHeight: 250,
	backgroundColor: '#81ecc9',
  maxWidth: 400,
  minWidth: 320,
	borderRadius: 6,
};

const headingStyle = {
	backgroundImage: 'linear-gradient(to right, #0b877d , #18c29c)',
	borderTopLeftRadius: 6,
	borderTopRightRadius: 6,
};

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


function ReviewList(employee) {

  return (employee.employee.reviews
    
    .filter(review => review.complete !== false) 
    .map(review => {

    return (
      
      <Link to={`/reviews/${review.reviewPage}`}>
        <div 
          style={empRowStyle} 
          className='row pt-2 pb-2 mb-3'
        >
          <div className='col-4'>
          {review.date.month}/{review.date.day}/{review.date.year}
          </div>
          <div style={scoreStyle} className='col-1 ml-auto mr-4 pl-1 pt-1'>
          {
            ((review.scores[0]+review.scores[1]+review.scores[2])/3).toFixed(1)
          }
          </div>
          
        </div>
     
      </Link>
      
    )
  })
)};
    


function EmployeeInfoReviews({employee}, props) {

	return (
		<div style={windowStyleRevHistory} className='ml-3'>
			<div style={headingStyle}>
				<p className='wHeading p-2 mb-0'>Review History</p>
			</div>
			<div className='m-3'>
				<div className='container'>
					<ReviewList employee={employee} />
				</div>
			</div>
		</div>
	);
}


export default EmployeeInfoReviews;