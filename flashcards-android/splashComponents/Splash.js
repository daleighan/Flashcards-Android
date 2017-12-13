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

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <View>
        <Text>Splash Page</Text>
      </View>
    )
  }
}

const Splashcomp = connect((store) => {
  return {
    name: store.auth.name
  }
})(Splash);

export default Splashcomp;
