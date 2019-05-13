const nodemailer = require('nodemailer');
var baseURL = 'https://pacific-bayou-34403.herokuapp.com';

module.exports.verify = (mailto, token, callback) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.metropolia.fi', //smtp service
        port: 465,
        secure: true,
        auth: {
            user: 'sunilma@metropolia.fi',  //user
            pass: 'vlad1304971'             // password
        }
    });

    //authentication URL
    var authenticationURL = baseURL + '/users/verify/' + token;

    let mailOptions = {
        from: '"Sunil" <noreply@noreply.fi>', // sender address
        to: mailto, // list of receivers
        subject: 'verify your email address', // Subject line
        text: 'verification email', // plain text body
        html: '<p>Please click on the link below to verify your email address</p><a target=_blank href=\"' + authenticationURL + '\">Confirm your email</a>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, callback);
}

module.exports.reset = (mailto, token, callback) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.metropolia.fi', //smtp service
        port: 465,
        secure: true,
        auth: {
            user: 'sunilma@metropolia.fi',  //user
            pass: 'vlad1304971'             // password
        }
    });

    //authentication URL
    var authenticationURL = baseURL + '/reset/' + token;
    let mailOptions = {
        from: '"Sunil" <noreply@noreply.fi>', // sender address
        to: mailto, // list of receivers
        subject: 'reset your password', // Subject line
        text: 'password reset email', // plain text body
        html: '<p>Please click on the link below to reset your password.</p><a target=_blank href=\"' + authenticationURL + '\">Reset Password</a><p>!!!The link expires in 1 hour!!!</p>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, callback);
}



