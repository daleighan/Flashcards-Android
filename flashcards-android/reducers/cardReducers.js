const initialState = {
  allCards: [],
  categories: [],
  currentCategory: null,
  currentDeck: [],
}

const cardReducers = (state=initialState, action) => {
  switch(action.type) {
    case 'INITIAL_FETCH': {
      state = { ...state, allCards: action.payload.cards, categories: action.payload.categories };
      break;
    }
    case 'UPDATE_CATEGORY': {
      state = { ...state, currentCategory: action.payload, currentDeck: state.allCards.filter(card => card.category === action.payload) };
      break
    }
  }
  return state;
};

export default cardReducers;
