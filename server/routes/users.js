var express = require('express');
var router = express.Router();
var Users = require('../model/users');
var Checker = require('../utils/check');
var Utils = require('../utils/utils');

/* GET users listing. */
// 注册接口
router.post('/loginUp', async function(req, res, next) {
  const { account, email } = req.body;
  // 校验邮箱是否正确
  const flag = Checker.emailChecker(email);
  if (flag) {
    res.json({
      successFlag: 'N',
      msg: '邮箱格式不正确',
    });
  }
  const searchRes = await Utils.search(Users, { account });
  // 查询失败，直接返回
  if (searchRes === 'error') {
    res.json({successFlag: 'N',msg: '查询失败，请重试！'});
    return;
  }
  // 查询成功，校验结果，如果账号已存在，则返回结果
  if (searchRes.length) {
    res.json({successFlag: 'N',msg: '账号已存在，请重新注册'});
    return;
  }
  // 账号不存在，则直接保存
  var users = new Users(req.body);
  const saveRes = await Utils.save(users);
  // 保存成功
  if (saveRes === 'error') {
    res.json({successFlag: 'N',msg: '注册失败，请重试！'});
    return;
  }
  // 保存失败
  if (saveRes === 'success') {
    res.json({successFlag: 'Y',msg: '注册成功'});
    return;
  }
  next();
});

router.post('/loginIn', async function(req, res, next) {
  console.log(req);
  const searchRes = await Utils.search(Users, req.body);
  // 查询失败，直接返回
  if (searchRes === 'error') {
    res.json({successFlag: 'N',msg: '查询失败，请重试！'});
    return;
  }
  if (searchRes && searchRes.length) {
    res.json({successFlag: 'Y', canLogin: 'Y'});
    return;
  } else {
    res.json({successFlag: 'Y', canLogin: 'N'});
    return;
  }
  next();
})

module.exports = router;
