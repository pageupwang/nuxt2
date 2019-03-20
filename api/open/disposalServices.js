import axios from '../../plugins/axios'
import {baseUrl} from './config'

//处置服务专区首页热门标的列表
export const getHotRequirementList=(para)=>{
  return axios.post(baseUrl+'/disposal/getHotRequirementList',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//处置服务专区首页招商列表
export const getDisposalRequirementList=(para)=>{
  return axios.post(baseUrl+'/disposal/getDisposalRequirementList',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//处置服务专区首页招商情况
export const getInvestmentInfo=(para)=>{
  return axios.post(baseUrl+'/disposal/getInvestmentInfo',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//同类推荐
export const getSimilarRecommendList=(para)=>{
  return axios.post(baseUrl+'/disposal/getSimilarRecommendList',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//需求详情
export const getRequirementDetail=(para)=>{
  return axios.post(baseUrl+'/disposal/getRequirementDetail',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//处置招标公告
export const announcement=(para)=>{
  return axios.get(baseUrl+'/disposal/instructions_contents/announcement',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
