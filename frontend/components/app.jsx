import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Footer } from "./footer/footer";
import BusinessIndexContainer from "./business/index/business_index_container";
import BusinessSearchIndexContainer from "./business/index/business_search_index_container";
import BusinessShowContainer from "./business/show/business_show_container";
import PopularBusinessesContainer from "./business/popular/popular_businesses_container";
import ReviewIndexContainer from "./review/review_index_container";
import CreateReviewFormContainer from "./review/create_review_form_container";
import EditReviewFormContainer from "./review/edit_review_form_container";
import UserProfileContainer from "./user_profile/user_profile_container";
import Header from "./header/header";

const App = () => (
  <Fragment>
    <Route exact path="/" component={Header} />
    <Route
      exact
      path="/businesses/:businessId"
      component={BusinessShowContainer}
    />
    <Route exact path="/businesses" component={BusinessIndexContainer} />
    <Route
      exact
      path="/businesses/search"
      component={BusinessSearchIndexContainer}
    />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute
      exact
      path="/businesses/:businessId/reviews/new"
      component={CreateReviewFormContainer}
    />
    <ProtectedRoute
      exact
      path="/businesses/:businessId/reviews/:reviewId/edit"
      component={EditReviewFormContainer}
    />
    <ProtectedRoute
      exact
      path="/user_details"
      component={UserProfileContainer}
    />
    <Route exact path="/" component={PopularBusinessesContainer} />
    <Route exact path="/" component={ReviewIndexContainer} />
    <Footer />
  </Fragment>
);

export default App;
