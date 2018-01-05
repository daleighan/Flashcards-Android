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
import { connect } from 'react-redux';

class DeckManager extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <View>
        <Text>Deck Manager</Text>
      </View>
    )
  }
}


const DeckMangercomp = connect((store) => {
  return {
    allCards: store.cards.allCards
  }
})(DeckManager);

export default DeckMangercomp;
