import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:8080'
})

request.interceptors.request.use(
  (config) => {
    // // Do something before request is sent
    // if (store.getters.token) {
    //   // 让每个请求携带token-- ["X-Token"]为自定义key 请根据实际情况自行修改
    // config.headers.token = "weoruiwer-werhjlwejri-vldmfv"
    // }
    // config.withCredentials = true
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  (res) => {
    console.log('res', res);
  // 处理响应的代码写在这里，注意：res一定要返回，否则会报错
  return res.data || res;
})

export default request;