import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button,ListView,ScrollView,Image,TouchableHighlight,Alert
} from 'react-native';
import APIProject from '../HelperClass/APIHelperclass.js';
// import AddNotebookClass from './AddNewNotebookPage.js';
import {StackNavigator} from 'react-navigation';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { userDetails } from '../Actions/detailsServiceAction.js';

var ds=new ListView.DataSource({
  rowHasChanged:(row1,row2)=>row1!==row2,
});
var subArray=[];



class HomeClass extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home Page',
  });
  constructor() {

      super();
      this.state={
        dataSource:ds.cloneWithRows(subArray),
        homeArray:[],
      }
  }

  _onPress(rowData){
    console.log(rowData);
    console.log(this);
    var id=rowData["id"];
    APIProject.getInstance().getDetailsFromApi(id,response => {
      console.log('=-=-=-=-=-=-=-=-=-=');
      this.props.userDetails(response);
      this.props.navigation.navigate('Home');
    });

  //
  // this.props.navigation.navigate('Home');
  // this.props.address.props.navigation.navigate('Download',{value:rowData});

}

componentDidMount(){
  console.log("ghjdfbgvfn");
}

 componentWillMount(){
        console.log("willmont");
  //  if (this.props.users.data[0]) {
  //    homeArray=this.props.users.data[0];
  //    console.log("%$^%^%&%^");
  //    console.log(homeArray);
  //  }
   if (this.props.users.differentSearchData) {
     subArray=this.props.users.differentSearchData;
     this.setState({
       dataSource:ds.cloneWithRows(subArray),
       homeArray:this.props.users.data[0],
     });

   }
    console.log(this.state.homeArray);
 }

  render(){
     const { navigate } = this.props.navigation;
      self=this;
      console.log("again");
      console.log(this);
      //if you will use this.props.homearray instead of this.props.users.data[0],then u will
      //get previous data one by one
     return(
      <View style={styles.Maincontainer}>
      <View style={styles.firstviewContainer}>
      <View style={styles.textContainer}>
      <View style={styles.SidebySidecontainer}>
      <Text style={{fontWeight:'bold',fontSize:20}}>
      {this.props.users.data[0]["firstname"]}</Text>
      <Text style={{fontWeight: 'bold',fontSize: 20}}>
      {this.props.users.data[0]["middlename"]}</Text>
      <Text style={{fontWeight: 'bold',fontSize: 20}}>
      {this.props.users.data[0]["lastname"]}</Text>
      </View>
      <Text style={{marginTop:20}}>
      {this.props.users.data[0]["city"]}</Text>
      <Text style={{marginTop:20}}>
      {this.props.users.data[0]["state"]}</Text>
      </View>

      </View>
      <ListView
      renderHeader={this._renderHeader}
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={
          (rowData)=>(
            <TouchableHighlight
            onPress={() => this._onPress(rowData)}>
            <View style={styles.lapRow}>
                <View style={{justifyContent:'space-around',flex:1,flexDirection:'row'}}>
                <Text style={styles.lapNumber}>{rowData.firstname}</Text>
                <Text style={styles.lapTime}>{rowData.state_name}></Text>
                </View>
            </View>
          </TouchableHighlight>
        )}
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

const styles=StyleSheet.create(
  {
    textContainer:{
       justifyContent:'center',
       marginTop:20,
       alignItems:'center',
       backgroundColor:'white'
    },
    Maincontainer:{
      marginLeft:0,
      flex:1,
      paddingLeft:0,
      paddingRight:0
    },

    firstviewContainer:{
      marginTop:20,
      borderLeftWidth:3.0,
      borderRightWidth:3.0,
      borderTopWidth:3.0,
      borderLeftColor:'#000080',
      borderRightColor:'#000080',
      borderTopColor:'#000080',
      borderBottomColor:'#000080',
      height:200,
      // width:350,
      backgroundColor:'white'
    },
    lapsWrapper:{
        marginTop:10,
        marginBottom:80,
      },
      lapRow:{
        flexDirection:'column',
        //
        height:100,
        paddingTop:10,
        borderBottomWidth:2.0,
        borderLeftWidth:3.0,
        borderRightWidth:3.0,
        borderTopWidth:3.0,
        borderLeftColor:'#000080',
        borderRightColor:'#000080',
        borderTopColor:'#000080',
        borderBottomColor:'#000080',
        backgroundColor:'#e6e6fa',
      },
      lapNumber:{
        marginTop:15,
        fontSize:15,
        color:'#777',
        // marginLeft:0,
      },
      lapTime:{
        marginTop:15,
        color:'#000',
        fontSize:20,
          // marginRight:0,
        // fontWeight:'300'
      },
    SidebySidecontainer:{
       flexDirection:'row',
        marginTop:20,
        justifyContent:'space-between'
    },
    container:{
      // marginTop:40,
      marginLeft:20,
      flex:1,
      paddingLeft:15,
      paddingRight:15
    },
    btn:{
      marginTop:0,
      // marginLeft:200,
      height:40,
      width:40,
      // marginRight:50,
    },
    Optbtn:{
      // marginLeft:200,
      height:30,
      width:30,
    },
    OptbtnDelete:{
      marginLeft:230,
      height:40,
      width:40,
    },
    TableContainer:{
      justifyContent:'center',
      marginTop:5,
      marginBottom:5,
      //alignItems:'center'
    },

    AddButtonContainer:{
      //height:20,
      marginTop:0,
      marginRight:20,
      width:100,
      flexDirection:'row',
      backgroundColor:'blue',
    },

    itemList:{
      padding:10,
      fontSize:15,
      height:40,
    },

  }
)
export default connect(mapStateToProps, matchDispatchToProps)(HomeClass);
