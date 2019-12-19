// import axios from 'axios'
//
// let config={
//   headers: {
//
//   },
//   // 超时设置
//   timeout: 10000,
//   // 跨域是否带Token
//   withCredentials: true,
//   // 响应的数据格式 json / blob /document /arraybuffer / text / stream
//   responseType: 'json',
// }
//
//   config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}/rest-web`
//
//
// const service = axios.create(config)
//
// // POST 传参序列化
// service.interceptors.request.use(
//   config => {
//     console.log(config.url);
//     // if (config.method === 'post') config.data = qs.stringify(config.data)
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )
// // 返回状态判断
// service.interceptors.response.use(
//   res => {
//     return res
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )
//
// export default service
//
export default function ({app,error}) {
  let axios = app.$axios;
  
  axios.defaults.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}/rest-web`;
  
  // 基本配置
  axios.defaults.timeout = 10000
  axios.defaults.withCredentials=true
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  
  // 请求回调
  axios.onRequest(config => {
  
  })
  // 返回回调
  axios.onResponse(res => {
  
  })
  
  
  // 错误回调，把错误信息显示在layout目录下的error页面上，便于调试
  axios.onError(err => {
    error({statusCode:404,message:JSON.stringify(err.config)})
  })
}
