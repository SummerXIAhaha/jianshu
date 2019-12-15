const express = require('express');
const router = express.Router();
const hotKey  = require('../model/keyword');

/* GET home page. */
router.get('/getsearchList', function(req, res, next) {
  hotKey.find({}, {_id: 0, id: 0}).then(keys => {
    console.log('keys', keys);
    res.json(keys);
  }).catch((error) => {
    console.log(error);
  })
  // res.render('index', { title: 'Express' });
});

module.exports = router;
