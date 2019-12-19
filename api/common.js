import axios from '~/plugins/axios'

export const get_qiniu_token=(para)=>{
  return axios.get('/common/get_qiniu_token',para,{
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
  return axios.get('/open/getAllProvinces',{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//市
export const getcities=(para)=>{
  return axios.get('/open/getCitiesByProvince',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//区
export const getAreas=(para)=>{
  return axios.get('/open/getAreasByCity',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//镇
export const getTownsByArea=(para)=>{
  return axios.get('/open/getTownsByArea',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//所有城市
export const getCity=()=>{
  return axios.get('/open/getAllCities',{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//数据字典
export const systemDict=()=>{
  return axios.get('/open/assistant/systemDict',{},{
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
  return axios.post('/confined/account/logout',{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//根据机构code 获取机构信息
export const get_agency_info=(para)=>{
  return axios.get('/open/common/get_agency_info',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//获取所有银行
export const getAllBanks=(para)=>{
  return axios.get('/open/getAllBanks',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//下载信息统计
export const downStatistics=(para)=>{
  return axios.post('/open/buriedPoint/insert',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//数据埋点 新增
export const insert=(para)=>{
  return axios.post('/open/buriedPoint/insert',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
export const getWatermark=(para)=>{
  return axios.post('/open/file/waterMarker',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//添加银行卡
export const addAccountBank=(para)=>{
  return axios.post('/confined/account/bank/account/add',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//银行账户列表接口
export const getAccountBankList=(para)=>{
  return axios.get('/confined/account/bank/account/list',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//提现
export const withdraw_account=(para)=>{
  return axios.post('/confined/account/withdraw',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//获取客服entid
export const getConfigInfo=(para)=>{
  return axios.get('/open/assistant/getConfigInfo',{},{

    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//解绑银行账户接口
export const bank_account_unbund=(para)=>{
  return axios.post('/confined/account/bank/account/unbind',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
