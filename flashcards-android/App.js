import React, {Component} from 'react';
import {Platform, Text, View, Button} from 'react-native';
import Toplevel from './loginComponents/Toplevel';
import {Provider} from 'react-redux';
import store from './store';
import authActions from './actions/authActions';

const App = () => (
  <Provider store={store}>
    <Toplevel />
  </Provider>
);

export default App;
