import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import authActions from '../actions/authActions';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  };
}

export default Home;
