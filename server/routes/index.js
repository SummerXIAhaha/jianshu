const express = require('express');
const router = express.Router();
const homeInfo = require('../model/homeInfo.js');
const keyword  = require('../model/keyword');


/* GET home page. */
router.get('/getSearchList', function(req, res, next) {
  keyword.find({}, {_id: 0}).then(keys => {
    res.json(keys);
  }).catch((error) => {
    console.log(error);
  })
  // 返回一个html，index =》 views/index.html  opt => 传入ejs的参数
  // res.render('index', { title: 'exss' });
});

router.get('/getHomeList', function(req, res, next) {
  homeInfo.find({}).exec((err, response) => {
    console.log(err, response);
    const articals = response.filter(item => item.type === '3');
    const topics = response.filter(item => item.type === '1');
    const recoms = response.filter(item => item.type === '2');
    res.json({
      articals,
      topics,
      recoms,
    });
  });
});

router.get('/getMoreList', function(req, res, next) {
  homeInfo.find({}).exec((err, response) => {
    const articals = response.filter(item => item.type === '3');
    res.json(articals);
  });
});

module.exports = router;
