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

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <View>
        <Text style={styles.text}>Login</Text>
        <Text style={styles.text}>Username</Text><TextInput style={styles.input}/>
        <Text style={styles.text}>Password</Text><TextInput style={styles.input}/>
        <Button onPress={()=> alert('hello')} title="Login" color="red"/>
        <Text>Haven't signed up yet?</Text><Link to="/signup"><Text>Click here.</Text></Link>
      </View>
    )
  }
}

export default Login;


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
