import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {  Link } from 'react-router-native';
import Orientation from 'react-native-orientation';
import { TabNavigator } from "react-navigation";
import Home from './Home';
import Login from './Login'
import Signup from './Signup';
import Toplevelcomp from './Toplevel';

const TabNav = TabNavigator({
  Main: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: 'Signup'
    }
  }
});

class LoginNav extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    Orientation.lockToPortrait();
  }

  render = () => {
    return (
      <TabNav />
    )
  }
}

export default LoginNav;

