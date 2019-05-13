const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//UserSchema
var UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    required: true,
    default: false
  }
});

//exporting user model
var User = module.exports = mongoose.model('User', UserSchema);

//adding new user to database
module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
        if(err) throw err;
        newUser.password = hash;
        newUser.save(callback);
    });
  });
}

//search user by username
module.exports.getUserByUsername = function(username, callback){
  var query = {username: username};
  User.findOne(query, callback);
}

//search user by email
module.exports.getUserByEmail = function(email, callback){
  var query = {email: email};
  User.findOne(query, callback);
}

//search user by ID
module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

//comparing encrypted password
module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch){
    if(err) throw err;
    callback(null, isMatch);
  });
}

//updating or changing user password
module.exports.updatePassword = function(id, password, callback){
  var query = { _id: id };
  User.update(query, { password: password }, callback);
}

//hashing password
module.exports.hashPassword = function(password, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, callback);
  });
}

//changing verified status after email verification
module.exports.verifyUser = function(id, callback){
  var query = { _id: id };
  User.update(query, { verified: true }, callback);
}