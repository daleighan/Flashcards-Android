const initialState = {
  fetched: false,
  loading: false,
  allCards: [],
  categories: [],
  currentCategory: null,
  currentDeck: [],
  newFront: '',
  newBack: '',
  newCategory: '',
};

const cardReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIAL_FETCH': {
      let initialCategory = null;
      if (action.payload.categories.length > 0) {
        initialCategory = action.payload.categories[0];
      }
      state = {
        ...state,
        fetched: true,
        allCards: action.payload.cards,
        categories: action.payload.categories,
        currentCategory: initialCategory,
        currentDeck: action.payload.cards.filter(
          card => card.category === initialCategory,
        ),
      };
      break;
    }
    case 'UPDATE_CATEGORY': {
      state = {
        ...state,
        currentCategory: action.payload,
        currentDeck: state.allCards.filter(
          card => card.category === action.payload,
        ),
      };
      break;
    }
    case 'UPDATE_NEW_CATEGORY': {
      state = {...state, newCategory: action.payload};
      break;
    }
    case 'UPDATE_NEW_FRONT': {
      state = {...state, newFront: action.payload};
      break;
    }
    case 'UPDATE_NEW_BACK': {
      state = {...state, newBack: action.payload};
      break;
    }
    case 'NEW_CATEGORY': {
      state = {...state, categories: [...state.categories, action.payload]};
      break;
    }
    case 'INSERT_CARD': {
      state = {...state, allCards: [...state.allCards, action.payload]};
      break;
    }
    case 'UNFETCH': {
      state = {...state, fetched: false};
      break;
    }
    case 'TOGGLE_LOADING': {
      state = {...state, loading: !state.loading};
      break;
    }
    case 'TOGGLE_ARCHIVED': {
      let newCurrentDeck = state.currentDeck;
      let newAllCards = state.allCards;
      let currentDeckIndex = newCurrentDeck.findIndex(card => card['front+category+name'] === action.payload['front+category+name']);
      let allCardsIndex = newAllCards.findIndex(card => card['front+category+name'] === action.payload['front+category+name']);
      let temp1 = newCurrentDeck[currentDeckIndex];
      temp1.archived = !action.payload.archived;
      newCurrentDeck[currentDeckIndex] = temp1;
      newAllCards[allCardsIndex] = temp1;
      console.log(newCurrentDeck, newAllCards);
      state = {...state, currentDeck: newCurrentDeck, allCards: newAllCards};
      console.log(state);
      break;
    }
  }
  return state;
};

export default cardReducers;
