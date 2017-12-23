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

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    Orientation.lockToLandscape();
  }

  render = () => {
    return (
      <View>
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
