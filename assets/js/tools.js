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
