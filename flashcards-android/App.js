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
import Home from './loginComponents/Home';
import Login from './loginComponents/Login'
import Signup from './loginComponents/Signup';
import Toplevel from './loginComponents/Toplevel';
import Splash from './splashComponents/Splash';
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
            <Toplevel />
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/splash' component={Splash}/>
          </View>
        </NativeRouter>
      </Provider>
    )
  }
}

export default App;


