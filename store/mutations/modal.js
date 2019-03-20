function addState(val) {
  window.sessionStorage.setItem('state', JSON.stringify(val))
}

export default {
  // 商品详情
  //保证金弹框
  changePromiseModal(state) {
    state.modal.promiseModal = !state.modal.promiseModal
    addState(state)
  },
  //确认支付保证金参拍
  changepayJoin(state) {
    state.modal.payJoin = !state.modal.payJoin
    addState(state)
  },
  //确认线下支付保证金参拍
  changePayJoinOffline(state) {
    state.modal.payJoinOffline = !state.modal.payJoinOffline
    addState(state)
  },
  //填写保证金参拍
  changeofflineSubmit(state) {
    state.modal.offlineSubmit = !state.modal.offlineSubmit
    addState(state)
  },
  //尽调报告支付
  changeInvestigation(state,flag) {
    if (typeof flag == 'boolean') {
      state.modal.investigation = flag
    } else {
      state.modal.investigation = !state.modal.investigation
    }
    addState(state)
  },
  //尽调报告支付成功
  changeInvestigationSuccess(state,flag) {
    if (typeof flag == 'boolean') {
      state.modal.investigationSuccess = flag
    }else{
      state.modal.investigationSuccess = !state.modal.investigationSuccess
    }
    addState(state)
  },
  //处置成功
  changeFindHandleSuccess(state,flag) {
    if (typeof flag == 'boolean') {
      state.modal.findHandleSuccess = flag
    } else {
      state.modal.findHandleSuccess = !state.modal.findHandleSuccess
    }
    addState(state)
  },
  //尽调报告支付失败
  changeInvestigationError(state,flag) {
    if (typeof flag == 'boolean') {
      state.modal.investigationError = flag
    } else {
      state.modal.investigationError = !state.modal.investigationError
    }
    addState(state)
  },
  //配资需求清单
  changeConfigDemand(state) {
    state.modal.configDemand = !state.modal.configDemand
    addState(state)
  },
  //配资需求清单成功
  changeConfigDemandSuccess(state,flag) {
    if (typeof flag == 'boolean') {
      state.modal.configDemandSuccess = flag
    } else {
      state.modal.configDemandSuccess = !state.modal.configDemandSuccess
    }
    addState(state)
  },
  //找人处置
  changeFindHandle(state,flag) {
    if (typeof flag == 'boolean') {
      state.modal.findHandle = flag
    } else {
      state.modal.findHandle = !state.modal.findHandle
    }
    addState(state)
  },
  //找人处置支付
  changeFindHandlePay(state,flag) {
    if (typeof flag == 'boolean') {
      state.modal.findHandlePay = flag
    } else {
      state.modal.findHandlePay = !state.modal.findHandlePay
    }
    addState(state)
  },
  changeConfigDemandPay(state,flag) {
    if (typeof flag == 'boolean') {
      state.modal.configDemandPay = flag
    } else {
      state.modal.configDemandPay = !state.modal.configDemandPay
    }
    addState(state)
  },
  //确认发布倒计时
  changeTimeModal(state) {
    state.modal.timeModal = !state.modal.timeModal
    addState(state)
  },
  //确认发布倒计时2
  changeTimeModal2(state) {
    state.modal.timeModal2 = !state.modal.timeModal2
    addState(state)
  },
  //个人中心-支付弹框
  changePayCode(state,flag) {
    if (typeof flag == 'boolean') {
      state.modal.payCode = flag
    } else {
      state.modal.payCode = !state.modal.payCode
    }
    addState(state)
  },
  //个人中心-支付成功弹框
  changeMemberPaySuccess(state,flag) {
    if (typeof flag == 'boolean') {
      state.modal.memberPaySuccess = flag
    } else {
      state.modal.memberPaySuccess = !state.modal.memberPaySuccess
    }
    addState(state)
  },


  //资产大买办

  //我有资产推荐
  changemoneyRecommend(state) {
    state.modal.moneyRecommend = !state.modal.moneyRecommend
    addState(state)
  },
  //我有资产推荐-成功
  changeRecommendSuccess(state) {
    state.modal.recommendSuccess = !state.modal.recommendSuccess
    addState(state)
  },
  //我有资产推荐-成功
  changePropertyConfirm(state) {
    state.modal.propertyConfirm = !state.modal.propertyConfirm
    addState(state)
  },
  //发布置业需求-发布成功弹窗
  changePurchaseSuccess(state,flag) {
    if (typeof flag == 'boolean') {
      state.modal.purchaseSuccess = flag
    } else {
      state.modal.purchaseSuccess = !state.modal.purchaseSuccess
    }
    addState(state)
  },
  //置业资产需求清单
  changePurchasePay(state, flag) {
    if (typeof flag == 'boolean') {
      state.modal.purchasePay = flag
    } else {
      state.modal.purchasePay = !state.modal.purchasePay
    }

    addState(state)
  },
  //发布置业需求-发布失败弹窗
  changePurchaseError(state,flag) {
    if (typeof flag == 'boolean') {
      state.modal.purchaseError = flag
    } else {
      state.modal.purchaseError = !state.modal.purchaseError
    }
    addState(state)
  },
  //置业资产需求清单弹窗
  changePurchaseDemand(state) {
    state.modal.purchaseDemand = !state.modal.purchaseDemand
    addState(state)
  },
  //大买办详情弹窗
  changePurchaseDetail(state) {
    state.modal.purchaseDetail = !state.modal.purchaseDetail
    addState(state)
  },
  //处置服务商进行投标弹窗
  changeDisposalBidding(state) {
    state.modal.disposalBidding = !state.modal.disposalBidding
    addState(state)
  },
  //清除所有弹框
  closeAllModal(state) {
    var modal = {}
    for (var k in state.modal) {
      modal[k] = false
    }
    state.modal = modal
    addState(state)
  },
  //改变个人中心router。name
  changeRouterName(state,name) {
    state.routerName = name
    addState(state)
  },

  //改变提供尽调报告
  changeAgreeUpload(state) {
    state.modal.agreeUpload = !state.modal.agreeUpload
    addState(state)
  },
  //改变确认尽调报告协议
  changeAgreeAffirm(state) {
    state.modal.agreeAffirm = !state.modal.agreeAffirm
    addState(state)
  },

  //改变上传尽调报告
  changeOrderUpload(state) {
    state.modal.orderUpload = !state.modal.orderUpload
    addState(state)
  },

  //查看尽调报告
  changeDownOrder(state) {
    state.modal.downOrder = !state.modal.downOrder
    addState(state)
  },
  //下载尽调报告
  changeDownOrderFrame(state) {
    state.modal.downOrderFrame = !state.modal.downOrderFrame;
    addState(state)
  },

  //申请服务商
  changeHandleSuccess(state) {
    state.modal.handleSuccess = !state.modal.handleSuccess;
    addState(state)
  },
  //申请服务商支付
  changeHandlePay(state,flag) {
    if (typeof flag == 'boolean') {
      state.modal.handlePay = flag
    } else {
      state.modal.handlePay = !state.modal.handlePay;
      addState(state)
    }
  },
}
