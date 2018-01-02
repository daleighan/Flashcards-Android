const initialState = {
  allCards: [],
  categories: [],
  currentDect: [],
}

const cardReducers = (state=initialState, action) => {
  switch(action.type) {
    case 'INITIAL_FETCH': {
      state = { ...state, allCards: action.payload };
      break;
    }
  }
  return state;
};

export default cardReducers;
