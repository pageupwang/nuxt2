import axios from '../../plugins/axios'

import {baseUrl} from './config'

//获取详情
export const getDetails=(para)=>{
  return axios.post(baseUrl+'/comprador/requirementDetail',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

export const sendIssue=(id)=>{
  return axios.post(baseUrl+'/comprador/requirementRecommenderAdd',{requirementId:id},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//我要找资产 新增
export const requirementAdd = (para) => {
  return axios.post(baseUrl + '/comprador/requirementAdd', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//我要推荐 新增
export const recommendAdd = (para) => {
  return axios.post(baseUrl + '/comprador/recommendAdd', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}


//个人中心 大买办推介需求 列表
export const myRecommendList = (para) => {
  return axios.post(baseUrl + '/comprador/myRecommendList', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//个人中心 我有资产进度 投标进展
export const myRequirementRecommenderList = (para) => {
  return axios.post(baseUrl + '/comprador/myRequirementRecommenderList', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//支付
export const compradorRequirementPay = (para) => {
  return axios.post(baseUrl + '/serviceOrder/compradorRequirementPay', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//支付轮询

export const queryStatus = (para) => {
  return axios.post(baseUrl + '/serviceOrder/queryStatus', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//置业需求单 更新
export const requirementUpdate = (para) => {
  return axios.post(baseUrl + '/comprador/requirementUpdate', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
