import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import { connect } from 'react-redux';

class DeckManager extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    drawerLabel: 'Deck Manager',
    drawerIcon: () => (
      <Image source={require('./images.png')} />
    )
  };

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
