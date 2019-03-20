import axios from '../../plugins/axios'
import {baseUrl} from './config'

//搜索条件
export const searchNav=(para)=>{
  return axios.get(baseUrl+'/nav',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//搜索列表
export const getSearchList=(para)=>{
  return axios.get(baseUrl+'/activity/search',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
