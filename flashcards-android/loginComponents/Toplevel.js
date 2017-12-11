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

class Toplevel extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    console.log(this.props);
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

const Toplevelcomp = connect((store) => {
  return {
    loggedIn: store.auth.loggedIn
  }
})(Toplevel);

export default Toplevelcomp;


const styles = StyleSheet.create({
  link: {
    fontSize: 15,
    color: 'red'
  }
});
