import mutantion from './mutations/mutations'
import {getAccountInfo} from '../api/confined/application'
import { getSearchList} from '../api/open/search'

export default {
  setProblemNavid({commit}, navid) {
    commit('setProblemNavid', navid)
  },
  setProblemId({commit}, id) {
    commit('setProblemId', id)
  },
  //获取用户信息
  getUser({commit},reload) {
    getAccountInfo().then(res => {
      let data = res.data
      if (data.code === '000') {
        let user = data.content;
        user.accountAmount = data.content.accountAmount || 0
        user.availableAmount = data.content.availableAmount || 0
        user.lockAmount = data.content.lockAmount || 0
        commit('addUser', user)
      } else {
        commit('addUser', {})
      }
    }).catch(err => {
      commit('addUser', {})
      console.log(err);
    }).finally(re=>{
      if(reload){
        window.location.reload()
      }
    })
  },
  getSearchList({commit,state}){
    let para = {
      query: state.search.query || '',
      perPage: state.search.perPage || 10,
      page: state.search.page|| 1,
      partyCategoryId: state.search.asset_party_category.id || '',
      categoryId: state.search.category_group_id.id || '',
      cityId: state.search.city_id.id || '',
      activityMode: state.search.mode.id || '',
      propertyNameId: state.search.property_id.id || '',
      activityStatus: state.search.status.id || '',
    }
    getSearchList(para).then(res => {
      let data = res.data
      if (data.code === '000') {
        commit('searchList',data.content)
      } else {
        commit('searchList',[])
      }
    }).catch(err => {
      commit('searchList',[])
      console.log(err);
    })
  },
}
