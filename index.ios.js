/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppClass from './AppNavigate/indexApp.js';
import {Provider} from 'react-redux';
import {createStore, combineReducers,applyMiddleware, compose} from 'redux';
import allReducer from './AppNavigate/Reducer/reducerIndex';

const store = createStore(allReducer);
export default class ReduxNavigationUpdateApp extends Component {
  render() {
    return (
      <Provider store={store}>
      <AppClass/>
     </Provider>
    );
  }
}

AppRegistry.registerComponent('ReduxNavigationUpdateApp', () => ReduxNavigationUpdateApp);
