import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import BusinessIndexItem from './business_index_item';
import BusinessTypeContainer from './business_type_container';
import GreetingContainer from '../greeting/greeting_container';
import BusinessMap from '../map/map';
import BusinessHeader from '../header/business_header';
import SearchContainer from '../search/search_container';
import PropTypes from 'prop-types';

class BusinessIndex extends React.Component {

  render() {
    let businesses = this.props.businesses.map(business =>
      <BusinessIndexItem key={business.id} business={business} />);
    return (
      <div>
        <BusinessHeader />
        <div className="ike-business-main-div">
          <ul>
            {businesses}
          </ul>

          <div className="ike-business-index-map">
            <BusinessMap businesses={this.props.businesses}/>
          </div>
        </div>

      </div>
    )
  }
}

BusinessIndex.propTypes = {
  businesses: PropTypes.arrayOf(PropTypes.object)
}

export default withRouter(BusinessIndex);
// import React from 'react';
// import { Link, Redirect, withRouter } from 'react-router-dom';
// import BusinessIndexItem from './business_index_item';
// import BusinessTypeContainer from './business_type_container';
// import GreetingContainer from '../greeting/greeting_container';
// import BusinessMap from '../map/map';
// import BusinessHeader from '../header/business_header';
// import SearchContainer from '../search/search_container';
//
// class BusinessIndex extends React.Component {
//   componentDidMount() {
//     this.props.requestAllBusinesses();
//   }
//
//   componentWillReceiveProps(newProps) {
//     if (this.props.match.params.businesses !== newProps.match.params.businesses) {
//       this.props.requestAllBusinesses();
//     }
//   }
//
//   render() {
//     if (Object.values(this.props.businesses).length === 0) {
//       return <p></p>;
//     }
//     let businesses;
//
//     if (Object.values(this.props.businessType).length === 0) {
//       businesses = Object.values(this.props.businesses).map(business =>
//         <BusinessIndexItem key={business.id} business={business} />)
//     } else {
//       let businessesOfType = this.props.businessType.businessIds.map(id => this.props.businesses[id]);
//       businesses = businessesOfType.map(business => {
//         if (business) {
//           return <BusinessIndexItem key={business.id} business={business} />;
//         }
//       });
//     }
//     return (
//       <div>
//         <BusinessHeader />
//         <div className="ike-business-main-div">
//           <ul>
//             {businesses}
//           </ul>
//
//           <div className="ike-business-index-map">
//             <BusinessMap businesses={Object.values(this.props.businesses)}/>
//           </div>
//         </div>
//
//       </div>
//     )
//   }
// }
//
// export default withRouter(BusinessIndex);
