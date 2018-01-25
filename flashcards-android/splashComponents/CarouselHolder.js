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
import Carousel from 'react-native-carousel-view';

class CarouselHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false,
    };
  }

  componentWillReceiveProps() {
    setTimeout(() => this.setState({changed: !this.state.changed}), 100);
  }

  render = () => {
    return (
      <View style={styles.container}>
        <Carousel
          animate={false}
          width={600}
          height={300}
          delay={2000}
          indicatorAtBottom={false}
          indicatorSize={20}
          indicatorText="✽"
          indicatorColor="red">
          {this.props.currentDeck.map((card, i) => {
            return (
              <View key={i} style={styles.contentContainer}>
                <Text>{card.front}</Text>
              </View>
            );
          })}
        </Carousel>
      </View>
    );
  };
}

const CarouselHolderComp = connect(store => {
  return {
    currentDeck: store.cards.currentDeck,
  };
})(CarouselHolder);

export default CarouselHolderComp;

const styles = StyleSheet.create({
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
  },
});
