import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import AppHeader from '../partials/Header';

export default (ComposedComponent, header=false) => {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.isLoggedIn) {
        this.props.history.push({
          pathname: '/login',
          from: this.props.match.path
        });
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isLoggedIn) {
        this.props.history.push('/login');
      }
    }

    PropTypes = {
      router: PropTypes.object,
    }

    render() {
      let cc = <ComposedComponent {...this.props} />;

      return header ?
        <Box flex={true}>
          <AppHeader />
          {cc}
        </Box> : cc;
    }
  }

  function mapStateToProps(state) {
    return {isLoggedIn: state.auth.get('isLoggedIn')};
  }

  return connect(mapStateToProps)(Authentication);
};