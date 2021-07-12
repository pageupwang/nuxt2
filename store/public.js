export const state = () => ({
  nav: {},
})
export const mutations = {
  GET_NAV(state, nav) {
    state.nav = nav
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
}
