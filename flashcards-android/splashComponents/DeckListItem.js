import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import cardActions from '../actions/cardActions';

class DeckListItem extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <View>
        <Text>Deck List Item</Text>
      </View>
    );
  };
}

export default DeckListItem;
