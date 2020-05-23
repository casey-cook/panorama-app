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


function RenderReviewList({incomplete}) {

    let toDisplay = incomplete.filter((review)=> review.length !== 0)

    return toDisplay.map((review)=>{

    return (
		<div style={empRowStyle} key={review[0].id} className='row pt-2 pb-2 mb-3'>
			<div className='col-4'>
      {review[0].date.month}/{review[0].date.day}/{review[0].date.year}
     
			</div>
      <div className='col-6'>
				{review[0].name}
			</div>
      <div className="col-1">
        <button>></button>
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
					<RenderReviewList incomplete={props.incomplete} />
				</div>
			</div>
		</div>
	);
}

export default UpcomingReviews;
