import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,alert
} from 'react-native';
// import HomeClass from './Home.js';
// import TeamsClass from './Team.js';
// import ReboundsClass from './Rebounds.js';
// import singleToneDataManager from './SingleToneClass.js';
// import UIClass from './Route.js';
//
// var ScrollableTabView = require('react-native-scrollable-tab-view');
//
//
 var ArrayResponse;

export default class APIProject extends Component {

  static sharedInstance = null;
  static getInstance() {

      if (this.sharedInstance == null) {
          this.sharedInstance = new APIProject();
      }

      return this.sharedInstance;
  }

 async getDetailsFromApi(value,callback) {
   
   await fetch("https://api.dialeureka.com/view-profile", {method: "POST",
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },body: JSON.stringify({queryId:value})})
          .then((response) => response.json())
          .then((responseData) => {
            callback(responseData);

          })
          .catch((error) => {
            callback(error);

        });
    }

    // console.log(singleToneDataManager.getInstance().get_DictDetailsArray());


  render() {
       {this.getDetailsFromApi()};
    return (
         <Text>hello</Text>
     );
  }
}
