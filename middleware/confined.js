export default function ({$axios,redirect,route}) {
  if(route.path!='/login'){
    return $axios.post('/confined/account/getAccountInfo')
      .catch(err => {
        if(err.response.status=='401'){
          redirect({path:'/login'})
        }
      })
  }
  
}
