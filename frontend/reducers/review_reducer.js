import { FETCH_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { FETCH_BUSINESS } from '../actions/business_actions';
import { merge } from 'lodash';

const reviewReducer = (state = {}, action) => {
  let reviews;
  switch (action.type) {
    case FETCH_ALL_REVIEWS:
      return merge({}, state, action.reviews);
      case FETCH_BUSINESS:
        return merge({}, state, action.payload.reviews);
      case RECEIVE_REVIEW:
        return merge({}, state, {[action.payload.review.id]: action.payload.review});
      case REMOVE_REVIEW:
        let newState = merge({}, state);
          delete newState[action.reviewId.id];
        return newState;
    default:
      return state;
  }
};

export default reviewReducer;
