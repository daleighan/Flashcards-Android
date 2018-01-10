import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import Splash from '../splashComponents/Splash';
import LoginNav from './LoginNav';
import Loading from './Loading';
import authActions from '../actions/authActions';
import RootDrawer from '../splashComponents/DrawerNavigator';
import Home from './Home';

class Toplevel extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    authActions.verifySession();
  }

  render = () => {
    if (this.props.checkingLoginStatus === true) {
      return (<Loading />)
    }
    else if (this.props.loggedIn === false && this.props.checkingLoginStatus == false) {
      return (<LoginNav />)
    } else if (this.props.loggedIn === true) {
      return (<RootDrawer />)
    }
  }
}

const Toplevelcomp = connect((store) => {
  return {
    loggedIn: store.auth.loggedIn,
    checkingLoginStatus: store.auth.checkingLoginStatus,
  }
})(Toplevel);

export default Toplevelcomp;

