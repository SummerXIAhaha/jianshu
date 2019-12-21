const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var homeInfo = new Schema({
  title: String,
  img: String,
  type: String,
  description: String
});

var homeInfos = mongoose.model('homeInfo', homeInfo, 'homeInfos');

module.exports = homeInfos;