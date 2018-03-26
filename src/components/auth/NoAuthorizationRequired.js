import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class NotAuthentication extends Component {
    componentWillMount() {
      if (this.props.isLoggedIn) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.isLoggedIn) {
        console.log("UNMOUNTING === CHANGE LOCATION '/'")
        this.props.history.push('/');
      }
    }

    PropTypes = {
      router: PropTypes.object,
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { isLoggedIn: state.auth.get('isLoggedIn') };
  }

  return connect(mapStateToProps)(NotAuthentication);
}