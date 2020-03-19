var express = require('express');
var router = express.Router();
var Users = require('../model/users');
var Checker = require('../utils/check');

/* GET users listing. */

router.post('/loginUp', function(req, res, next) {
  const { account, email } = req.body;
  // 校验邮箱是否正确
  const flag = Checker.emailChecker(email);
  if (flag) {
    res.json({
      successFlag: 'N',
      msg: '邮箱格式不正确',
    });
  }
  // 先校验账号是否存在
  Users.find({ account }).exec((err, response) => {
    if (response && response.length) {
      res.json({
        successFlag: 'N',
        msg: '账号已存在，请重新注册',
      });
    } else {
      // 存入账号
      var users = new Users(req.body);
      users.save((err, response) => {
        console.log(err);
        if (err) {
          res.json({
            successFlag: 'N',
            msg: '查询失败',
          });
        } else {
          res.json({
            successFlag: 'Y',
            msg: '注册成功',
          });
        }
      })
    }
    console.log(response);
  });

});

module.exports = router;
