import React, { Component } from 'react';
import { 
  Button, 
  View, 
  Text,
  Image,
  StyleSheet,
  Picker,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import cardActions from '../actions/cardActions';

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
  }

  render = () => {
    let { name, currentCategory, newCategory, newCard, categories } = this.props;
    let selectedCategory = currentCategory;
    if (!categories.includes(selectedCategory)) {
      selectedCategory = 'adding';
    }
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('DrawerOpen')} title="Menu"/>
        <Picker
          mode='dropdown'
          selectedValue={selectedCategory}
          onValueChange={(category) => cardActions.updateCategory(category)}>
          {this.props.categories.map((category, i) => { 
              return <Picker.Item key={i} label={category} value={category}/>
          })}
          <Picker.Item label='Add A Category' value='adding'/>
        </Picker>
        {!categories.includes(currentCategory) ? (
          <View>
            <Text>Enter a new category</Text>
            <TextInput  
              style={styles.input}
              value={newCategory} 
              onChangeText={(text) => cardActions.updateNewCategory(text)}
            />
          </View>
        ) : null}
        <Text>Front</Text>
        <TextInput
          style={styles.input}
          value={newCard.front}
        />
        <Text>Back</Text>
        <TextInput
          style={styles.input}
          value={newCard.back}
        />
      </View>
    )
  }
}
const AddCardscomp = connect((store) => {
  return {
    name: store.auth.name,
    currentCategory: store.cards.currentCategory,
    newCategory: store.cards.newCategory,
    categories: store.cards.categories,
    newCard: store.cards.newCard,
  }
})(AddCards);

export default AddCardscomp;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  input: {
    fontSize: 15,
    color: 'grey'
  },
});
