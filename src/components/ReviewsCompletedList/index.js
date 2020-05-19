import React from 'react';

const windowStyle2 = {
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


function ReviewsCompletedList(employees) {
  return(
      <div style={windowStyle2} className='ml-4 mb-4'>
        <div style={headingStyle}>
          <p className='wHeading p-2 mb-0'>Review Log</p>
        </div>
        <div className='m-3'>
          <div className='container'>
            Review List
          </div>
        </div>
      </div>
    );
}

export default ReviewsCompletedList;