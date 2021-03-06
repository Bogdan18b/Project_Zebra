import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { requestAllReviews } from "../../actions/review_actions";

const mapStateToProps = ({ entities, session }) => {
  let user = Object.values(entities.users).filter(
    user => user.id === session.id
  )[0];
  return {
    user: user,
    reviews: entities.reviews
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllReviews: () => dispatch(requestAllReviews())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
