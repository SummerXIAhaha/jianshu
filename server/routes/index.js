var express = require('express');
var router = express.Router();
console.log('yunxing')
/* GET home page. */
router.get('/getsearchList', function(req, res, next) {
  const list = ['教育', '简述', '科技', '教育', '简述', '科技'];
  res.end(JSON.stringify(list));
  // res.render('index', { title: 'Express' });
});

module.exports = router;
