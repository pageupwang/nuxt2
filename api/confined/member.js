import axios from '../../plugins/axios'
import {baseUrl } from './config'
//物权债权拍卖活动
export const dataSubmit = (list,id) => {
  return axios.post(baseUrl + '/addAsset', {"fields": list,"spvId": id}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//预招商数据提交
export const attractSubmit = (list) => {
  return axios.post(baseUrl + '/enrolling_activity/save_activity', {"fields": list}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}


//我的参拍提醒
export const my_notify = (para) => {
  return axios.get(baseUrl + '/activity/my_notify', {params: para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//我的参拍提醒-取消提醒
export const cancelNotify = (para) => {
  return axios.post(baseUrl + '/activity/notify_me/cancel', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//我的参拍-列表
export const myDeposit = (para) => {
  return axios.get(baseUrl + '/deposit/myDeposit', {params: para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//我发布的拍品-l列表
export const myAsset = (para) => {
  return axios.get(baseUrl + '/myAsset', {params: para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//我发布的拍品-l列表撤回标的
export const withdrawmyAsset = (para) => {
  return axios.post(baseUrl + '/withdraw/asset', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//参拍成功订单
export const auction_orders = (para) => {
  return axios.get(baseUrl + '/auction_orders', {params: para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//申请处置服务商
export const applyHandleServer = (para) => {
  return axios.post(baseUrl + '/account/dispose/provider/apply', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//申请资金供应商
export const applyMoneyServer = (para) => {
  return axios.post(baseUrl + '/account/fund/provider/apply', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//处置服务商申请详情接口
export const applyHandleServerDetail = (para) => {
  return axios.get(baseUrl + '/account/dispose/provider/apply/detail', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//资金供应商申请详情接口
export const applyMoneyServerDetail = (para) => {
  return axios.get(baseUrl + '/account/fund/provider/apply/detail', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//我的送拍成交订单列表
export const sellerList = (para) => {
  return axios.get(baseUrl + '/my/seller/auction/order/list', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//我的送拍成交订单列表-详情
export const sellerListDetail = (para) => {
  return axios.get(baseUrl + '/my/seller/auction/order/detail', {params: para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//参拍成功详情订单列表-详情
export const shopListDetail = (para) => {
  return axios.get(baseUrl + '/auction_orders/buyer/detail', {params: para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//我的拍卖会列表
export const myActivityList = (para) => {
  return axios.get(baseUrl + '/my/activity/list', {params: para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
// 商品签署协议
export const signing = (id) => {
  return axios.post(baseUrl + '/auction/signContract', {orderId: id}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}


// 商品支付
export const paymoney = (id) => {
  return axios.post(baseUrl + '/auction/pay', {orderId: id}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}


// 发货
export const sendMoney = (id) => {
  return axios.post(baseUrl + '/auction/confirmSend', {orderId: id}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//
export const signContract = (para) => {
  return axios.get(baseUrl + '/delegation/signature/url', {params: para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//
export const additional = (para) => {
  return axios.get(baseUrl + '/additional/signature/url', {params: para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}


// 收货
export const sendMoneyT = (id) => {
  return axios.post(baseUrl + '/auction/confirmRev', {orderId: id}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//机构入驻申请
export const joinMechanism = (para) => {
  return axios.post(baseUrl + '/agency/apply', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//机构入驻申请-详情
export const joinMechanismDetail = (para) => {
  return axios.get(baseUrl + '/agency/apply/detail', {params: para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}


//获取模板信息
export const detailSend = (para) => {
  return axios.post(baseUrl + '/my/asset/detail', {assetId: para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}


//修改模板信息
export const detailAmend = (para) => {
  return axios.post(baseUrl + '/my/asset/edit', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//修改处置服务模板信息
export const disposeAmend = (para) => {
  return axios.post(baseUrl + '/my/asset/disposalAssetEdit', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}


//修改配资服务模板信息
export const configuration = (para) => {
  return axios.post(baseUrl + '/my/asset/withfudigAssetEdit', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//修改发布预招商

export const beforehand = (para) => {
  return axios.post(baseUrl + '/enrolling_activity/update_activity', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//查看发布预招商

export const detailSendHand = (para) => {
  return axios.post(baseUrl + '/enrolling_activity/get_enrolling_detail', {activityId: para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//补充资料
export const addMeans = (para) => {
  return axios.post(baseUrl + '/addWithfudigAsset', para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//获取我发布的拍品详情
export const myAssetDetail = (para) => {
  return axios.post(baseUrl + '/my/asset/see',para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//获取购买记录
export const getPurchaseRecord = (para) => {
  return axios.get(baseUrl + '/finance/getPurchaseRecord',{params:para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//获取平台账户余额信息
export const getAccountMoneyInfo = (para) => {
  return axios.get(baseUrl + '/finance/getAccountMoneyInfo',{params:para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//获取当前绑定的卡
export const getBindingCard = (para) => {
  return axios.get(baseUrl + '/finance/getBindingCard',{params:para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//spv列表
export const getSpvList = (para) => {
  return axios.post(baseUrl + '/account/getSpvList',para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//新增spv
export const applySpv = (para) => {
  return axios.post(baseUrl + '/account/applySpv',para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//新增spv详情
export const getSpvDetail = (para) => {
  return axios.post(baseUrl + '/account/getSpvDetail',para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//个人中心 我的关注数据
export const favoriteCount = (para) => {
  return axios.get(baseUrl + '/activity/favoriteCount',{params:para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//个人中心 判断能否上传拍品
export const checkCanUploadActivity = (para) => {
  return axios.post(baseUrl + '/account/checkCanUploadActivity',para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//个人中心 判断能否上传拍品后获取企业spv列表
export const getCompanySpv = (para) => {
  return axios.post(baseUrl + '/account/getCompanySpv',para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//个人中心 切换角色
export const changeRole = (para) => {
  return axios.post(baseUrl + '/account/changeRole',para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//我的尽调接单
export const getOrderList = (para) => {
  return axios.post(baseUrl + '/survey/listByProviderId',para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
//接受
export const getOrderAccept = (para) => {
  return axios.post(baseUrl + '/survey/accessSurvey',para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//是否存在一级合伙人
export const getJudge = (para) => {
  return axios.get(baseUrl + '/survey/firstLevelProvider', {params: para}, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//提交
export const referSubmit = (para) => {
  return axios.post(baseUrl + '/self/asset/preSignTuneAuthProtocol',para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//提交
export const signSubmit = (para) => {
  return axios.post(baseUrl + '/self/asset/signTuneAuthProtocol',para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//上传
export const sendOrderAccept = (para) => {
  return axios.post(baseUrl + '/survey/uploadProviderReport',para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

//获取尽调模板
export const getDownFrame = (para) => {
  return axios.get(baseUrl + '/survey/getReportTemplate',para, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
