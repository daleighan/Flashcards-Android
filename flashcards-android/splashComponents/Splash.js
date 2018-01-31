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
    let {
      fetched,
      name,
      currentCategory,
      categories,
      allCards,
      navigation,
    } = this.props;
    Orientation.lockToLandscape();
    if (!fetched) {
      cardActions.initialFetch(name);
    }
    if (currentCategory === 'adding') {
      cardActions.updateCategory(categories[0]);
    }
    if (allCards.length === 0 && fetched === true) {
      navigation.navigate('AddCards');
      alert('To add your first category, simply create the first card in it');
    }
  }

  componentDidUpdate() {
    let {allCards, fetched, navigation} = this.props;
    if (allCards.length === 0 && fetched === true) {
      navigation.navigate('AddCards');
      alert('To add your first category, simply create the first card in it');
    }
  }

  render = () => {
    let {allCards, loading, categories, currentCategory} = this.props;
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Menu"
        />
        <Picker
          mode="dropdown"
          selectedValue={currentCategory}
          onValueChange={category => cardActions.updateCategory(category)}>
          {categories.map((category, i) => {
            return <Picker.Item key={i} label={category} value={category} />;
          })}
        </Picker>
        {currentCategory === null || loading === true ? (
          <View>
            <Text>Loading</Text>
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
    loadingCategory: store.cards.loadingCategory,
    allCards: store.cards.allCards,
    loading: store.cards.loading,
  };
})(Splash);

export default Splashcomp;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
