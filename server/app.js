var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const dbName = 'jianshu';
mongoose.connect(`mongodb://localhost:27017/${dbName}`, {
  useUnifiedTopology: true, // 对服务器的监视？
  useNewUrlParser: true  // 因为MongoDB Node.js驱动程序重写了用于解析MongoDB连接字符串的工具。所以启用此选项需要添加该参数
});

var app = express();

// // 允许跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header("Access-Control-Allow-Headers", "X-Requested-With, accept, origin, content-type");
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Content-Type', 'application/json;charset=utf-8');
  if ('OPTIONS' === req.method) {
    console.log(req.method);
    //respond with 200
    res.sendStatus(200);
    return false;
  } else {
  //move on
    next();
  }
});

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', true);
//   //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
//   res.header("Access-Control-Allow-Headers", "X-Requested-With, accept, origin, content-type");
//   res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
//   res.header('Content-Type', 'application/json;charset=utf-8');
//   //intercepts OPTIONS method
//   if ('OPTIONS' === req.method) {
//     console.log(req.method);
//     //respond with 200
//     res.sendStatus(200);
//     return false;
//   } else {
//   //move on
//     next();
//   }
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 静态文件
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
