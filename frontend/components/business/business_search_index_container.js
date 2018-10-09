import React from 'react';
import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { requestAllBusinesses, requestAllBusinessTypes } from '../../actions/business_actions';

const mapStateToProps = ({ entities, type = {}, searchResults }) => {
  return {
    businesses: entities.businesses,
    types: Object.values(entities.businessTypes),
    businessType: type,
    searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllBusinesses: () => {
      return dispatch(requestAllBusinesses());
    }
  };
};

class BusinessSearchIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllBusinesses();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.businesses !== newProps.match.params.businesses) {
      this.props.requestAllBusinesses();
    }
  }

  render() {
    if (Object.values(this.props.businesses).length === 0) {
      return <p></p>;
    }
    let businesses;

    if (Object.values(this.props.businessType).length === 0) {
      businesses = this.props.searchResults.businessIds.map(id => id = this.props.businesses[id]);
    } else {
      let businessesOfType = this.props.businessType.businessIds.map(id => this.props.businesses[id]);
      businesses = businessesOfType;
    }
    return (
      <BusinessIndex businesses={businesses}/>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessSearchIndex);