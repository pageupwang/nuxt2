import axios from '../../plugins/axios'
import {baseUrl} from './config'
//配资进展
export const myRequirementList = (para) => {
  return axios.post(baseUrl + '/withfudig/myRequirementList', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//配资进展-详情
export const requirementDetail = (para) => {
  return axios.post(baseUrl + '/withfudig/requirementDetail', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//配资乐-我要出资
export const requirementInvestAdd = (para) => {
  return axios.post(baseUrl + '/withfudig/requirementInvestAdd', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//配资乐-出资单 列表
export const myRequirementInvestList = (para) => {
  return axios.post(baseUrl + '/withfudig/myRequirementInvestList', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//配资乐-个人中心 需求单新增（无标的assetId）
export const requirementAddWithoutAssertId = (para) => {
  return axios.post(baseUrl + '/withfudig/requirementAddWithoutAssertId', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//配资乐-个人中心 需求单新增（无标的assetId）支付
export const withfudigRequirementPay = (para) => {
  return axios.post(baseUrl + '/serviceOrder/withfudigRequirementPay', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//配资乐-个人中心 需求单新增（无标的assetId）支付查询
export const queryStatus = (para) => {
  return axios.post(baseUrl + '/serviceOrder/queryStatus', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//配资详情页面-关注
export const serviceFollowAdd = (para) => {
  return axios.post(baseUrl + '/withfudig/serviceFollowAdd', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//配资详情页面-取消关注
export const serviceFollowRemove = (para) => {
  return axios.post(baseUrl + '/withfudig/serviceFollowRemove', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//配资详情页面-取消关注
export const requirementAddWithAssertId = (para) => {
  return axios.post(baseUrl + '/withfudig/requirementAddWithAssertId', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//配资乐 需求单 更新
export const requirementUpdate = (para) => {
  return axios.post(baseUrl + '/withfudig/requirementUpdate', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//配资乐 批量取消关注
export const serviceFollowRemoveList = (para) => {
  return axios.post(baseUrl + '/withfudig/serviceFollowRemoveList', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//配资乐 配资关注列表
export const requirementFollowList = (para) => {
  return axios.post(baseUrl + '/withfudig/requirementFollowList', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
