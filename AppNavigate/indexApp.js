import React,{Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import home from './Component/homePage.js';
import IndexClass from './Component/indexSPage.js';
import helpClass from  './Component/helpPage.js';
// import {Provider} from 'react-redux';
// import Signupclass from './Component/SignupPage.js';
// import HomeClass from './Component/HomePage.js';
// import AddNotebookClass from './Component/AddNewNotebookPage.js';

const Navigation=StackNavigator({
  IndexS:{
    screen:IndexClass
  },
   Home:{
     screen:home
  },
  Help:{
    screen:helpClass
  },

  //  DetailsNote:{screen:DetailsNotebookClass},

});

export default Navigation;
