import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Picker,
} from 'react-native';
import {connect} from 'react-redux';
import Orientation from 'react-native-orientation';
import cardActions from '../actions/cardActions';
import CarouselHolder from './CarouselHolder';

class Splash extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    drawerLabel: 'Splash Page',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('./images.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  componentWillMount() {
    Orientation.lockToLandscape();
    if (!this.props.fetched) {
      cardActions.initialFetch(this.props.name);
    }
  }

  render = () => {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Menu"
        />
        <Picker
          mode="dropdown"
          selectedValue={this.props.currentCategory}
          onValueChange={category => cardActions.updateCategory(category)}>
          <Picker.Item label="Select A Category" value={null} />
          {this.props.categories.map((category, i) => {
            return <Picker.Item key={i} label={category} value={category} />;
          })}
        </Picker>
        {this.props.currentCategory === null ? (
          <View>
            <Text>Please Select a Category</Text>
          </View>
        ) : (
          <CarouselHolder />
        )}
      </View>
    );
  };
}

const Splashcomp = connect(store => {
  return {
    name: store.auth.name,
    fetched: store.cards.fetched,
    categories: store.cards.categories,
    currentCategory: store.cards.currentCategory,
  };
})(Splash);

export default Splashcomp;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
