import axios from '../../plugins/axios'

import {baseUrl} from './config'

//拍品详情
export const getAuction=(part)=>{
  return axios.post(baseUrl+'/activity/detail',part,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//获取价格
export const getPrice=()=>{
  return axios.post(baseUrl+'/disposal/getDisposalPrice',{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//获取价格
export const getPrice2=()=>{
  return axios.post(baseUrl+'/withfudig/withfudigPrice',{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//浏览量
export const look=(id)=>{
  return axios.get(baseUrl+'/activity/view?activityId='+id,{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}


//分享
export const share=(id)=>{
  return axios.get(baseUrl+'/activity/share?activityId='+id,{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//出价记录
export const recordList=(para)=>{
  return axios.post(baseUrl+'/bid_order',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}



//模板数据
export const describe=(para)=>{
  return axios.post(baseUrl+'/asset/detail',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//拍卖师
export const auction=(para)=>{
  return axios.get(baseUrl+'/activity/staffAndAuctioneer?activityId='+para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}




//特别告知
export const inform=(id)=>{
  return axios.get(baseUrl+'/instructions_contents/special_detail?activityId='+id,{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//拍卖公告
export const notice=(id)=>{
  return axios.get(baseUrl+'/instructions_contents/announcement?activityId='+id,{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}


//竞买须知
export const need=(id)=>{
  return axios.get(baseUrl+'/instructions_contents/buyer_must_know?activityId='+id,{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//处置服务商展示
export const getAdvert = (para) => {
  return axios.get(baseUrl + '/dispose/show/provider',{params: para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
