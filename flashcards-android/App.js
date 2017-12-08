import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { 
  NativeRouter, 
  Route, 
  Link 
} from 'react-router-native';
import Home from './loginComponents/Home';
import Login from './loginComponents/Login'
import Signup from './loginComponents/Signup';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <NativeRouter>
        <View>
          <View>
            <Link to="/">
              <Text style={styles.link}>About</Text>
            </Link>
            <Link to="/Login">
              <Text style={styles.link}>Login</Text>
            </Link>
            <Link to="/signup">
              <Text style={styles.link}>Signup</Text>
            </Link>
          </View>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
        </View>
      </NativeRouter>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  link: {
    fontSize: 15,
    color: 'red'
  }
});


