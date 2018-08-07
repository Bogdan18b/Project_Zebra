import React from 'react';
import GreetingContainer from '../greeting/greeting_home_container';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_home_page_container';
import BusinessTypeContainer from '../business/business_type_home_container';

class Header extends React.Component {
  randomImage() {
    let numbers = [1, 2, 3];
    let names = ['avra', 'amelie', 'buenos', 'blue', 'brats', 'data', 'nonsolo', 'nerai', 'bb', 'ludlow', 'gard', 'havana', 'pierre', 'ocean', 'numpang'];
    names = names[Math.floor(Math.random()*names.length)];
    numbers = numbers[Math.floor(Math.random()*numbers.length)];
    let picture = `https://s3.amazonaws.com/project-ike-seeding-dev/${names}${numbers}.jpg`;
    return picture;
  };

  render() {
    return (
      <div>
          <Link id="ike-home-write-review" to="/businesses">Write a Review</Link>
        <GreetingContainer />
        <div className="ike-homepage-header" style ={ { backgroundImage: `url(${this.randomImage()}` }}>
          <Link to="/"><img id="logo-pic" src="https://s3.amazonaws.com/project-ike-seeding-dev/logo.png"/></Link>
          <SearchContainer />
          <BusinessTypeContainer/>
        </div>
        <div className="ike-homepage-login-button">
        </div>
      </div>
    );
  }
};

export default Header;
