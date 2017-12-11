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
    case 'UPDATE_EMAIL': { 
      state = { ...state, email: action.payload }
      break;
    }
    case 'UPDATE_PASSWORD': {
      state = { ...state, password: action.payload }
      break;
    }
    case 'UPDATE_CONFIRMATION': {
      state = { ...state, confirmation: action.payload }
      break;
    }
  }
  return state;
};

export default authReducer;
