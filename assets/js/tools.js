export const getCookie = (name) => {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}

export const delCookie = (name, domain) => {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null && !domain) {
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  } else {
    document.cookie = name + "=" + cval + ";domain=" + domain + ";expires=" + exp.toGMTString();
  }
}
export const SetCookie = (name, value, domain) => {
  var str = name + "=" + escape(value) + ";domain=" + domain + ";path=/";
  var date = new Date();
  date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000); //设置date为当前时间加一年
  str += ";expires=" + date.toGMTString();
  document.cookie = str;
}
//根据城市id获取城市名称
export const checkCity = (id) => {
  if (id) {
    let city = window.sessionStorage.getItem('cityss') || {}
    city = JSON.parse(city)
    return city[id].name || ''
  } else {
    return ''
  }
  
}

//资产大买办-根据建筑类型id获取建筑类型名称
export const compradorRequirementBuildingType = (id) => {
  let dic = window.sessionStorage.getItem('dic') || {}
  dic = JSON.parse(dic)
  return dic.compradorRequirementBuildingType[id] || ''
}

//资产大买办-根据状态id获取审核状态名称
export const compradorRequirementStatus = (id) => {
  let dic = window.sessionStorage.getItem('dic') || {}
  dic = JSON.parse(dic)
  return dic.compradorRequirementStatus[id] || ''
}
//资产大买办-根据状态id获取审核状态名称
export const compradorRecommenderStatus = (id) => {
  let dic = window.sessionStorage.getItem('dic') || {}
  dic = JSON.parse(dic)
  return dic.compradorRecommenderStatus[id] || ''
}
//资产大买办-根据债权种类id获取债权种类名称
export const compradorRequirementTransactionMode = (id) => {
  let dic = window.sessionStorage.getItem('dic') || {}
  dic = JSON.parse(dic)
  return dic.compradorRequirementTransactionMode[id] || ''
}
//配资乐-根据债权种类id获取债权种类名称
export const withfudigRequirementAssetType = (id) => {
  let dic = window.sessionStorage.getItem('dic') || {}
  dic = JSON.parse(dic)
  return dic.withfudigRequirementAssetType[id] || ''
}
//申请状态
export const applyStatus = (id) => {
  let dic = window.sessionStorage.getItem('dic') || {}
  dic = JSON.parse(dic)
  return dic.applyStatus[id] || ''
}
//拍卖方式
export const assetExpectedMode = (id) => {
  let dic = window.sessionStorage.getItem('dic') || {}
  dic = JSON.parse(dic)
  return dic.assetExpectedMode[id] || ''
}
//拍卖状态
export const auctionOrderStatus = (id) => {
  let dic = window.sessionStorage.getItem('dic') || {}
  dic = JSON.parse(dic)
  return dic.auctionActivityStatus[id] || ''
}
//配资乐状态
export const withfudigRequirementStatus = (id) => {
  let dic = window.sessionStorage.getItem('dic') || {}
  dic = JSON.parse(dic)
  return dic.withfudigRequirementStatus[id] || ''
}
//拍卖状态
export const auctionActivityStatus = (id) => {
  let dic = window.sessionStorage.getItem('dic') || {}
  dic = JSON.parse(dic)
  return dic.auctionActivityStatus[id] || ''
}
//处置类型
export const disposeProviderService = (id) => {
  let dic = window.sessionStorage.getItem('dic') || {}
  dic = JSON.parse(dic)
  return dic.disposeProviderService[id] || ''
}
//处置发布状态
export const disposalRequirementStatus = (id) => {
  let dic = window.sessionStorage.getItem('dic') || {}
  dic = JSON.parse(dic)
  return dic.disposalRequirementStatus[id] || ''
}
//处置投标状态
export const disposalBiddingStatus = (id) => {
  let dic = window.sessionStorage.getItem('dic') || {}
  dic = JSON.parse(dic)
  return dic.disposalBiddingStatus[id] || ''
}
//配资乐出资状态
export const withfudigInvestStatus = (id) => {
  let dic = window.sessionStorage.getItem('dic') || {}
  dic = JSON.parse(dic)
  return dic.withfudigInvestStatus[id] || ''
}//配资乐出资状态
export const compradorRecommendStatus = (id) => {
  let dic = window.sessionStorage.getItem('dic') || {}
  dic = JSON.parse(dic)
  return dic.compradorRecommendStatus[id] || ''
}

//金额转换为三位一撇
export const changeToThree = value => {
  if (typeof value == "number") {
    value += ''
  }
  var data = value.split(".");
  var data1 = data[0];
  var data2 = data[1];
  if (data2 != null && data2.length == 2) {
    return data1.replace(/[^\d.]+/g, '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,') + '.' + data2;
  } else {
    return value.replace(/[^\d.]+/g, '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
  }
}
