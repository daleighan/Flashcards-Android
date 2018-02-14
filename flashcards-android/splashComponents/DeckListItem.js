import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import cardActions from '../actions/cardActions';

class DeckListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render = () => {
    const {card, currentCategory} = this.props;
    const {expanded} = this.state;
    return (
      <View>
        <Text>
          {card.front}
          {card.back}
          Archived: {card.archived ? <Text>Yes</Text> : <Text>No</Text>}
        </Text>
        {expanded ? (
          <View>
            <Button
              onPress={() => cardActions.toggleArchiving(card, currentCategory)}
              title={!card.archived ? 'Archive' : 'Unarchive'}
            />
            <Button
              onPress={() => cardActions.deleteCard(card)}
              title='Delete Card'
            />
          </View>
        ) : null}
        <Button
          onPress={() => this.setState({expanded: !expanded})}
          title={!expanded ? 'expand' : 'contract'}
        />
      </View>
    );
  };
}

export default DeckListItem;
