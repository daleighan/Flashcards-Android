import React, { Component } from 'react';
import { 
  Button, 
  View, 
  Text,
  Image
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Splash from './Splash';
import DeckManager from './DeckManager';
import authActions from '../actions/authActions';

const Drawer = DrawerNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      drawer: () => ({ label: 'splash' })
    }
  },
  DeckManager: {
    screen: DeckManager,
    navigationOptions: {
      drawer: () => ({ label: 'splash' })
    }
  },
});

const RootDrawer = () => (
  <View>
    <Drawer />
    <Button onPress={() => authActions.logout()} title="Logout" color="blue"/>
  </View>
);

export default RootDrawer;
