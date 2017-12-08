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
import Store from './store';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render = () => {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View>
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
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
          </View>
        </NativeRouter>
      </Provider>
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


