import * as ReviewApiUtil from '../util/review_api_util';

export const FETCH_ALL_REVIEWS = "FETCH_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

export const fetchAllReviews = ({ reviews, users, businesses}) => {
  return {
    type: FETCH_ALL_REVIEWS,
    reviews,
    users,
    businesses
  };
};

export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

export const receiveReviewErrors = (errors) => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  };
};

export const requestAllReviews = () => {
  return dispatch => {
    return ReviewApiUtil.fetchAllReviews().then(payload => {
      return dispatch(fetchAllReviews(payload));
    });
  };
};

export const createReview = (review) => {
  return dispatch => {
    return ReviewApiUtil.createReview(review).then(
      review => {
        return dispatch(receiveReview(review));
      },
      errors => {
        return dispatch(receiveReviewErrors(errors.responseJSON));
      }
    );
  };
};
