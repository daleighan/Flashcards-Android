import store from '../store';
import authInfo from '../cognitoinfo.js';
import { Config, CognitoIdentityCredentials } from 'aws-sdk';
import {
  CognitoUserPool,
  CognitoUserAttribute,
  AuthenticationDetails,
  CognitoUser
} from 'amazon-cognito-identity-js';

Config.region = authInfo.region;

Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: authInfo.identityPoolId
});

const userPool = new CognitoUserPool({
  UserPoolId: authInfo.userPoolId,
  ClientId: authInfo.clientId,
});


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
  signUp: (username, email, password, history) => {
    email = email.trim();
    password = password.trim();
    username = username.trim();
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email
      })
    ]
    userPool.signUp(username, password, attributeList, null, (error, result) =>{
      if (err) {
        console.log(error);
        return;
      }
      console.log('user name is ' + result.user.getUsername());
      console.log('call result: ' + result.user);
    });
  },
  login: (username, password, history) => {
    username = username.trim();
    password = password.trim();
    const authenticationData = {
      Username: username,
      Password: password
    }
    authenticationDetails = new AuthenticationDetails(authenticationData);
    const userData = {
      Username: username,
      Pool: userPool
    }
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log('access token + ' + result.getAccessToken().getJwtToken());
        AWS.config.region = authInfo.region;
        const idpUrl = `cognito-idp.${authInfo.region}.amazonaws.com/${authInfo.userPoolId}`
        const idpObj = {}
        idpObj[idpUrl] = result.getIdToken().getJwtToken();
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: authInfo.identityPoolId,
          Logins: idpObj
        });
        AWS.config.credentials.refresh((error) => {
          if (error) {
            console.error(error);
          } else {
            console.log('Successfully logged!', AWS.config);
            store.dispatch({ type: 'TOGGLE_STATUS' });
            history.push('/splash');
          }
        });
      },
      onFailure: (err) => {
        alert(err);
      },
    });
  },
  verifySession: () => {
    userPool.storage.sync((err, result) => {
      if (err) { 
        console.log(err);
      }
      else if (result === 'SUCCESS') {
        let cognitoUser = userPool.getCurrentUser();
        store.dispatch({ type: 'UPDATE_USERNAME', payload: cognitoUser.username });
        if (cognitoUser != null) {
          cognitoUser.getSession((err, session) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('session validity: ' + session.isValid());
            store.dispatch({ type: 'TOGGLE_STATUS' });
            cognitoUser.getUserAttributes((err, attributes) => {
              if (err) {
                console.log(err);
              } else {
                //do something with the attributes here if needed
              }
            });
            const idpUrl = `cognito-idp.${authInfo.region}.amazonaws.com/${authInfo.userPoolId}`
            const idpObj = {}
            idpObj[idpUrl] = session.getIdToken().getJwtToken();
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
              IdentityPoolId: authInfo.identityPoolId,
              Logins: idpObj
            });
            store.dispatch({ type: 'CHECKING_LOGIN', payload: false });
          });
        }
      }
    });
  }
}





