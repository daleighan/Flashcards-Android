import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import Orientation from 'react-native-orientation';
import authActions from '../actions/authActions';
import cardActions from '../actions/cardActions';

class Splash extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Splash',
  };

  componentWillMount() {
    Orientation.lockToLandscape();
    cardActions.initialFetch(this.props.name);
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
