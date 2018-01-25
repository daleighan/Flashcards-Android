const initialState = {
  loadingCategory: false,
  fetched: false,
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
      console.log(initialCategory)
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
  }
  return state;
};

export default cardReducers;
