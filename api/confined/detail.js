import axios from '../../plugins/axios'
import {baseUrl} from './config'

//预招商关注
export const activityFocus=(para)=>{
  return axios.post(baseUrl+'/enrolling_activity/activity_focus',para,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
}
