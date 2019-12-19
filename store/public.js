

export const state = () => ({
  nav: {},
  buyer: [],
  school: [],
  pay: [],
  provinces: [],
})
export const mutations = {
  
  GET_NAV(state, nav) {
    state.nav = nav
  },
  GET_INDEX_BUYER(state, buyer) {
    state.buyer = buyer
  },
  GET_INDEX_SCHOOL(state, school) {
    state.school = school
  },
  GET_INDEX_PAY(state, pay) {
    state.pay = pay
  },
  SET_PROVINCES(state,provinces){
    state.provinces = provinces
  },
}

export const actions = {
  getNav({commit}) {
    return this.$axios.get('/open/nav').then(res => {
      let data = res.data
      if (data.code === '000') {

        commit('GET_NAV', data.content)
      } else {
      }
    }).catch(error=>{
      console.log(error);
    })
  },
  getIndexBuyer({commit}) {
    return this.$axios.get('/open/articles?page=1&perPage=100&categoryId=11').then(res => {
      let data = res.data
      if (data.code === '000') {
        commit('GET_INDEX_BUYER', data.content.list)
      } else {

      }
    })
  },
  getIndexSchool({commit}) {
    return this.$axios.get('/open/articles?page=1&perPage=100&categoryId=10').then(res => {
      let data = res.data
      if (data.code === '000') {
        commit('GET_INDEX_SCHOOL', data.content.list)
      } else {

      }
    })
  },
  getIndexPay({commit}) {
    return this.$axios.get('/open/articles?page=1&perPage=100&categoryId=13').then(res => {
      let data = res.data
      if (data.code === '000') {
        commit('GET_INDEX_PAY', data.content.list)
      } else {

      }
    })
  },
  setProvince({commit}) {
    return this.$axios.get('/open/getAllProvinces').then(res => {
      let data = res.data
      if (data.code === '000') {
        commit('SET_PROVINCES',data.content.list)
      } else {
      
      }
    })
  },
}
