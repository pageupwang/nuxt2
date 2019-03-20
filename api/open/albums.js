import axios from '../../plugins/axios'
import {baseUrl} from './config'

//拍卖大厅-列表
export const albumList = (para) => {
  return axios.get(baseUrl + '/album/list', {params:para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//拍卖大厅-列表-详情
export const albumListdetail = (para) => {
  return axios.get(baseUrl + '/album/detail', {params:para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}//拍卖大厅-列表-详情-商品列表
export const albumListdetaillist = (para) => {
  return axios.get(baseUrl + '/album/related/activity/list', {params:para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
