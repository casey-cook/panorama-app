import React from 'react';

const windowStyle = {
	minHeight: 355,
	backgroundColor: '#81ecc9',
  maxWidth: 400,
  minWidth: 400,
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


function RenderReviewDate({employee}) {

  return (
    employee.reviews.map(review => {
      if (!review.complete) {
      return (
        review.date.month + '/' + review.date.day
      )
      } else return 'x'
    })
  )
}


function RenderReviewList({employees}) {
  
  
  return employees.map((employee) => {

    return (
    
		<div key={employee.id} style={empRowStyle} className='row pt-2 pb-2 mb-3'>
			<div className='col-4'>
				<RenderReviewDate employee={employee}/>
			</div>
      <div className='col-6'>
				{employee.name}
			</div>
		</div>
  )});
    
}

function UpcomingReviews(props) {

	return (
		<div style={windowStyle} className='ml-4'>
			<div style={headingStyle}>
				<p className='wHeading p-2 mb-0'>Upcoming Reviews</p>
			</div>
			<div className='m-3'>
				<div className='container'>
					<RenderReviewList employees={props.employees} />
				</div>
			</div>
		</div>
	);
}

export default UpcomingReviews;
