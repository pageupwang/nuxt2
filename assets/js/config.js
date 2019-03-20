import {createA} from './commom'
import {SetCookie, getCookie, delCookie} from "./tools";
import axios from 'axios'

export const applyArr = ['/member', '/member/profile', '/member/security', '/member/agency_manage',   '/member/profile/apply', '/member/security/modify_password', '/member/profile/userApply', '/member/profile/companyApply', '/member/bank','/member/staffGovern']

export const accountAuthApplyArr = ['/member/merchant_collect', '/member/merchant_remind', '/member/payProgress', '/member/disposalProgress','/member/joinMechanism','/member/applyHandleServer','/member/applyMoneyServer','/member/lookService','/member/purchaseDemand','/member/wantToMoney','/member/myDisposal','/member/myDisposal/myDisposalDetail','/member/myDisposal','/member/myPurchase','/member/allocationProgress','/member/applyRecommend','/member/haveAssets','/member/allocationProgressDetail','/member/collect','/member/notified']

export  const fddVerify=['/member/assets','/member/assetsDetail','/member/myAuction','/member/activity','/member/activity/activityDetail','/member/sale','/member/sale/saleDetail','/member/auction_records','/member/shopping','/member/shopping/shopDetail','/member/merchant_publish','/member/mymerchant','/member/mymerchant/merchantDetail','/member/merchant_record']
export const dfftVerify=['/member/assets','/member/assetsDetail','/member/myAuction','/member/activity','/member/activity/activityDetail','/member/sale','/member/sale/saleDetail','/member/auction_records','/member/shopping','/member/shopping/shopDetail']

export const merchantVerify=['/member/merchant_publish','/member/mymerchant','/member/mymerchant/merchantDetail','/member/merchant_record']

export const merchantMy = ['/member/myAuction']

export const getCode = ()=>{
  let href = window.location.href
  let code = href.split('//')[1].split('.')[0]
  if (href.indexOf('localhost') > -1 || code.indexOf('www') > -1 || code.indexOf('prev') > -1 || code.indexOf('devev2') > -1) {
    return ''
  } else {
    return code
  }
}

export const getZizhan=()=> {
  let urls = ''
  let url = window.location.href
  if (url.indexOf('xyz') > -1) {
    urls = '.prev2.360pai.xyz:81'
  } else if (url.indexOf('51npa') > -1) {
    urls = '.51npa.com'
  } else {
    urls = '.360pai.com'
  }
  return urls
}



export const deleteMainCookie = () => {
  let ym = window.location.href
  let href = ''
  let domain = ''
  if (ym.indexOf('sss') > -1) {
    domain = '.a.b'
  } else if (ym.indexOf('xyz') > -1) {
    domain = '.360pai.xyz'
  } else if (ym.indexOf('51npa') > -1) {
    domain = '.51npa.com'
  } else {
    domain = '.360pai.com'
  }
  delCookie('id', domain)
  delCookie('agency_id', domain)
  delCookie('ticket', domain)
  delCookie('agency_ticket', domain)
  delCookie('type', domain)
  delCookie('agency_type', domain)
}

export const toPartner = (needLogin) => {
  let ym = window.location.href
  let href = ''
  let domain = ''
  if (ym.indexOf('sss') > -1) {
    href = 'http://sss.a.b:8091'
    domain = '.a.b'
  } else if (ym.indexOf('xyz') > -1) {
    href = 'http://partnerprev2.360pai.xyz:81'
    domain = '.360pai.xyz'
  } else if (ym.indexOf('51npa') > -1) {
    href = 'https://partner.51npa.com'
    domain = '.51npa.com'
  } else {
    href = 'https://partner.360pai.com'
    domain = '.360pai.com'
  }
  if (needLogin) {
    href += '/#/login'
    delCookie('agency_id', domain)
    delCookie('agency_ticket', domain)
    delCookie('agency_type', domain)
  } else {
    let agency_id = getCookie('id')
    let agency_ticket = getCookie('ticket')
    let agency_type = getCookie('type')
    SetCookie('agency_id', agency_id, domain)
    SetCookie('agency_ticket', agency_ticket, domain)
    SetCookie('agency_type', 'AG', domain)
  }
  createA(href)
}
