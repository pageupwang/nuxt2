function addState(val) {
  window.sessionStorage.setItem('state', JSON.stringify(val))
}

import modal from './modal'

let mutation = {
  //搜索框
  inputSeach(state, query) {
    state.search.query = query
    state.search.page = 1
    addState(state)
  },
  //改变拍品类型
  changeAsset_groups(state, category_group_id) {
    state.search.category_group_id = category_group_id
    state.search.page = 1
    addState(state)
  },
  //改变委托方分类
  changeCategory(state, asset_party_category) {
    state.search.asset_party_category = asset_party_category
    state.search.page = 1
    addState(state)
  },
  //改变资产类型
  changeProperties(state, property_id) {
    state.search.property_id = property_id
    state.search.page = 1
    addState(state)
  },
  //改变城市
  changeCity(state, city_id,name) {
    state.search.city_id = city_id
    if(name){
      state.search.name = name
    }
    state.search.page = 1
    addState(state)
  },
  //改变拍卖方式
  changeMode(state, mode) {
    state.search.mode = mode
    addState(state)
  },
  //改变拍卖状态
  changeStatus(state, status) {
    state.search.status = status
    state.search.page = 1
    addState(state)
  },
  //改变分页
  curpageChange(state, page) {
    state.search.page = page
    addState(state)
  },
  //取消选择
  cancelCheck(state, name) {
    let search = state.search
    for (var key in search) {
      if (search[key].name && search[key].name == name) {
        search[key].id = 0
        search[key].name = ''
      }
    }
    state.search = search
    state.search.page = 1
    addState(state)
  },
  //搜索页列表
  searchList(state,data){
    state.searchList = data.list
    state.search.total=data.total
    addState(state)
  },
  //初始搜索条件
  resetSearch(state) {
    state.search = {
      query: '',//input值
      asset_party_category: {name: "", id: 0},//委托方式
      category_group_id: {name: "", id: 0},//拍品类型
      city_id: {name: "", id: 0},//所在城市
      mode: {name: "", id: 0},//拍卖方式
      property_id: {name: "", id: 0},//资产类型
      status: {name: "", id: 0},//拍卖状态
      perPage: 12,//每页数量
      page: 1,//当前页
      total:0,
    }
    addState(state)
  },
  //常见问题navid
  setProblemNavid(state, navid) {
    state.problem.navid = navid
    addState(state)
  },
  //常见问题navid
  setProblemId(state, id) {
    state.problem.id = id
    addState(state)
  },
  //预招商-改变类型
  changeMerchantType(state, type) {
    state.merchant.type = type
    addState(state)
  },
  //预招商-改变状态
  changeMerchantStatus(state, status) {
    state.merchant.status = status
    addState(state)
  },
  //预招商-取消选择
  cancelMerchantCheck(state, name) {
    let merchant = state.merchant
    for (var key in merchant) {
      if (merchant[key].name && merchant[key].name == name) {
        merchant[key].id = 0
        merchant[key].name = ''
      }
    }
    state.merchant = merchant
    state.merchant.page = 1
    addState(state)
  },
  //预招商-改变城市
  changeMerchantCityId(state, cityId) {
    state.merchant.cityId = cityId
    addState(state)
  },
  //预招商-资产类型
  changeMerchantPropertyId(state, propertyId) {
    state.merchant.propertyId = propertyId
    addState(state)
  },
  //预招商-改变分页
  changeMerchantPage(state, page) {
    state.merchant.page = page
    addState(state)
  },
  //初始化于招商
  resetMerchant(state) {
    state.merchant = {
      cityId:{name:'全部',id:0},
      status:{name:'全部',id:0},
      type:{name:'全部',id:0},
      page:1,
      perPage:12,
    }
    addState(state)
  },
  //我的关注-搜索
  myCollectQ(state, q) {
    state.collect.q = q
    addState(state)
  }
  ,
  //我的关注-拍品类型
  myCollectCategoryId(state, categoryId) {
    state.collect.categoryId = categoryId
    addState(state)
  }
  ,
  //我的关注-拍卖状态
  myCollectStatus(state, activityStatus) {
    state.collect.activityStatus = activityStatus
    addState(state)
  }
  ,
  //我的关注-拍卖方式
  myCollectMode(state, activityMode) {
    state.collect.activityMode = activityMode
    addState(state)
  }
  ,
  //初始化我的关注
  resetCollect(state) {
    state.collect = {
      activityMode: 0,
      activityStatus: 0,
      categoryId: 0,
      q: '',
    }
    addState(state)
  },
  //增加用户信息
  addUser(state, data) {
    state.user = data
    addState(state)
  }
  ,
  //清除用户信息
  clearUser(state) {
    state.user = {}
    addState(state)
  },
  //配资乐选择融资金额
  changeRequirementAmount(state,id){
    state.allocation.requirementAmount=id
    addState(state)
  },
  //配资乐选择融资期限
  changeRequirementTerm(state,id){
    state.allocation.requirementTerm=id
    addState(state)
  },
  //配资乐选融资利息
  changeOrderByInterestPercent(state,id){
    state.allocation.orderByInterestPercent=id
    addState(state)
  },
  //配资乐选融资金额
  changeOrderByRequirementAmount(state,id){
    state.allocation.orderByRequirementAmount=id
    addState(state)
  },
  // 配资乐初始搜素条件
  cancelAllocationServicesCheck(state,name){
    let allocation = state.allocation
    for (var key in allocation) {
      if (allocation[key].name && allocation[key].name.indexOf(name)>-1) {
        allocation[key].id = '0'
        allocation[key].name = '全部'
      }
    }
    state.allocation = allocation
    state.allocation.page = 1
    addState(state)
  },
  //配资乐-清除状态
  resetAllocation(state){
    state.allocation={
      requirementAmount:{name:'全部',id:'0'},
      requirementTerm:{name:'全部',id:'0'},
      orderByInterestPercent:{name:'全部',id:'0'},
      orderByRequirementAmount:{name:'全部',id:'0'},
      page:1,
      perPage:12,
    }
    addState(state)
  },
  
  //资产大买办-改变城市
  changePropertyCity(state,id){
    state.property.cityId=id
  },
  //资产大买办-面积
  changePropertyMeasure(state,id){
    state.property.area=id
  },
  //资产大买办-改变分页
  changePropertyPage(state,page){
    state.property.page=page
  },
  //资产大买办-面积排序
  changePropertyArea(state,orderByArea){
    state.property.orderByArea=orderByArea
  },
  //资产大买办-价格排序
  changePropertyPrice(state,orderByPrice){
    state.property.orderByPrice=orderByPrice
  },
  //资产大买办-清除状态
  resetProperty(state){
    state.property={
      cityId:'0',
      area:'0',
      orderByPrice:"",
      orderByArea:"",
      page:1,
      perPage:10,
    }
    addState(state)
  },
  
  //处置服务改变城市
  changeDisposalServicesCity(state,id){
    state.disposalServices.cityId=id
    addState(state)
  },
  //处置服务排序
  changeDisposalServicesSort(state,id){
    state.disposalServices.orderBy=id
    addState(state)
  },
  //处置服务类型
  changeDisposalServicesType(state,id){
    state.disposalServices.disposalType=id
    addState(state)
  },
  //处置服务改变分页
  changeDisposalServicesPage(state,page){
    state.disposalServices.page=page
    addState(state)
  },
  // 处置服务初始搜素条件
  cancelDisposalServicesCheck(state,name){
    let disposalServices = state.disposalServices
    for (var key in disposalServices) {
      if (disposalServices[key].name && disposalServices[key].name.indexOf(name)>-1) {
        disposalServices[key].id = '0'
        disposalServices[key].name = '全部'
      }
    }
    state.disposalServices = disposalServices
    state.disposalServices.page = 1
    addState(state)
  },
  //处置服务初始
  resetDisposalServices(state){
    state.disposalServices={
      page:1,
      perPage:12,
      cityId:{name:'全部',id:0},
      orderBy:{name:'全部',id:'0'},
      disposalType:{name:'全部',id:0},
    }
    addState(state)
  },
  
}

export default Object.assign(mutation, modal)
