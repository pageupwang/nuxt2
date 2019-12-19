//用户


export const state = () => ({
  user:{},
  componeyFlag:false,
  componeyModal:false,
  agencyInfo:{},
  agencyCode:'',
})
export const mutations = {
  addUser(state, data) {
    state.user = data
  },
  checkcomponeyFlag(state, flag) {
    if (!state.componeyFlag) {
      state.componeyModal = true
      state.componeyFlag = true
    }
    if (flag) {
      state.componeyModal = false
    }
  },
}
export const actions = {
//获取用户信息
//   getUser({commit}, reload) {
//     return getAccountInfo().then(res => {
//       let data = res.data
//       if (data.code === '000') {
//         let user = data.content;
//         user.accountAmount = data.content.accountAmount || 0
//         user.availableAmount = data.content.availableAmount || 0
//         user.lockAmount = data.content.lockAmount || 0
//         commit('addUser', user)
//         commit('checkcomponeyFlag')
//       } else {
//         commit('addUser', {})
//       }
//     }).catch(err => {
//       commit('addUser', {})
//       console.log(err);
//     }).finally(re => {
//       if (reload) {
//         window.location.reload()
//       }
//     })
//   },
}
