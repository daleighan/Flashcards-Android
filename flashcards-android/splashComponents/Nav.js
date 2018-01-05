import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { 
  NativeRouter, 
  Route, 
  Link 
} from 'react-router-native';
import { connect } from 'react-redux';
import Orientation from 'react-native-orientation';
import authActions from '../actions/authActions';
import cardActions from '../actions/cardActions';
import DrawerNavigator from './DrawerNavigator';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    Orientation.lockToLandscape();
    cardActions.initialFetch(this.props.name);
  }

  render = () => {
    return (
      <View>
        <DrawerNavigator />
        <Text>Nav Bar</Text>
        <Button onPress={() => authActions.logout()} title="Logout" color="red"/>
      </View>
    )
  }
}

const Navcomp = connect((store) => {
  return {
    name: store.auth.name
  }
})(Nav);

export default Navcomp;
