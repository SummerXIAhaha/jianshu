const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var users = new Schema({
  account: String,
  password: String,
  email: String
});

var users = mongoose.model('users', users);

module.exports = users;