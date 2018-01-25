import React, {Component} from 'react';
import {Button, View, Text, Image, StyleSheet} from 'react-native';
import {DrawerNavigator, NavigationActions} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Splash from './Splash';
import DeckManager from './DeckManager';
import AccountOptions from './AccountOptions';
import AddCards from './AddCards';

const RootDrawer = DrawerNavigator({
  Splash: {
    screen: Splash,
  },
  Management: {
    screen: DeckManager,
  },
  AddCards: {
    screen: AddCards,
  },
  AccountOptions: {
    screen: AccountOptions,
  },
});

export default RootDrawer;
