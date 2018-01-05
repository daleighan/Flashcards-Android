import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Button
} from 'react-native';
import Toplevel from './loginComponents/Toplevel';
import { Provider } from 'react-redux';
import store from './store';
import authActions from './actions/authActions';
//class App extends Component {
//  constructor(props) {
//    super(props)
//  }
//
//  //componentWillMount() {
//  //  authActions.verifySession();
//  //}
//
//  render = () => {
//    return (
//      <Provider store={store}>
//        <NativeRouter>
//          <View>
//            <Route exact path='/' component={Toplevel}/>
//            <Route path='/login' component={Login}/>
//            <Route path='/signup' component={Signup}/>
//            <Route path='/splash' component={Splash}/>
//            <Route path='/loading' component={Loading}/>
//            <Route path='/drawer' component={RootDrawer} />
//          </View>
//        </NativeRouter>
//      </Provider>
//    )
//  }
//}

const App = () => ( 
  <Provider store={store}>
    <Toplevel />
  </Provider>
);

export default App;


