import React from 'react';
import ReviewList from '../ReviewList';

const windowStyle2 = {
	maxHeight: 500,
	backgroundColor: '#81ecc9',
	maxWidth: 400,
  minWidth: 320,
  borderRadius: 6,
  overflowY:'auto'
};

const headingStyle = {
	backgroundImage: 'linear-gradient(to right, #0b877d , #18c29c)',
	borderTopLeftRadius: 6,
	borderTopRightRadius: 6,
};





function ReviewsCompletedList(employees) {
  return(
      <div style={windowStyle2} className='ml-2 mb-4 hideMe'>
        <div style={headingStyle}>
          <p className='wHeading p-2 mb-0'>Review Log</p>
        </div>
        <div className='m-3' >
          <div className='container'>
            <ReviewList employees={employees}/>
          </div>
        </div>
      </div>
    );
}

export default ReviewsCompletedList;