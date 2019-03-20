import axios from '../../plugins/axios'
import {baseUrl} from './config'

//申请法大大
export const addlyFdd=(para)=>{
    return axios.post(baseUrl+'/account/bindFdd',para,{
        headers:{
            'Content-Type': 'application/json',
        }
    })
  }
  
//申请东方付通
export const applyPay=(para)=>{
  
    return axios.post(baseUrl+'/account/bindPay',para,{
        headers:{
            'Content-Type': 'application/json',
        }
    })
}

//申请个人认证
export const applyUserAuth=(para)=>{
    return axios.post(baseUrl+'/account/applyUserAuth',para,{
        headers:{
            'Content-Type': 'application/json',
        }
    })
}

//申请企业认证
export const applyCompanyAuth=(para)=>{
    return axios.post(baseUrl+'/account/applyCompanyAuth',para,{
        headers:{
            'Content-Type': 'application/json',
        }
    })
}

//获取用户账户信息
export const getAccountInfo=()=>{
    return axios.post(baseUrl+'/account/getAccountInfo',{},{
        headers:{
            'Content-Type': 'application/json',
        }
    })
}

//机构搜索
export const searchAgency=(para)=>{
    return axios.post(baseUrl+'/account/searchAgency',para,{
        headers:{
            'Content-Type': 'application/json',
        }
    })
}
//修改机构搜索
export const modifyAgency=(para)=>{
    return axios.post(baseUrl+'/account/modifyAgency',para,{
        headers:{
            'Content-Type': 'application/json',
        }
    })
}

//修改密码接口
export const modifyPassword=(para)=>{
    return axios.post(baseUrl+'/account/modifyPassword',para,{
        headers:{
            'Content-Type': 'application/json',
        }
    })
}
//获取认证信息
export const getAuthInfo=(para)=>{
  return axios.post(baseUrl+'/account/getAuthInfo',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//银行账户列表
export const getbankAccounts=(para)=>{
  return axios.get(baseUrl+'/account/bank/accounts',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//添加银行账户
export const addbankAccounts=(para)=>{
  return axios.post(baseUrl+'/account/add/bank/account',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//修改银行账户
export const updatebankAccounts=(para)=>{
  return axios.post(baseUrl+'/account/update/bank/account',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//删除银行账户
export const deletebankAccounts=(para)=>{
  return axios.post(baseUrl+'/account/delete/bank/account',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//获取企业下员工列表
export const getMemberList=(para)=>{
  return axios.get(baseUrl+'/account/company/member/list',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//企业添加成员
export const addMember=(para)=>{
  return axios.post(baseUrl+'/account/company/member/add',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
//企业删除成员
export const deleteMember=(para)=>{
  return axios.post(baseUrl+'/account/company/member/delete',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

