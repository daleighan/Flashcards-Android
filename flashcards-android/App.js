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
import authActions from './actions/authActions';
import Loading from './loginComponents/Loading';

class App extends Component {
  constructor(props) {
    super(props)
  }

  //componentWillMount() {
  //  authActions.verifySession();
  //}

  render = () => {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View>
            <Toplevel />
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/splash' component={Splash}/>
            <Route path='/loading' component={Loading}/>
          </View>
        </NativeRouter>
      </Provider>
    )
  }
}

export default App;


