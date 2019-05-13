const mongoose = require('mongoose');

//UserSchema
var TokenSchema = mongoose.Schema({
  token: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  createdAt : {
    type: Date,
    required: true,
    default: Date.now,
    expires: 3600
  }
});

//exporting token model
var Token = module.exports = mongoose.model('Token', TokenSchema);

//creating random token
module.exports.createToken = (callback) => {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var token = '';
    for (var i = 40; i > 0; --i) {
      token += chars[Math.round(Math.random() * (chars.length - 1))];
    }
    return token;
};

//adding new user to database
module.exports.addToken = function(newToken, callback){
    newToken.save(callback);
}

//getting token content
module.exports.isExistToken = (token, callback) => {
    var query = { token: token };
    Token.findOne(query, callback);
};