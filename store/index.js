import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations/mutations'
import actions from './actions'

let initState = {

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
