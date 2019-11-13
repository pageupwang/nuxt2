import axios from 'axios'
var instance = axios.create({
  baseURL: process.env.baseUrl+'/rest-web',
  timeout: 20000,
});

instance.interceptors.request.use(
  config => {
    // if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.Authorization = `token ${store.state.token}`;
    // }
    
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 拦截器
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // errorHandling(error)
    return Promise.reject(error)
  }
);


export default instance

