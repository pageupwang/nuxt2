import axios from '../../plugins/axios'
import {baseUrl} from './config'

//tab
export const tab=(type)=>{
  return axios.get(baseUrl+'/common/get_tab?type='+type,{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}


//预招商Tab
export const attractMain=(tabId)=>{
  return axios.get(baseUrl+'/assetHall/enrolling_activity_list?hallId='+tabId ,{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//预招商排行榜
export const rankList=()=>{
  return axios.get(baseUrl+'/enrolling_activity/get_activity_ranking',{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//拍卖大厅排行榜
export const auctionList=(para)=>{
  return axios.get(baseUrl+'/activity/ranking',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}


//首页属性加载
export const getNav=()=>{
  return axios.get(baseUrl+'/nav',{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//金牌商家前
export const getMerchantFirst=(num,numPage)=>{
  return axios.get(baseUrl+'/partner_agency_list?page='+num+'&perPage='+numPage,{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//金牌商家后
export const getMerchant=(num,numPage)=>{
  return axios.get(baseUrl+'/partner_agencies?page='+num+'&perPage='+numPage,{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}


//拍卖大厅
export const auctionMain=(id)=>{
  return axios.post(baseUrl+'/assetHall/list',{'hallId':id},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}


//热门拍品
export const hotSearch=(id)=>{
  return axios.post(baseUrl+'/assetProperty/search',{'assetPropertyId':id},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//拍卖专场
export const auctionSession=()=>{
  return axios.get(baseUrl+'/album/sticky/list',{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//拍卖专场
export const getBanner=(num2,type)=>{
  return axios.get(baseUrl+'/banners/list?page=1&perPage='+num2+"&type="+type,{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

