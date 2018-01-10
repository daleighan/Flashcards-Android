import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Picker
} from 'react-native';
import { connect } from 'react-redux';
import Orientation from 'react-native-orientation';
import authActions from '../actions/authActions';
import cardActions from '../actions/cardActions';

class Splash extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    drawerLabel: 'Splash Page',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./images.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  componentWillMount() {
    Orientation.lockToLandscape();
    cardActions.initialFetch(this.props.name);
  }

  render = () => {
    console.log(this.props, 'splash props');
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('DrawerOpen')} title="Menu"/>
        <Picker
          selectedValue={this.props.currentCategory}
          onValueChange={(category) => cardActions.updateCategory(category)}>
          {this.props.categories.map((category, i) => { 
              return <Picker.Item key={i} label={category} value={category} />
            })
          }
        </Picker>
        <Text>Splash Page</Text>
      </View>
    )
  }
}

const Splashcomp = connect((store) => {
  return {
    name: store.auth.name,
    categories: store.cards.categories,
    currentCategory: store.cards.currentCategory
  }
})(Splash);

export default Splashcomp;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
