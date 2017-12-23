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

class LoginNav extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    Orientation.lockToPortrait();
  }

  render = () => {
    return (
      <View>
        <Link to="/">
        <Text style={styles.link}>About</Text>
        </Link>
        <Link to="/login">
          <Text style={styles.link}>Login</Text>
        </Link>
        <Link to="/signup">
          <Text style={styles.link}>Signup</Text>
        </Link>
      </View>
    )
  }
}

export default LoginNav;

const styles = StyleSheet.create({
  link: {
    fontSize: 15,
    color: 'red'
  }
});
