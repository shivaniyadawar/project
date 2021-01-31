// const redis = require("redis");
//const logger = require('../middleware/logger');
// const client = redis.createClient();
const userRepository = require('../repository/userRepository');
//const jwt = require("jsonwebtoken");

module.exports = {
  signup: async body => {
    try {
     const userMobile = await userRepository.get({ mobile: body.mobile }, "-__v -_id ");
     const userEmail = await userRepository.get({ email: body.email }, "-__v -_id ");
     console.log(userMobile,userEmail, "hello");
      if ((userMobile == null || userMobile == "null" ) && (userEmail == null || userEmail == "null"))  {
        const userData = {
          name: body.name,
          email: body.email,
          mobile: body.mobile,
          password: body.password,
          userType: body.userType
        }
        console.log(userData);
        await userRepository.create(userData);
        return ({ message: "signed up Successfully, Login to continue !" });
    }
       else {
         return ({ message: `user is already present Login to continue !` })
       }
    } catch (error) {
      return { name: error.name, message: error.message };
    }
  },

  login: async body => {
    const user = await userRepository.get( { $or: [{ mobile: body.identifier }, { email: body.identifier } ]}, "-__v -_id ");
    console.log (user, "df");
    if (user !== null && user !== "null") {
       if (body.password === user.password){
         return ({ message: "logged in successfully" , userType: user.userType});
       }
       else {
         return ({ message: "please check your password"});
       }
      }
      else {
        return ({ message: "user not found please signup"});
      }
  },
  viewUsers: async () => {
    try {
      const user = await userRepository.getMultiple({}, "-__v -_id -password");
      return user;
    } catch (error) {
     // logger.error({ name: error.name, message: error.message });
      return { name: error.name, message: error.message };
    }
  },
}
