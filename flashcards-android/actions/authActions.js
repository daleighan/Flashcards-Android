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
    email = email.trim();
    password = password.trim();
    username = username.trim();
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email
      })
    ]
    userPool.signUp(username, password, attributeList, null, (err, result) =>{
      if (err) {
        console.log(err);
        return;
      }
      console.log('user name is ' + result.user.getUsername());
      console.log('call result: ' + result.user);
    });
  },
  login: (username, password) => {
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
        onSuccess: function (result) {
            console.log('access token + ' + result.getAccessToken().getJwtToken());
            //POTENTIAL: Region needs to be set if not already set previously elsewhere.
            AWS.config.region = '<region>';
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId : '...', // your identity pool id here
                Logins : {
                    // Change the key below according to the specific region your user pool is in.
                    'cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>' : result.getIdToken().getJwtToken()
                }
            });
            //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
            AWS.config.credentials.refresh((error) => {
                if (error) {
                     console.error(error);
                } else {
                     // Instantiate aws sdk service objects now that the credentials have been updated.
                     // example: var s3 = new AWS.S3();
                     console.log('Successfully logged!');
                }
            });
        },
        onFailure: function(err) {
            alert(err);
        },
    });
  }
}





