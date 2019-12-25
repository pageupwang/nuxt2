export default function ({app,error,redirect,route}) {
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
    // console.log(err.response);
    // error({statusCode:err.response.status,message:JSON.stringify(err.config)})
    
  })
}

