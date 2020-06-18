import * as ActionTypes from './ActionTypes';

// defining an action creator function 
export const completeReview = (reviewId, name, area1, area2, area3, notes, complete) => ({
  type: ActionTypes.REVIEW_COMPLETED,
  payload: {
    reviewId: reviewId,
    name: name,
    area1: area1,
    area2: area2,
    area3: area3,
    notes: notes,
    complete: complete
  }
})