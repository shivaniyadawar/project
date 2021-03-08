const nodemailer = require("nodemailer");
const helpReq = require ('../model/helpRequestModel');

const transporter = nodemailer.createTransport({
        service: 'gmail',
         auth: {
             user: 'locsavior@gmail.com',
             pass: 'locsavior@123#'
         },
         tls: {
            rejectUnauthorized: false
        }
  
    });

    module.exports = {
        sendMail: async (request, response) => {
            helpReq.findOne({ helpId: request.body.helpId }, 'userEmail userName').then((res) => {
                console.log(request.body, 'helpId')
                console.log(res, 'resss')
                if (res == null || res == 'null') {
                    return response.status(200).send({ message: `your mobile ${request.body.mobile} is not registered with our application` })
                } else {
                    console.log(res.email)
                    var mailOptions = {
                        from: 'locsavior@gmail.com',
                        to: res.email,
                        subject: 'Password of your thandra account',
                        text: `Hi ${res.userName}. The password for your Thandra account is ${res.password}.Recommended: change your passsword in change password section after login.`
                    };
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log({ name: error.name, message: error.message });
                            return response.status(400).send({ message: 'Application is busy.Please Try  Later' })
                        } else {
                            response.status(200).send({ message: `Hi ${res.name} password has been sent to your registered mail address ${res.email}` })
                            console.log('Email sent: ' + info.response);
                        }
                    });
    
                }
            })
                .catch((err) => response.status(400).send({ name: err.name, message: err.message }))
            
        }
    }