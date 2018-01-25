import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';
import {connect} from 'react-redux';

class DeckManager extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    drawerLabel: 'Deck Manager',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('./images.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render = () => {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Menu"
        />
        <Text>Deck Manager</Text>
      </View>
    );
  };
}

const DeckMangercomp = connect(store => {
  return {
    allCards: store.cards.allCards,
  };
})(DeckManager);

export default DeckMangercomp;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
