export const actions = {
  nuxtServerInit(store, {req}) {
    return Promise.all([
      store.dispatch('public/getNav'),
      store.dispatch('public/setProvince'),
      store.dispatch('public/getIndexBuyer'),
      store.dispatch('public/getIndexSchool'),
      store.dispatch('public/getIndexPay'),
    ])
  },
}
