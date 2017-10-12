import APIProject from '../HelperClass/APIHelperclass.js';

export const userDetails = (user) => {
  console.log("you clicked user");
  console.log(user);

  return {
    type: "Get_Details",
    payload: user
  }
};
