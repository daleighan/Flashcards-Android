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
import cardActions from '../actions/cardActions'
import Carousel from 'react-native-carousel-view';

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

  renderCard({ item, index }) {
    return (
      <View>
        <Text>Item Here</Text>
      </View>
    )
  }

  render = () => {
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('DrawerOpen')} title="Menu"/>
        <Picker
          mode='dropdown'
          selectedValue={this.props.currentCategory}
          onValueChange={(category) => cardActions.updateCategory(category)}>
          <Picker.Item label='Select A Category' value={null}/>
          {this.props.categories.map((category, i) => { 
              return <Picker.Item key={i} label={category} value={category}/>
          })}
        </Picker>
        {this.props.currentCategory === null ? (
          <View><Text>Please Select a Category</Text></View>
        ) : (
          <View style={styles.container}>
            <Carousel
              animate={false}
              width={600}
              height={300}
              delay={2000}
              indicatorAtBottom={false}
              indicatorSize={20}
              indicatorText="✽"
              indicatorColor="red"
              >
              {this.props.currentDeck.map((card, i) => {
                return <View key={i} style={styles.contentContainer}><Text>{card.front}</Text></View>
              })}
            </Carousel>
           </View>
        )}
      </View>
    )
  }
}

const Splashcomp = connect((store) => {
  return {
    name: store.auth.name,
    categories: store.cards.categories,
    currentCategory: store.cards.currentCategory,
    currentDeck: store.cards.currentDeck,
  }
})(Splash);

export default Splashcomp;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: '#CCC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
