<template>
  <div id="app">
    <nuxt/>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
  import footerNav from '../components/footers'
  import {getCity,systemDict} from '../api/common'
  import {getCookie} from '../assets/js/tools'
  export default {
    name: 'App',
    components:{
      footerNav
    },
    mounted(){
      if( !window.sessionStorage.getItem('cityss')){
        this.getcity()
      }
      if( !window.sessionStorage.getItem('dic')){
        this.systemdict()
      }
      let ticket = getCookie('ticket')
      if(ticket){
        this.$store.dispatch('getUser')
      }else{
        this.$store.commit('addUser',{})
      }
    },
    methods:{
      getcity(){
        getCity().then(res => {
          let data = res.data
          if (data.code === '000') {
            window.sessionStorage.setItem('cityss',JSON.stringify(data.content.cities||{}))
          }
        }).catch(err => {
          console.log(err);
        })
      },
      systemdict(){
        systemDict().then(res => {
          let data = res.data
          if (data.code === '000') {
            window.sessionStorage.setItem('dic',JSON.stringify(data.content||{}))
          }
        }).catch(err => {
          console.log(err);
        })
      },
    },
  }
</script>

<style>
  #app{
    max-width: 1920px;
    margin: 0 auto;
  }
</style>
