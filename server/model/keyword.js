const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hotkey = new Schema({
  title: String,
});

var hotkey = mongoose.model('keywords', hotkey);

module.exports = hotkey;