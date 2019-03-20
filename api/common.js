import axios from '../plugins/axios'

export const get_qiniu_token=(para)=>{
  return axios.get('/rest-web/common/get_qiniu_token',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
export const toQiniu=(para)=>{
  return axios.post('https://upload.qiniup.com/',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//省
export const getAllProvinces=()=>{
  return axios.get('/rest-web/open/getAllProvinces',{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//市
export const getcities=(para)=>{
  return axios.get('/rest-web/open/getCitiesByProvince',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//所有城市
export const getCity=()=>{
  return axios.get('/rest-web/open/getAllCities',{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//数据字典
export const systemDict=()=>{
  return axios.get('/rest-web/open/assistant/systemDict',{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//跳转东方付通
export const todongfangfutong=(url,para)=>{
  return axios.get(url,{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//退出登录
export const layOut=()=>{
  return axios.post('/rest-web/confined/account/logout',{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//根据机构code 获取机构信息
export const get_agency_info=()=>{
  return axios.get('/rest-web/open/common/get_agency_info',{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//获取所有银行
export const getAllBanks=()=>{
  return axios.get('/rest-web/open/getAllBanks',{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//下载信息统计
export const downStatistics=(para)=>{
  return axios.post('/rest-web/open/buriedPoint/insert',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//数据埋点 新增
export const insert=(para)=>{
  return axios.post('/rest-web/open/buriedPoint/insert',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
