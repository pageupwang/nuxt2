import axios from '../../plugins/axios'
import {baseUrl} from './config'

//配资乐成功数据 汇总
export const getTotalData = (para) => {
  return axios.post(baseUrl + '/withfudig/getTotalData', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//配资乐成功数据 列表
export const getConfigList = (para) => {
  return axios.post(baseUrl + '/withfudig/getConfigList', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//配资乐需求单 列表
export const requirementList = (para) => {
  return axios.post(baseUrl + '/withfudig/requirementList', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}


export const describe=(para)=>{
  return axios.post(baseUrl+'/asset/detail',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
