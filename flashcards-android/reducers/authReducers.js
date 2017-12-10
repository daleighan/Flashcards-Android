const initialState = {
  name: '',
  password: '',
  confirmation: ''
}

const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'UPDATE_USERNAME': {
      state = { ...state, name: action.payload }
      break;
    }
    case 'CHANGE_AGE': {
      state = { ...state, age: action.payload }
      break;
    }
  }
  return state;
};

export default authReducer;
