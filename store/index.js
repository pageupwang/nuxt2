export const actions = {
  //nuxt启动前调用
  nuxtServerInit(store, {req}) {
    return Promise.all([
      store.dispatch('public/getNav'),
    ])
  },
}
