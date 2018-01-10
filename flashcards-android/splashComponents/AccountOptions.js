import React, { Component } from 'react';
import { 
  Button, 
  View, 
  Text,
  Image,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import authActions from '../actions/authActions';

class AccountOptions extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    drawerLabel: 'Account Options',
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
        <Button onPress={() => authActions.logout()} title='Logout' color="red"/>
      </View>
    )
  }
}
const AccountOptionscomp = connect((store) => {
  return {
    name: store.auth.name
  }
})(AccountOptions);

export default AccountOptionscomp;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
