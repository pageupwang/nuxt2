export default function ({$axios,redirect,route,...con}) {
  if(route.path!='/login'){
    return $axios.post('/confined/account/getAccountInfo')
      .catch(err => {
        if(err.response.status=='401'){
          if(route.path.includes('member')){
            redirect({path:'/login'})
          }
        }
      })
  }

}
