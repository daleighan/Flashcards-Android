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

  componentWillMount = () => {
    authActions.changeInput('', 'all');
  }

  render = () => {
    return (
      <View>
        <Text style={styles.text}>Signup</Text>
        <Text style={styles.text}>Username</Text>
        <TextInput 
          style={styles.input} 
          value={this.props.name} 
          onChangeText={(text) => authActions.changeInput(text, 'username')}
        />
        <Text style={styles.text}>E-mail</Text>
        <TextInput 
          style={styles.input} 
          value={this.props.email} 
          onChangeText={(text) => authActions.changeInput(text, 'email')}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput 
          style={styles.input} 
          value={this.props.password} 
          onChangeText={(text) => authActions.changeInput(text, 'password')}
        />
        <Text style={styles.text}>Confirm Password</Text>
        <TextInput 
          style={styles.input} 
          value={this.props.confirmation} 
          onChangeText={(text) => authActions.changeInput(text, 'confirmation')}
        />
        <Button onPress={() => authActions.signUp(this.props.name, this.props.email, this.props.password)} title="Sign Up" color="red"/>
        <Text>Already have and account?</Text>
        <Button onPress={() => this.props.navigation.navigate('Login')} title='Click Here' color= 'red'/>
      </View>
    )
  }
}

const Signupcomp = connect((store) => {
  return {
    name: store.auth.name,
    email: store.auth.email,
    password: store.auth.password,
    confirmation: store.auth.confirmation
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
