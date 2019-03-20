import axios from '../../plugins/axios'

import {baseUrl} from './config'

export const indexHelp=(id)=>{
  return axios.get(baseUrl+'/articles',{params:{page:1,perPage:100,categoryId:id}},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
