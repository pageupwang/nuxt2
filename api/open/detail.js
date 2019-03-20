import axios from '../../plugins/axios'

let baseUrl="/rest-web/open"

//预招商
export const getgoodsDetail=(para)=>{
  return axios.get(baseUrl+'/enrolling_activity/get_activity_info',{params:para},{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
