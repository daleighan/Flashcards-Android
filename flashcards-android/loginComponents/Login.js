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

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    authActions.changeInput('', 'all');
  }

  render = () => {
    return (
      <View>
        <Text style={styles.text}>Login</Text>
        <Text style={styles.text}>Username</Text>
        <TextInput 
          style={styles.input} 
          value={this.props.name} 
          onChangeText={(text) => authActions.changeInput(text, 'username')}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput 
          style={styles.input} 
          value={this.props.password} 
          onChangeText={(text) => authActions.changeInput(text, 'password')}
        />
        <Button onPress={() => console.log(this.props)} title="Login" color="red"/>
        <Text>Haven't signed up yet?</Text><Link to="/signup"><Text>Click here.</Text></Link>
      </View>
    )
  }
}

const Logincomp = connect((store) => {
  return {
    name: store.auth.name,
    password: store.auth.password,
  }
})(Login);

export default Logincomp;

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
