import axios from 'axios'

axios.interceptors.request.use(function (config) {
  // let NODE_ENV=process.env.NODE_ENV
  // let url=''
  // if(NODE_ENV=='development'){
  //   url='http://192.168.1.186:8086'
  // }
  // config.url=url+config.url
  // console.log(config.url);
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
