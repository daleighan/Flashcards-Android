import React, { Component } from 'react';
import { 
  Button, 
  View, 
  Text,
  Image
} from 'react-native';
import { DrawerNavigator, StackNavigator, NavigationActions } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Splash from './Splash';
import DeckManager from './DeckManager';
import authActions from '../actions/authActions';

const Drawer = StackNavigator(
  {
    Splash: {
      screen: Splash
    }
  }, {
    initialRouteName: 'Splash'
  }
);

const RootDrawer = () => (
  <View>
    <Drawer ref={nav => { this.navigator = nav; }} />
    <Button onPress={() => authActions.logout()} title='Logout' color='blue'/>
    <Button onPress={() => console.log(this.navigator)} title='Open Drawer' color="red"/>
  </View>
);

export default RootDrawer;
