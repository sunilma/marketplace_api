const express = require('express');
const router = express.Router(); //using express router
const User = require('../models/user');
const Token = require('../models/token');
const config = require('../config/database');
const mailer = require('../config/mailer');
const passport = require('passport');
const jwt = require('jsonwebtoken');


// register user
router.post('/register', function(req, res, next){
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		contact: req.body.contact,
		username: req.body.username,
		password: req.body.password,
		status: req.body.status,
	});

	User.getUserByUsername(newUser.username, (err, user) => {
		if(err) throw err;
		if(user){
			return res.json({ success: false, msg: "username already exists."});
		} else {
			User.getUserByEmail(newUser.email, (err, user) => {
				if(err) throw err;
				if(user){
					return res.json({ success: false, msg: "email already exists."});	
				} else {
					User.addUser(newUser, (err, user) =>{
						if(err){
							return res.json({ success: false, msg: "Failed to register user"});
						} else {
							mailer.verify(user.email, user._id, (err, info) => {
								if(err){
									return res.json({ success: false, msg: "Failed to send verification email."});
								} else {
									return res.json({ success: true, msg: "User registered!! Check email for verification"});
								}
							});
						}
					});
				}
			});
		}
	});

});

//email verification during registration
router.get('/verify/:token', function(req, res, next){
	var id = req.params.token;
	User.getUserById(id, (err, user) => {
		if(err) throw err;

		if(user.verified){
			return res.send('<h1>User already verified. You can login now.<h1>');
		} else {
			User.verifyUser(user._id, (err, done) => {
				if(err) throw err;
				if(done){
					return res.send('<h1>Email has been successfully verified.</h1>');
				}
			});
		}
	});
});


//change or update password
router.put('/register/:id', function(req, res, next){
	var tempUser = req.body;
	var id = req.params.id;

	User.getUserById(id, (err, user)=> {
		if(err) throw err;
		if(!user){
			return res.json({ success: false, msg: 'User does not exist.' });
		}

		User.comparePassword(tempUser.old_password, user.password, (err, isMatch) => {
			if(err) throw err;
			if(isMatch){
				User.hashPassword(tempUser.password, (err, hash) => {
					User.updatePassword(id, hash, (err, done) => {
						if(err) throw err;
						if(done){
							return res.json({ success: true, msg: "Successfully changed the password."});
						}
					});
				});
			} else {
				return res.json({ success: false, msg: "Incorrect password"});
			}
		})
	})
});

//Authentication of user using passport
router.post('/authenticate', (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;

	User.getUserByUsername(username, (err, user) => {
		if(err) throw err;
		if(!user){
			return res.json({ success: false, msg: "User not found"});
		}

		if(!user.verified){
			return res.json({ success: false, msg: "User not verified. Check email for verification" });
		}

		User.comparePassword(password, user.password, (err, isMatch) => {
			if (err) throw err;
			if(isMatch){
				const token = jwt.sign(user, config.secret, {
					expiresIn: 604800			//1 week in seconds
				});

				res.json({ success: true,
					token: 'JWT ' + token,
					user: {
						id: user._id,
						name: user.name,
						username: user.username,
						email: user.email,
						contact: user.contact,
						status: user.status
					}
				});
			} else {
				return res.json({ success: false, msg: "Incorrect password"});
			}
		});
	});
});

//profile page with authentication
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {

	res.json({ user: {
					id: req.user._id,
					name: req.user.name,
					username: req.user.username,
					email: req.user.email,
					contact: req.user.contact,
					status: req.user.status
		} 
	});
});

//send reset email
router.get('/resetemail/:email', (req, res, next) => {
	var email = req.params.email;
	User.getUserByEmail(email, (err, user) => {
		if(err) throw err;
		if(!user){
			res.json({ success: false, msg: "Given Email doesn't exist."})
		} else {
			let newToken = new Token({
				token: Token.createToken(),
				user_id: user._id
			});
			Token.addToken(newToken, (err, token) => {
				if(err) throw err;
				if(!token){
					res.json({ success: false, msg: "Internal error occured." });
				} else {
					mailer.reset(email, token.token, (err, info) => {
						if(err){
							res.json({ success: false, msg: "Failed to send email. Try again." });
						} else {
							res.json({ success: true, msg: "Email sent. Check your Email address for reset link. The link expires in 1 hours." });
						}
					});
				}
			});
		}
	});
});

//password reset token verification
router.get('/reset/:token', (req, res, next) => {
	var token = req.params.token;
	Token.isExistToken(token, (err, token) => {
		if(err) throw err;
		if(!token){
			res.json({ success: false, msg: "The token has already expired. Send reset email again."});
		} else {
			res.json({ success: true, user_id: token.user_id });
		}
	});
});

//password reset
router.post('/reset', (req, res, next) => {
	id = req.body.id;
	password = req.body.password;
	User.hashPassword(password, (err, hash) => {
		User.updatePassword(id, hash, (err, done) => {
			if(err) throw err;
			if(done){
				return res.json({ success: true, msg: "Successfully changed the password."});
			} else {
				return res.json({ success: false, msg: "Internal error occured." });
			}
		});
	});
})


module.exports = router;
