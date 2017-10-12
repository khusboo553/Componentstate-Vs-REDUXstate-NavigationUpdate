export default function (state = {}, action) {

  switch (action.type) {
    case "Get_Details":
      return action.payload;
      
      break;
    default:
    return state;
  };

};
