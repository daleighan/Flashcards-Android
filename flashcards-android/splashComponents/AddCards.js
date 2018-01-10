import React, { Component } from 'react';
import { 
  Button, 
  View, 
  Text,
  Image,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import cardActions from '../actions/cardActions'

class AddCards extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    drawerLabel: 'Add Cards',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./images.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render = () => {
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('DrawerOpen')} title="Menu"/>
      </View>
    )
  }
}
const AddCardscomp = connect((store) => {
  return {
    name: store.auth.name,
    currentCategory: store.cards.currentCategory,
    currentDeck: store.cards.currentDeck,
  }
})(AddCards);

export default AddCardscomp;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
