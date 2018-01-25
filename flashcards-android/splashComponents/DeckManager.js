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
import cardActions from '../actions/cardActions';

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

  componentWillMount() {
    let {categories, currentCategory} = this.props;
    if (!categories.includes(currentCategory)) {
      this.props.navigation.navigate('AddCards');
      alert(
        'To add a new category, simply enter a new category here and add the first card to create it',
      );
    }
  }
  componentWillReceiveProps() {
    let {categories, currentCategory} = this.props;
    if (!categories.includes(currentCategory)) {
      this.props.navigation.navigate('AddCards');
      alert(
        'To add a new category, simply enter a new category here and add the first card to create it',
      );
    }
  }

  render = () => {
    let {name, currentCategory, categories} = this.props;
    let selectedCategory = currentCategory;
    if (!categories.includes(selectedCategory)) {
      selectedCategory = 'adding';
    }
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Menu"
        />
        <Text>Deck Manager</Text>
        <Picker
          mode="dropdown"
          selectedValue={selectedCategory}
          onValueChange={category => cardActions.updateCategory(category)}>
          {this.props.categories.map((category, i) => {
            return <Picker.Item key={i} label={category} value={category} />;
          })}
          <Picker.Item label="Add A Category" value="adding" />
        </Picker>
        {!categories.includes(currentCategory) ? (
          <View>
            <Text>Loading</Text>
          </View>
        ) : null}
      </View>
    );
  };
}

const DeckMangercomp = connect(store => {
  return {
    allCards: store.cards.allCards,
    name: store.auth.name,
    currentCategory: store.cards.currentCategory,
    categories: store.cards.categories,
  };
})(DeckManager);

export default DeckMangercomp;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
