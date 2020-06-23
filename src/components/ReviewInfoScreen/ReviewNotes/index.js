import React from 'react';

const reviewNote = {
	backgroundColor: 'white',
  minWidth: 100,
  height: 210,
	borderRadius: 6,
	boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
	color: '#126872',
	cursor: 'pointer',
};

function ReviewNotes(review) {
  return (
    <div className='row' style={reviewNote}>
      <div className="col-12 pt-2">
        Notes: <br/>
        {review.review.notes}
      </div>
      
    </div>
  )
}

export default ReviewNotes;