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
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('DrawerOpen')} title="Menu"/>
        <Text>Splash Page</Text>
      </View>
    )
  }
}

const Splashcomp = connect((store) => {
  return {
    name: store.auth.name
  }
})(Splash);

export default Splashcomp;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
