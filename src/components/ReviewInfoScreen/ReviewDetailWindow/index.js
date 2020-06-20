import React from 'react';
import ReviewDetailList from '../ReviewDetailList';
import ReviewNotes from '../ReviewNotes';

const windowStyle3 = {
	minHeight: 470,
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


function ReviewDetailWindow({review}) {
  console.log('Review, From Review Detail Window:')
  console.log(review)
  return(
    <div style={windowStyle3} className='mt-4 ml-2'>
    <div style={headingStyle}>
      <p className='wHeading p-2 mb-0'>{review[0][0].name} - {review[0][0].date.month}/{review[0][0].date.day}/{review[0][0].date.year}</p>
    </div>
    <div className='m-3'>
      <div className='container'>
        <ReviewDetailList review={review[0][0]}/>
        <ReviewNotes review={review[0][0]}/>
      </div>
    </div>
  </div>
  )
}

export default ReviewDetailWindow;