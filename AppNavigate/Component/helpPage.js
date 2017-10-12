import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button,textDecorationLine,ListView,TextInput,TouchableHighlight,Image
} from 'react-native';
const Dimensions = require('Dimensions');
import Modal from 'react-native-modal';
const window = Dimensions.get('window');
var ds=new ListView.DataSource({
  rowHasChanged:(row1,row2)=>row1!==row2,
});
var dataArray=[
  {name:'xyzz'},
  {name:'xyzz'},
  {name:'xyzz'},
  {name:'xyzz'},
  {name:'xyzz'},
];
export default class helpClass extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Welcome',
    backgroundColor:'rgba(206, 43, 62, 1)',
  });

  constructor() {
      super();
      this.state={
         password:'',
         isModalVisible: false,
         dataSource:ds.cloneWithRows(dataArray),
      }
  }
  onPressLearnMore=()=>{


  }
  selectButtonAction=()=>{

  }
  _cancelPress=()=>{
    this.setState({ isModalVisible: false });
  }
  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  render(){
     const { navigate } = this.props.navigation;
      self=this;

     return(
       <View style={{alignItems:'center',backgroundColor:'rgba(244, 228, 230, 0.3)',flex:1}}>
       <Text style={{marginTop:20,fontSize:20,fontFamily:'optima'}}>HOW CAN WE HELP YOU?</Text>
       <View style={styles.mainContainer}>
       <TextInput
          style={styles.textInputContainer}
          placeholder="Name"
          onChangeText={(password) => this.setState({
          password: password
        })}
      />
      <TextInput
         style={styles.textInputContainer}
         placeholder="Email ID"
         onChangeText={(password) => this.setState({
         password: password
       })}
     />
     <TextInput
        style={styles.textInputContainer}
        placeholder="Booking Contact Number"
        onChangeText={(password) => this.setState({
        password: password
      })}
      />
       </View>
       <View style={styles.subContainer}>
        <View style={styles.textInputContainer}>
       <Button
          onPress={this._showModal}
          title="Select the Issue"
          color="gray"
        />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modelContainer}>
            <Text style={{color:'rgba(206, 43, 62, 1)',marginTop:10,marginLeft:10,
            fontSize:20,fontWeight:'bold'}}>Select the Issue</Text>
            <ListView
            renderHeader={this._renderHeader}
              enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow={
                (rowData)=>(

                  <View>
                      <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:10}}>
                      <Text style={styles.lapNumber}>{rowData.name}</Text>
                      <TouchableHighlight onPress=
                            {() => this.selectButtonAction(rowData)}>
                     <Image
                     style={styles.checkBtnStyle}
                        source={require('./ImageAsset/unchecked_radio.png')}
                      />
                     </TouchableHighlight>
                      </View>
                  </View>

              )}
            />
            <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:10}}>
            <Button
               onPress={this._cancelPress}
               title="Cancel"
               color="rgba(206, 43, 62, 1)"
             />
             <Button
                onPress={this._cancelPress}
                title="Ok"
                color="rgba(206, 43, 62, 1)"
              />
           </View>
          </View>
        </Modal>
     </View>
        <TextInput
           style={styles.textInputContainer}
           placeholder="Write Description"
           onChangeText={(password) => this.setState({
           password: password
         })}
         />
       </View>
       <View style={styles.btnStyle}>
       <Button
          onPress={this.onPressLearnMore}
          title="Submit"
          color="white"
         fontFamily='optima'
       />
      </View>

      </View>
     );
   }
}
const styles=StyleSheet.create({
  checkBtnStyle:{
     marginTop:10,
      height:20,
      width:20,
  },
  modelContainer:{
    height:window.height/2,
    marginLeft:20,
    marginRight:20,
    marginTop:40,
    marginBottom:60,
    backgroundColor:'white',

  },
  lapNumber:{
    marginTop:10,
    marginLeft:20,
    fontSize:17,
  },
  mainContainer:{
    // height:window.height/3,
    flex:3,
    width:window.width-20,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'white',
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    borderTopColor:'rgba(206, 43, 62, 1)',
    borderBottomColor:'rgba(206, 43, 62, 1)',
    borderLeftColor:'rgba(206, 43, 62, 1)',
    borderRightColor:'rgba(206, 43, 62, 1)',
    borderWidth:1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity:1,
    shadowRadius: 1,
  },
  textInputContainer:{
    width:window.width-60,
    borderBottomColor:'gray',
    flex:1,
    marginLeft:20,
    borderBottomWidth:1,
    borderBottomColor:'gray',
    marginBottom:10,

  },
  subContainer:{
    flex:2,
    width:window.width-20,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'white',
    borderTopRightRadius:20,
    borderBottomLeftRadius:20,
    borderTopColor:'rgba(206, 43, 62, 1)',
    borderBottomColor:'rgba(206, 43, 62, 1)',
    borderLeftColor:'rgba(206, 43, 62, 1)',
    borderRightColor:'rgba(206, 43, 62, 1)',
    borderWidth:1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity:1,
    shadowRadius: 1,
  },
  btnStyle:{
    flex:0.4,
    alignItems:'center',
    width:window.width/2-20,
    marginTop:20,
    marginBottom:10,
    // marginLeft:window.width/4-20,
    marginRight:20,
    backgroundColor:'rgba(206, 43, 62, 1)',
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
  }
}

);
