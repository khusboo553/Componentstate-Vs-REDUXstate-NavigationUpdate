import { combineReducers } from 'redux';
 import homeReducer from './homeReducer';
// import SignupReducer from './SignupReducer';
// import noteDetailsReducer from './noteDetailsReducer';
// import { REHYDRATE } from 'redux-persist/constants';



const ReducerIndex = combineReducers({
  users: homeReducer,
  // signUpUser:SignupReducer,

});


export default ReducerIndex;
