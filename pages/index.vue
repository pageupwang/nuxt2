<template>
  <div id="home">
    <div v-if='flag'>
      <firstTop :agencyInfo='agencyInfo' :agencyCode="agencyCode"></firstTop>
      <div class="main">
        <nuxt-child :agencyInfo='agencyInfo' :agencyCode="agencyCode"></nuxt-child>
      </div>
    </div>
    <noData message='无此机构' v-else></noData>
  </div>
</template>

<script>
  import firstTop from '../components/firstTop'
  import noData from '../components/noData'
  import {getCode} from '../assets/js/config'
  import {get_agency_info} from '../api/common'
  
  export default {
    name: "home",
    components: {
      firstTop,
      noData,
    },
    data() {
      return {
        agencyCode: '',
        agencyInfo: {},
        flag:true,
      }
    },
    methods: {
      getAgencyInfo() {
        let para = {
          agencyCode: this.agencyCode
        }
        get_agency_info(para).then(res => {
          let data = res.data
          if (data.code === '000') {
            this.flag=true
            this.agencyInfo = data.content
            document.getElementsByTagName("title")[0].innerText = data.content.name;
          } else {
            this.flag=false
          }
        }).catch(err => {
          console.log(err);
        })
      },
    },
    mounted() {
      this.agencyCode = getCode()
      if (this.agencyCode) {
        this.getAgencyInfo()
      } else {
        document.getElementsByTagName("title")[0].innerText = '360 拍卖平台';
      }
      
    },
    computed: {
      isMember() {
        return this.$route.path.indexOf('member') > -1;
      },
    },
  }
</script>

<style scoped lang='scss'>
  .main {
    
    /*background: rgb(247, 246, 246);*/
  }
</style>
