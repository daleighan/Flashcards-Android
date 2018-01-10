import React, { Component } from 'react';
import { 
  Button, 
  View, 
  Text,
  Image,
  StyleSheet
} from 'react-native';
import { DrawerNavigator, TabNavigator, NavigationActions } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Splash from './Splash';
import DeckManager from './DeckManager';
import authActions from '../actions/authActions';

const RootDrawer = DrawerNavigator({
  Splash: {
    screen: Splash,
  },
  Management: {
    screen: DeckManager,
  },
});

export default RootDrawer;
