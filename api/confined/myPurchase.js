import axios from '../../plugins/axios'

import {baseUrl} from './config'

export const myRequirementList =(para)=>{
  return axios.post(baseUrl+'/comprador/myRequirementList',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
