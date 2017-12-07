import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render = () => {
    return (
      <View>
        <Text> Hello World </Text>
      </View>
    )
  }
}

export default App;
