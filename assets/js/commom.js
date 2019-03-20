import {applyPay,addlyFdd} from '../../api/confined/application'
import {downStatistics} from '../../api/common'
// import dialog from '../../plugin/dialog'


export const toDFFT = (para) => {
  para=para||{}
  applyPay(para).then(res => {
    let data = res.data

    if (data.code == "000") {
      let order = data.content.order
      let url = data.content.url
      todf(url, order)
    } else {
      // dialog.alert(data.desc)
    }
  }).catch(err => {

    // dialog.alert('开通失败')
    console.log(err);
  })
};
export const statisticsDown = (desc,type,id,params) => {
  let para = {
    "pointKey": window.location.href,
    "pointDesc": desc,
    "pointType" : type,
    "buzId" : id,
    "buzParams" : params,
  };
  downStatistics(para).then(res => {
    let data = res.data;
  }).catch(err => {
    console.log(err);
  })
};

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
//开通法大大
export const openFdd=(para,self)=>{
  addlyFdd(para).then(res => {
    let data = res.data
    console.log(res)
    if (data.code == "000") {
      // dialog.alert(data.desc)
      self.$store.dispatch('getUser')
      
    } else {
      // dialog.alert(data.desc)
    }
  }).catch(err => {
    console.log(err);
  }).finally(res=>{
    self.fddFlag=false
  })
}
