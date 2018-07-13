import React from 'react';

class BusinessShow extends React.Component {


  componentDidMount() {
    this.props.requestBusiness(this.props.match.params.businessId);
  }

  render() {
    const business = this.props.business
    if (business === undefined) {
      return <p>...coming soon</p>
    }
    return (
      <div className="ike-business-show-main">

        <div className="ike-business-show-header"></div>
        <div className="ike-business-show-header-nav">
          <ul></ul>
        </div>

          <div className="ike-business-show-title">
              <h1>{business.name}</h1>
              <h3>{business.businessType}</h3>

              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>

              <p>{business.address}</p>
              <p>{business.phone}</p>
              <p>{business.website}</p>
          </div>


          <div className="ike-business-show-pics">
            <div className="ike-business-show-map"></div>
            <img src={business.photos[0].photoURL} alt="coming soon"/>
            <img src={business.photos[1].photoURL} alt="coming soon"/>
            <img src={business.photos[2].photoURL} alt="coming soon"/>
          </div>
          <div class="ike-business-show-rev">

            <div className="ike-business-show-reviews"></div>
            <div className="ike-business-show-details">


              <ul className="ike-business-show-hours">
                <li>Mon: </li>
                <li>{business.hours[0]}</li>
                <li>Tue: </li>
                <li>{business.hours[1]}</li>
                <li>Wed: </li>
                <li>{business.hours[2]}</li>
                <li>Thu: </li>
                <li>{business.hours[3]}</li>
                <li>Fri: </li>
                <li>{business.hours[4]}</li>
                <li>Sat: </li>
                <li>{business.hours[5]}</li>
                <li>Sun: </li>
                <li>{business.hours[6]}</li>
              </ul>

            </div>
          </div>
      </div>
    );
  }

}

export default BusinessShow;
