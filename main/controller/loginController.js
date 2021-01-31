
//const nodemailer = require("nodemailer");
// const config = require('../config')
// const logger = require('../middleware/logger')
 const userService = require('../services/userService');
// const userRepository = require('../repository/user')

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'locsavior@gmail.com',
//         pass: 'locsavior@123#'
//     }
// });


module.exports = {
    signup: async (request, response) => {
        if (!request.body.mobile || !request.body.name || !request.body.email || !request.body.password || !request.body.userType){
         return response.status(200).send({ message: "please fill all the fields" })}
        const result = await userService.signup(request.body)
        return response.status(200).send(result);
    },

    login: async (request, response) => {
        if ( !request.body.identifier || !request.body.password) {
        return response.status(400).send({message: "please fill all the fields"})}
        const result = await userService.login(request.body)
        return response.status(200).send(result);
        
    },

    

    viewUsers: async (request, response) => {
        const result = await userService.viewUsers();
        return response.send(result);
    },
}
   