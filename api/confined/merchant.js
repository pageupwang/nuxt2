import axios from '../../plugins/axios'
import {baseUrl} from './config'
//预招商报名
export const activity_apply=(para)=>{
  return axios.post(baseUrl+'/enrolling_activity/activity_apply',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//预招商关注
export const activity_focus=(para)=>{
  return axios.post(baseUrl+'/enrolling_activity/activity_focus',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//预招商设置提醒
export const activity_remind=(para)=>{
  return axios.post(baseUrl+'/enrolling_activity/activity_remind',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}


//个人中心-我的招商会
export const myActivityList=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/my_activity',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//个人中心-我关注的招商会
export const myFocusActivityList=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/my_focus_activity',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心-我关注的招商会-取消关注
export const cancelMyFocusActivity=(para)=>{
  return axios.post(baseUrl+'/enrolling_activity/cancel_my_focus',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}//个人中心-我关注的招商会-取消关注
export const cancelMyFocusActivityList=(para)=>{
  return axios.post(baseUrl+'/enrolling_activity/cancel_my_focusList',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心-我的预招商提醒
export const myRemindActivityList=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/my_remind_activity',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心-我的预招商提醒-取消关注
export const cancelmyRemindActivity=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/cancel_my_remind',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心-我报名的预招商活动
export const myApplyActivityList=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/my_apply_activity',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//用户认证记录
export const myApplyActivity=(para)=>{
  return axios.get(baseUrl+'/account/apply/record/list',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}


//个人中心-预招商活动查看进度
export const get_progress_list=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/get_progress_list',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//个人中心-查看活动报名信息列表
export const apply_activity_list=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/apply_activity_list',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心-签署委托模板
export const sign_contract=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/sign_contract',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心-增加抵押物预招商发布招商进展
export const save_progress=(para)=>{
  return axios.post(baseUrl+'/enrolling_activity/save_progress',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心-保存抵押物预招商发布招商结果
export const save_result=(para)=>{
  return axios.post(baseUrl+'/enrolling_activity/save_result',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心-获取抵押物预招商发布招商结果
export const get_result_info=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/result_info',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//个人中心-抵押物预招商支付佣金
export const pay_commission=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/pay_commission',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心-撤销我的预招商活动
export const backout_activity=(para)=>{
  return axios.post(baseUrl+'/enrolling_activity/backout_activity',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心-发布预招商
export const save_activity=(para)=>{
  return axios.post(baseUrl+'/enrolling_activity/save_activity',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心-招商会详情
export const my_activity_info=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/my_activity_info',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心-上传参拍凭证
export const save_proof=(para)=>{
  return axios.post(baseUrl+'/enrolling_activity/save_proof',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//获取微信支付状态
export const queryStatus=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/get_order_status',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}







