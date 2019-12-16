const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hotkey = new Schema({
  id: String,
  name: String,
});

var hotkey = mongoose.model('keywords', hotkey);

module.exports = hotkey;