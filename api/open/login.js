import axios from '../../plugins/axios'
import {baseUrl} from './config'


//验证手机是否能注册
export const checkMobile=(para)=>{
  return axios.post(baseUrl+'/checkMobile',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//发送验证码ss
export const sendSmsCode=(para)=>{
  return axios.post(baseUrl+'/sendSmsCode',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//注册
export const Goregister=(para)=>{
  return axios.post(baseUrl+'/register',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//登录
export const Gologin=(para)=>{
  return axios.post(baseUrl+'/login',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//忘记密码
export const forgetPassword=(para)=>{
  return axios.post(baseUrl+'/forgetPassword',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//获取图形验证码接口
export const getKaptchaImage=()=>{
  return axios.get(baseUrl+'/getKaptchaImage',{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

