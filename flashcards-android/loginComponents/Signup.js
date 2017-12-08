import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
import authActions from '../actions/authActions';

class Signup extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    console.log(authActions.changeName)
    return (
      <View>
        <Text style={styles.text}>Signup</Text>
        <Text style={styles.text}>Username</Text><TextInput style={styles.input}/>
        <Text style={styles.text}>Password</Text><TextInput style={styles.input}/>
        <Text style={styles.text}>Confirm Password</Text><TextInput style={styles.input}/>
        <Button onPress={() => authActions.changeName('Alex')} title="Test button" color="red"/>
        <Button onPress={() => console.log(this.props)} title="Sign Up" color="red"/>
        <Text>Already have and account?</Text><Link to="/login"><Text>Click here.</Text></Link>
      </View>
    )
  }
}

let Signupcomp = connect((store) => {
  console.log(store);
  return {
    name: store.authReducers.name
  }
})(Signup);

export default Signupcomp;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
  },
  input: {
    fontSize: 15,
    color: 'grey'
  }
});
