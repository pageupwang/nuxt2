import axios from '../../plugins/axios'

import {baseUrl} from './config'

//帮助中心常见问题nav
export const problemNav=()=>{
  return axios.get(baseUrl+'/articleCategory/list',{params:{page:1,perPage:100}},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//帮助中心常见问题nav的每一项
export const problemArticles=(para)=>{
  return axios.get(baseUrl+'/articles?categoryId='+para.categoryId+'&page=1&perPage=100',{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//帮助中心获取文章
export const getArticle=(para)=>{
  return axios.get(baseUrl+'/articles/detail',{params:{page:1,perPage:100,id:para}},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//新闻中心列表
export const getNew=(para)=>{
  return axios.get(baseUrl+'/platform_news',{params:{page:para.page,perPage:10}},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//新闻中心列表
export const getNewDetail=(para)=>{
  return axios.get(baseUrl+'/platform_news/detail',{params:{id:para.id}},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//平台公告列表
export const getplatformAnnouncements=(para)=>{
  return axios.get(baseUrl+'/platform_announcements',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//平台公告详情
export const getplatformAnnouncementsDetail=(para)=>{
  return axios.get(baseUrl+'/platform_announcements/detail',{params:{id:para.id}},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//竞拍公告列表
export const getActivityBroadcasts=(para)=>{
  return axios.get(baseUrl+'/activity_broadcasts',{params:{page:para.page,perPage:10}},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//新闻中心类型加载
export const newscategory=()=>{
  return axios.get(baseUrl+'/articles/category',{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//新闻中心类型列表
export const categoryList=(para)=>{
  return axios.get(baseUrl+'/articles/categoryList',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}//新闻中心类型列表详情
export const categoryDetail=(para)=>{
  return axios.get(baseUrl+'/articles/category/detail',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}


