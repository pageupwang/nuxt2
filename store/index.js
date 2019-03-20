import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations/mutations'
import actions from './actions'

// function getState() {
//   let states = window.sessionStorage.getItem('state')
//   let state
//   try {
//     state = JSON.parse(states) || initState
//   } catch (e) {
//     state = initState
//   }
//   return state;
// }

let initState = {
  search: {
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
  },
  searchList:[],
  problem: {
    navid: 10,
    id: 28
  },
  merchant:{
    cityId:{name:'全部',id:0},
    status:{name:'全部',id:0},
    type:{name:'全部',id:0},
    page:1,
    perPage:12,
  },
  collect:{
    activityMode:0,
    activityStatus:0,
    categoryId:0,
    q:'',
  },
  modal:{
    promiseModal:false,
    payJoin:false,
    payJoinOffline: false,
    offlineSubmit: false,
    investigation:false,
    investigationSuccess:false,
    investigationError:false,
    configDemand:false,
    agreeUpload: false,
    agreeAffirm: false,
    orderUpload: false,
    downOrder: false,
    downOrderFrame: false,
    configDemandSuccess:false,
    configDemandPay:false,
    findHandle:false,
    findHandlePay:false,
    findHandleSuccess:false,
    timeModal:false,
    timeModal2:false,
    particular:false,
    moneyRecommend:false,
    recommendSuccess:false,
    propertyConfirm:false,
    purchaseSuccess:false,
    purchasePay:false,
    purchaseError:false,
    purchaseDemand:false,
    purchaseDetail:false,
    disposalBidding:false,
    payCode:false,
    memberPaySuccess:false,
    handleSuccess: false,
    handlePay: false,
  },
  user:{},
  property:{
    cityId:'0',
    area:'0',
    orderByPrice:"",
    orderByArea:"",
    page:1,
    perPage:10,
  },
  allocation:{
    requirementAmount:{name:'全部',id:'0'},
    requirementTerm:{name:'全部',id:'0'},
    orderByInterestPercent:{name:'全部',id:'0'},
    orderByRequirementAmount:{name:'全部',id:'0'},
    page:1,
    perPage:10,
  },
  disposalServices:{
    page:1,
    perPage:10,
    cityId:{name:'全部',id:'0'},
    orderBy:{name:'全部',id:'0'},
    disposalType:{name:'全部',id:'0'},
  },
  tabulation:{
    page: 1,
    city: {name: "", id: 0},
  },
  routerName:"",
};


Vue.use(Vuex)
let state = initState
export default ()=>{
  return  new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions,
  })
}
