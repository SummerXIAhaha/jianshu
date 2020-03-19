## 仿简书网站(前后端代码)

### react + express + mongodb

cd jianshu

npm run start

npm run server

前端地址： http://localhost:3000/

后台地址： http://localhost:8080 + 接口名

数据库名称：jianshu

太难了 不想写了 难受 一脸蒙 😢😫

package.json 里面配置 "homepage": "." 生产地址才能正常访问

想要增加动画路由，但是被ts上的报错打败了。。。。

遇到的问题：

axios ts报错： 增加了axios.d.ts文件

如果前端发送请求时设置 withCredentials = true，后台不允许设置Access-Control-Allow-Origin为 * ，目前是之前在前端把withCredentials设置项去掉了。