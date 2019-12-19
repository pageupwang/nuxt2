import {createA} from './commom'
import {SetCookie, getCookie, delCookie} from "./tools";
import axios from 'axios'

//不需要认证
export const applyArr = ['/member', '/member/profile', '/member/security', '/member/agency_manage', '/member/profile/apply', '/member/security/modify_password', '/member/profile/userApply', '/member/profile/companyApply', '/member/bank', '/member/staffGovern', 'fastTrack/auctionHouse', 'fastTrack/moneyServer', 'fastTrack/handleServer','/member/myAccount','/member/myAccount/cashHostory','/member/security/addBank','/member/security/banks','/member/history','/member/collect', '/member/notified','/member/merchant_collect', '/member/merchant_remind','/member/disposal_collect','/member/waitExamine','/member/examineDetail','/member/examinedList']

//只需要认证
export const accountAuthApplyArr = [ '/member/payProgress', '/member/disposalProgress', '/member/joinMechanism', '/member/applyHandleServer', '/member/applyMoneyServer', '/member/lookService', '/member/purchaseDemand', '/member/wantToMoney', '/member/myDisposal', '/member/myDisposal/myDisposalDetail', '/member/myDisposal', '/member/myPurchase', '/member/allocationProgress', '/member/applyRecommend', '/member/haveAssets', '/member/allocationProgressDetail']

//需要开通法大大
export const fddVerify = ['/member/assets', '/member/assetsDetail', '/member/myAuction', '/member/activity', '/member/activity/activityDetail', '/member/sale', '/member/sale/saleDetail', '/member/auction_records', '/member/shopping', '/member/shopping/shopDetail', '/member/merchant_publish', '/member/mymerchant', '/member/mymerchant/merchantDetail', '/member/merchant_record']
//需要开通东方付通
export const dfftVerify = ['/member/assets', '/member/assetsDetail', '/member/myAuction', '/member/activity', '/member/activity/activityDetail', '/member/sale', '/member/sale/saleDetail', '/member/auction_records', '/member/shopping', '/member/shopping/shopDetail']

export const merchantVerify = ['/member/merchant_publish', '/member/mymerchant', '/member/mymerchant/merchantDetail', '/member/merchant_record']


export const agencyCode = getCode()

function getCode() {
  if (process.client) {
    let href = window.location.href
    let code = href.split('//')[1].split('.')[0]
    if (href.indexOf('localhost') > -1 || code.indexOf('www') > -1 || code.indexOf('prev') > -1 || code.indexOf('devev2') > -1) {
      return ''
    } else {
      return code
    }
  }
}

export const zizhanUrl = getZizhan()

function getZizhan() {
  if (process.client) {
    let urls = ''
    let url = window.location.href
    if (url.indexOf('xyz') > -1) {
      urls = '.prev2.360pai.xyz:81'
    } else if (url.indexOf('test') > -1) {
      urls = '.360pai.test'
    } else if (url.indexOf('deve') > -1) {
      urls = '.360pai.deve'
    } else {
      urls = '.360pai.com'
    }
    return urls
  }
}
export const Domain=()=>{
  if (process.client) {
    let ym = window.location.href
    let domain = ''
    if (ym.indexOf('sss') > -1) {
      domain = '.a.b'
    } else if (ym.indexOf('xyz') > -1) {
      domain = '.360pai.xyz'
    } else if (ym.indexOf('172') > -1) {
      domain = '172.17.102.99'
    } else if (ym.indexOf('deve') > -1) {
      domain = '.360pai.deve'
    } else if (ym.indexOf('test') > -1) {
      domain = '.360pai.test'
    } else if (ym.indexOf('deve') > -1) {
      domain = '.360pai.deve'
    } else {
      domain = '.360pai.com'
    }
    return domain
  }
}

export const deleteMainCookie = () => {
  if (process.client) {
    let ym = window.location.href
    let href = ''
    let domain = ''
    if (ym.indexOf('sss') > -1) {
      domain = '.a.b'
    } else if (ym.indexOf('xyz') > -1) {
      domain = '.360pai.xyz'
    } else if (ym.indexOf('deve') > -1) {
      domain = '.360pai.deve'
    } else if (ym.indexOf('test') > -1) {
      domain = '.360pai.test'
    } else if (ym.indexOf('deve') > -1) {
      domain = '.360pai.deve'
    } else {
      domain = '.360pai.com'
    }
    delCookie('id', domain)
    delCookie('id')
    delCookie('agency_id', domain)
    delCookie('ticket', domain)
    delCookie('ticket')
    delCookie('agency_ticket', domain)
    delCookie('type', domain)
    delCookie('type')
    delCookie('agency_type', domain)
  }
}


export const toPartner = (needLogin) => {
  if (process.client) {
    let ym = window.location.href
    let href = ''
    let domain = ''
    if (ym.indexOf('sss') > -1) {
      href = 'http://sss.a.b:8091'
      domain = '.a.b'
    } else if (ym.indexOf('test') > -1) {
      href = ym.replace('www', 'partner')
      domain = '.360pai.test'
    } else if (ym.indexOf('deve') > -1) {
      href = 'http://partner.360pai.deve'
      domain = '.360pai.deve'
    } else {
      href = 'https://partner.360pai.com'
      domain = '.360pai.com'
    }
    let agency_id = getCookie('id')
    let agency_ticket = getCookie('ticket')
    let agency_type = getCookie('type')
    SetCookie('agency_id', agency_id, domain)
    SetCookie('agency_ticket', agency_ticket, domain)
    SetCookie('agency_type', 'AG', domain)
    createA(href)
  }
}
