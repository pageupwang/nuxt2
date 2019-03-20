import axios from '../../plugins/axios'

import {baseUrl} from './config'

export const getMain=()=>{
  return axios.post(baseUrl+'/comprador/requirementListByBuildingType',{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}



//资产大买办 更多-列表
export const moreList=(para)=>{
  return axios.post(baseUrl+'/comprador/requirementList',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//买卖风云榜
export const headline=(para)=>{
  return axios.post(baseUrl+'/articles/headline',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
