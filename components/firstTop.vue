<template>
  <div id="topBar">
    <topbar></topbar>
  </div>
</template>
<script>
  import topbar from './topbar'

  export default {
    name: "topBar",
    components: {
      topbar,
    },
    data() {
      return {
        prop: false,
        number: 0,
        list: [],
        bars: [
          {name: '帮助中心', path: '/help/service'},
          {name: '新闻中心', path: '/news'},
          {name: '会员中心', path: '/member'},
          {name: '登录注册', path: '/login'},
        ],
        navBtn: [
          {name: '拍卖大厅', path: '/searchs'},
          {name: '我要卖货', path: '/member/myAuction'},
          {name: '处置服务竞价专区', path: '/disposalServices'},
        ],
        username: '测试用户',
        search: '',
        query: '',

      }
    },
    methods: {


    },
    created() {


    },
    computed: {
    },
    watch: {
    },
  }
</script>

<style scoped lang='scss'>

</style>
