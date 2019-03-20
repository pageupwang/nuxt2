import axios from '../../plugins/axios'
import {baseUrl} from './config'

//交保证金
export const pay=(part)=>{
  return axios.post(baseUrl+'/auction/payDeposit',part,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//拍品详情
export const offer=(id,money,code)=>{
  return axios.post(baseUrl+'/auction/bid',{'activityId':id,'bidAmount':money, "agencyCode": code},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}


//关注
export const activityFocus=(para)=>{
  return axios.post(baseUrl+'/activity/favor',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//设置提醒
export const activity_remind=(para)=>{
  return axios.post(baseUrl+'/activity/notify_me',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}


//取消关注
export const activityFocusNo=(para)=>{
  return axios.post(baseUrl+'/activity/unFavor',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//取消设置提醒
export const activity_remindNo=(para)=>{
  return axios.post(baseUrl+'/activity/notify/cancel',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}



//模板数据个人中心
export const describeSecond=(para)=>{
  return axios.post(baseUrl+'/self/asset/detail',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//需求单
export const withfudig=(para)=>{
  return axios.post(baseUrl+'/withfudig/requirementAddWithAssertId',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//需求单支付
export const withfudigt=(para)=>{
  return axios.post(baseUrl+'/serviceOrder/withfudigRequirementPay',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}


//获取尽调报告
export const gitReport=(para)=>{
  return axios.post(baseUrl+'/serviceOrder/adjustedPay',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//获取尽调报告是否支付成功
export const gitReportPay=(para)=>{
  return axios.post(baseUrl+'/serviceOrder/queryStatus',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//找人处置提交
export const handleSubmit=(para)=>{
  return axios.post(baseUrl+'/disposal/addRequirement',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//支付处置
export const payHandle=(para)=>{
  return axios.post(baseUrl+'/serviceOrder/providerShowPay',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//获取尽调报告
export const thirdReportPay=(para)=>{
  return axios.post(baseUrl+'/serviceOrder/thirdReportPay',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
