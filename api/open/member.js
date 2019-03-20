import axios from '../../plugins/axios'

import {baseUrl} from './config'



//模板字段
export const formwork=(type,id)=>{
  return axios.post(baseUrl+'/getTemplate',{categoryId:type,categoryOptionId:id},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

//模板类型
export const formType=(type)=>{
  return axios.post(baseUrl+'/categories',{businessType:type},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}


//获取机构
export const getMechanism=(city,type)=>{
  return axios.get(baseUrl+'/agency/search?cityId='+city+"&q="+type,{},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}



