import store from '../store';
import authInfo from '../cognitoinfo.js';
import {Config, CognitoIdentityCredentials} from 'aws-sdk';
import {
  CognitoUserPool,
  CognitoUserAttribute
} from 'amazon-cognito-identity-js';

Config.region = authInfo.region;

Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: authInfo.identityPoolId
});

const userPool = new CognitoUserPool({
  UserPoolId: authInfo.userPoolId,
  ClientId: authInfo.clientId,
});

console.log(Config.credentials);

module.exports = {
  changeInput: (newInput, type) => {
    switch(type) {
      case 'username': {
        store.dispatch({ type: 'UPDATE_USERNAME', payload: newInput });
        break;
      }
      case 'email': {
        store.dispatch({ type: 'UPDATE_EMAIL', payload: newInput });
        break;
      }
      case 'password': {
        store.dispatch({ type: 'UPDATE_PASSWORD', payload: newInput });
        break;
      }
      case 'confirmation': {
        store.dispatch({ type: 'UPDATE_CONFIRMATION', payload: newInput });
        break;
      }
      case 'all': {
        store.dispatch({ type: 'UPDATE_USERNAME', payload: newInput });
        store.dispatch({ type: 'UPDATE_EMAIL', payload: newInput });
        store.dispatch({ type: 'UPDATE_PASSWORD', payload: newInput });
        store.dispatch({ type: 'UPDATE_CONFIRMATION', payload: newInput });
        break;
      }
    }
  },
  signUp: (username, email, password) => {
    console.log('hello');
  }
}

