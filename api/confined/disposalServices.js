import axios from '../../plugins/axios'
import {baseUrl} from './config'

//处置服务商进行投标
export const disposalBidding=(para)=>{
  return axios.post(baseUrl+'/disposal/disposalBidding',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//关注
export const serviceFollowAdd=(para)=>{
  return axios.post(baseUrl+'/disposal/serviceFollowAdd',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}//关注
export const serviceFollowRemove=(para)=>{
  return axios.post(baseUrl+'/disposal/serviceFollowRemove',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//处置服务商进行投标
export const adddisposalBidding=(para)=>{
  return axios.post(baseUrl+'/disposal/disposalBidding',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//处置服务商查看投标进度
export const getBiddingProgress=(para)=>{
  return axios.post(baseUrl+'/disposal/getBiddingProgress',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//查看发布的处置需求
export const getPublishRequirementList=(para)=>{
  return axios.post(baseUrl+'/disposal/getPublishRequirementList',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//我的关注列表
export const getDisposalFollowList=(para)=>{
  return axios.post(baseUrl+'/disposal/getDisposalFollowList',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//我的关注列表-取消
export const serviceFollowRemoveList=(para)=>{
  return axios.post(baseUrl+'/disposal/serviceFollowRemoveList',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心获取处置详情
export const getRequirementCenterDetail=(para)=>{
  return axios.post(baseUrl+'/disposal/getRequirementCenterDetail',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心获取报名信息
export const getBiddingSituation=(para)=>{
  return axios.post(baseUrl+'/disposal/getBiddingSituation',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心获取报名信息-查看方案
export const getBidProgramInfo=(para)=>{
  return axios.post(baseUrl+'/disposal/getBidProgramInfo',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心-发布处置支付 订单状态查询
export const queryStatus=(para)=>{
  return axios.post(baseUrl+'/serviceOrder/queryStatus',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心-处置-发布拍品
export const dataSubmit=(para)=>{
  return axios.post(baseUrl+'/addDisposalAsset',{fields:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心-处置-发布需求
export const addRequirement=(para)=>{
  return axios.post(baseUrl+'/disposal/addRequirement',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}//个人中心-处置-发布需求
export const confirmBid=(para)=>{
  return axios.post(baseUrl+'/disposal/confirmBid',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

