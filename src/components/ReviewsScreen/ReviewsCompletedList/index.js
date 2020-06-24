import React from 'react';
import ReviewList from '../ReviewList';

const windowStyle2 = {
	maxHeight: 450,
	backgroundColor: '#81ecc9',
	maxWidth: 400,
  minWidth: 320,
  borderBottomLeftRadius: 6,
	borderBottomRightRadius: 6,
  overflowY:'auto'
};

const headingStyle = {
  maxWidth: 400,
  minWidth: 320,
	backgroundImage: 'linear-gradient(to right, #0b877d , #18c29c)',
	borderTopLeftRadius: 6,
	borderTopRightRadius: 6,
};





function ReviewsCompletedList(employees) {
  return(
      <div>
        <div style={headingStyle} className='ml-2'>
          <p className='wHeading p-2 mb-0'>Review Log</p>
        </div>
        <div style={windowStyle2} className='ml-2 mb-4 hideMe'>
          <div className='m-3' >
            <div className='container'>
              <ReviewList employees={employees}/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ReviewsCompletedList;