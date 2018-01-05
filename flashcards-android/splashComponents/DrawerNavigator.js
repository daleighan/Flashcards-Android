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

const RootDrawer = DrawerNavigator({
  Splash: {
    screen: Splash,
  },
  DeckManager: {
    screen: DeckManager,
  },
});

export default RootDrawer;
