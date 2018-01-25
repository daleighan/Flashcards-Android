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
    let {card, style} = this.props;
    let {flipped} = this.state;
    return (
      <View style={style}>
        {!flipped ? <Text>{card.front}</Text> : <Text>{card.back}</Text>}
        <Button
          onPress={() => this.setState({flipped: !flipped})}
          title="flip"
        />
      </View>
    );
  };
}

export default Card;
