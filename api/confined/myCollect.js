import axios from '../../plugins/axios'

import {baseUrl} from './config'

//我的关注列表
export const myFavor=(para)=>{
  return axios.get(baseUrl+'/activity/myFavor',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//我的关注搜索条件
export const getBase=(para)=>{
  return axios.get(baseUrl+'/activity/base',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//我的关注单个取消
export const aloneUnFavor=(para)=>{
  return axios.post(baseUrl+'/activity/unFavor',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//我的关注批量取消
export const allUnFavor=(para)=>{
  return axios.post(baseUrl+'/activity/cancelFavor',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
