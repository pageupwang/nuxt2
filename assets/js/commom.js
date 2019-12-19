

function isWeiXin(){
  var ua = window.navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i) == 'micromessenger'){
    return true;
  }else{
    return false;
  }
}

const todf = (url, order) => {
  let aaa = decodeURIComponent(order)
  const form = document.createElement('form')
  form.method = 'POST'
  form.action = url
  var target=''
  if(isWeiXin()){
    target='_self'
  }else{
    target = '_blank'
  }
  form.target = target
  let data = [{name: 'order', value: aaa}]
  data.forEach(item => {
    const element = document.createElement('input')
    element.value = item.value
    element.name = item.name
    form.appendChild(element)
  })
  document.body.appendChild(form)
  form.submit()
  document.body.removeChild(form)
}

//创建a链接跳转
export const createA=(url,target)=>{
  const elink = document.createElement('a')
  elink.style.display = 'none'
  elink.href = url
  elink.target = '_blank'
  document.body.appendChild(elink)
  elink.click()
  URL.revokeObjectURL(elink.href) // 释放URL 对象
  document.body.removeChild(elink)
}


//金额转换
export const moneySend=(money)=>{
  if (money == ''|| money == 'null'){
    return '无'
  }else{
    if(money != null && money != 'undefined'){
      money = money.toString().replace(/,/g, "");
    }
    let num = parseFloat(money);
    let strNum = parseFloat("a");
    if (num.toString() != strNum.toString()){
      if(num == 0){
        return "无"
      }else{
        money = money.replace(/,/g, "")
        if(num >= 100000000){
          let amount = num/100000000;
          let arr = (num/100000000).toString();
          if (arr.indexOf(".") > 0){
            let strh = arr.substring(arr.indexOf(".") + 1, arr.indexOf(".") + 9);
            let str = parseInt(arr);
            num = str.toLocaleString() + '.' + strh + "亿"
          }else{
            num = amount.toLocaleString() + "亿"
          }
        }else{
          if(num >= 10000){
            let amount = num/10000;
            let arr = (num/10000).toString();
            if (arr.indexOf(".") > 0){
              let strh = arr.substring(arr.indexOf(".") + 1, arr.indexOf(".") + 5);
              let str = parseInt(arr);
              num = str.toLocaleString() + '.' + strh + "万"
            }else{
              num = amount.toLocaleString() + "万"
            }
          }else{
            num = num.toLocaleString();
          }
        }
        return num
      }
    }else{
      return "无"
    }
  }
}
export const moneySendt=(money)=>{
  if (money == '' || money == 'null'){
    return '无'
  }else{
    if(money != null && money != 'undefined'){
      money = money.toString().replace(/,/g, "");
    }
    let num = parseFloat(money);
    let strNum = parseFloat("a");
    if (num.toString() != strNum.toString()){
      if(num == 0){
        return "无"
      }else{
        if(num >= 100000000){
          let amount = num/100000000;
          let arr = (num/100000000).toString();
          if (arr.indexOf(".") > 0){
            let strh = arr.substring(arr.indexOf(".") + 1, arr.indexOf(".") + 9);
            let str = parseInt(arr);
            num = str + strh + "亿"
          }else{
            num = amount + "亿"
          }
        }else{
          if(num >= 10000){
            let amount = num/10000;
            let arr = (num/10000).toString();
            if (arr.indexOf(".") > 0){
              let strh = arr.substring(arr.indexOf(".") + 1, arr.indexOf(".") + 5);
              let str = parseInt(arr);
              num = str + strh + "万"
            }else{
              num = amount + "万"
            }
          }
        }
        return num.toString()
      }
    }else{
      return "无"
    }
  }
}
