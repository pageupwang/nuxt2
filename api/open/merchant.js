import axios from '../../plugins/axios'

import {baseUrl} from './config'

//预招商列表-查询条件
export const getSearchCondition=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/search_details',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//预招商列表
export const search_enrolling_activities=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/search_enrolling_activities',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//预招商全网联拍
export const merchantJoint=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/activity_joint',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//预招商详情--下方的tab
export const merchantActivity_detail=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/activity_detail',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}


//抵押物预招商须知
export const buyer_must_know=(para)=>{
  return axios.get(baseUrl+'/enrolling/instructions_contents/buyer_must_know',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//抵押物预招商公告
export const get_announcement=(para)=>{
  return axios.get(baseUrl+'/enrolling/instructions_contents/announcement',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//物权招商公告
export const real_get_announcement=(para)=>{
  return axios.get(baseUrl+'/real/instructions_contents/announcement',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//债权招商公告
export const obligatory_get_announcement=(para)=>{
  return axios.get(baseUrl+'/obligatory/instructions_contents/announcement',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//个人中心-招商会详情-标的信息
export const get_matter_info=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/get_matter_info',{params:para},{
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
//个人中心-查看活动报名信息列表
export const share_activity=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/share_activity',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//商品详情页 招商信息
export const activity_detail=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/activity_detail',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
