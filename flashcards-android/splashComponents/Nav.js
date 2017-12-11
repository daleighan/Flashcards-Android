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

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <View>
        <Text>Splash Page Here</Text>
      </View>
    )
  }
}

const Navcomp = connect((store) => {
  return {
    name: store.auth.name
  }
})(Splash);

export default Navcomp;
