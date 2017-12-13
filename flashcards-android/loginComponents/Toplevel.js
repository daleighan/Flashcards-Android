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
import Nav from '../splashComponents/Nav';
import authActions from '../actions/authActions';

class Toplevel extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    authActions.verifySession();
  }

  render = () => {
    if (this.props.loggedIn === false) {
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
    } else {
      return (<Nav />)
    }
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
