import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button,ListView,ScrollView,Image,TouchableHighlight,Alert
} from 'react-native';
// import { userLogin } from '../Actions/LoginAction';
// import AddNotebookClass from './AddNewNotebookPage.js';
import {StackNavigator} from 'react-navigation';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import APIProject from '../HelperClass/APIHelperclass.js';
import { userDetails } from '../Actions/detailsServiceAction.js';


var self;
class IndexClass extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Welcome',
  });

  constructor() {
      super();
      this.state={

      }
  }
  async onPressLearnMore(){
    APIProject.getInstance().getDetailsFromApi("12076",response => {
      console.log('=-=-=-=-=-=-=-=-=-=');
      self.props.userDetails(response);
      self.props.navigation.navigate('Home');
    });
    // self.props.navigation.navigate('Help');


    //
    // this.props.address.props.navigation.navigate('Download',{value:rowData});
  }
  render(){
     const { navigate } = this.props.navigation;
      self=this;
      console.log(self);
     return(
       <View style={{alignItems:'center',marginTop:40}}>
       <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
       />
      </View>
     );
   }
}
function mapStateToProps(state){
  console.log("*************");
  console.log(state);
  return {
     users: state.users,
    // signUpUser:state.signUpUser,
  };
}
//dispatch to store
function matchDispatchToProps(dispatch) {
 console.log("7847");
  return bindActionCreators({
  userDetails:userDetails
    // userLogin: userLogin,
  },dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(IndexClass);
