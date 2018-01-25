import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
    };
  }

  render = () => {
    let {card} = this.props;
    return (
      <View style={styles.contentContainer}>
        <Text>{card.front}</Text>
      </View>
    );
  };
}

export default Card;

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 50,
    borderWidth: 2,
    borderColor: '#CCC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
