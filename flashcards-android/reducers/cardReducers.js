const initialState = {
  allCards: [],
  categories: [],
  currentDeck: [],
}

const cardReducers = (state=initialState, action) => {
  switch(action.type) {
    case 'INITIAL_FETCH': {
      state = { ...state, allCards: action.payload.cards, categories: action.payload.categories };
      break;
    }
  }
  return state;
};

export default cardReducers;
