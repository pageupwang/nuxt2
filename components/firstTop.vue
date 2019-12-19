<template>
  <div id="topBar">
    <topbar></topbar>
    <div class='advertisement'>
    </div>
    <div class="search clearfix" v-if='!agencyCode'>
      <router-link to='/' class='logo fl'>
        <img src="../assets/img/logo.png" alt="">
      </router-link>
      <div class="operation fl">
        <div class="input clearfix">
          <input type="text" class=" fl" :value="query" @input='inputs'>
          <div class="search-btn fr" @click='searchquery' v-if='$route.path=="/search"'><img
            src="../assets/img/icon/search-icon.png" alt=""></div>
          <div class="search-btn fr" @click='toSearch' v-else><img src="../assets/img/icon/search-icon.png" alt="">
          </div>
        </div>
      </div>
      <a class="follow fr" href='javascript:;' style='cursor: pointer;' @click='checkCanUploadtype'>
        我要卖货
      </a>
   
    </div>
    <div v-else class="search clearfix">
      <router-link to='/' class='logo fl' style='width: 60px;height: 60px;'>
        <img :src="agencyInfo.logoUrl" alt="" style="height: 100%;">
      </router-link>
      <div class='company-name fl'>
        {{agencyInfo.name}}
      </div>
      <div class="fl" style='line-height: 60px;margin-left: 12px;'>
        <img src="../assets/img/compony-tip.png" alt="" style='vertical-align: middle;'>
      </div>
      
      <div class="operation fl" style='margin-top: 15px;'>
        <div class="input clearfix" id='search'>
          <input type="text" class=" fl" :value="query" @input='inputs' style='width: 360px;'>
          <div class="search-btn fr" @click='searchquery' v-if='$route.path=="/search"'><img
            src="../assets/img/icon/search-icon.png" alt=""></div>
          <div class="search-btn fr" @click='toSearch' v-else><img src="../assets/img/icon/search-icon.png" alt="">
          </div>
        </div>
      </div>
      <router-link tag='div' class="follow fr" to="/member/myAuction" style='cursor: pointer;margin-top: 16px;'>
        我要卖货
      </router-link>
    </div>
    <div class="nav clearfix" v-if="!($route.path.indexOf('help')>-1)">
      <div class="navbar fl">
        <router-link to="/" :class="{'home-link':true,'active':$route.path=='/'||$route.path=='/index'}">
          <template v-if='!agencyCode'>
            360PAI 首页
          </template>
          <template v-else>
            首页
          </template>
        </router-link>
        <span :class="{'home-link':true,'active':$route.path=='/leaseList'}" @click='torelease'>
        租赁权拍卖
        <img src="/static/img/member/HOT.png" alt="" class='icon'>
        </span>
        <span :class="{'home-link':true,'active':$route.path=='/leaseMerchant'}" @click='toleaseMerchant'>
        租赁权招商
        </span>
        <span :class="{'home-link':true,'active':$route.path=='/searchs'&&!id}" @click='tohall'>拍卖大厅</span>
        <router-link to='/merchant' :class="{'home-link':true,'active':$route.path=='/merchant'}">
          转让大厅
        </router-link>
        <router-link to='/disposalServices' :class="{'home-link':true,'active':$route.path=='/disposalServices'}">
          360PAI服务商
        
        </router-link>
        <router-link to='/mechanismList' :class="{'home-link':true,'active':$route.path=='/mechanismList'}">
          360PAI联拍机构
        </router-link>
      </div>
    
    </div>
    <modalBox :modalFlag="prop" @close='close' title='选择委托人'>
      <div class="form-item">
        <span>委托人</span>
        <select class="select-frame" v-model="number">
          <option v-for="(item,index) in list" :value="item.id" :key='index'>{{item.name}}</option>
        </select>
      </div>
      <div class="operations">
        <div class="btn" @click="submitMain">确认</div>
      </div>
    </modalBox>
  </div>
</template>
<script>
  import topbar from './topbar'
  import modalBox from './modalBox'
  import {mapState} from 'vuex'

  
  export default {
    name: "topBar",
    components: {
      topbar,
      modalBox,
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
      
      
      //判断能否上传拍品
      checkCanUploadtype() {
        this.$router.push({path: '/member/myAuction'})
      },
      
      submitMain() {
        this.prop = false
        this.$router.push({path: '/member/myAuction', query: {spvId: this.number}})
      },
      close() {
        this.prop = false;
      },
      tohall() {
        this.$router.push({path: '/searchs'})
        this.$store.commit('resetSearch')
      },
      
      inputs(e) {
        this.search = e.target.value
      },
      searchquery() {
        this.$router.push({path: '/search', query: {query: this.search}})
        // this.$store.commit('inputSeach',this.search )
      },
      toSearch() {
        this.$router.push({path: '/search', query: {query: this.search}})
      },
      torelease() {
        this.$store.commit('resetSearch')
        this.$store.commit('changeAsset_groups', {id: "-1", name: "租赁权拍卖"})
        this.$router.push({path: '/leaseList'})
      },
      toleaseMerchant(){
        this.$store.commit('resetMerchant')
        this.$router.push({path: '/leaseMerchant'})
      },
      
    },
    created() {
      this.query = this.$route.query.query || ''

    },
    computed: {
      isMember() {
        return this.$route.path.indexOf('member') > -1;
      },
      ...mapState({
        id: state => state.search.asset_party_category.id,
        category_group_id: state => state.search.category_group_id.id,
        agencyCode: state => state.agencyCode,
        agencyInfo: state => state.agencyInfo,
        
      }),
    },
    watch: {
     
      $route: function () {
        this.query = this.$route.query.query || ''
      }
    },
  }
</script>

<style scoped lang='scss'>
  @import '../assets/css/$var';
  
  .form-item {
    /*margin-bottom: 17px;*/
    padding-top: 30px;
    span {
      vertical-align: top;
      display: inline-block;
      width: 7em;
      text-align: right;
      margin-right: 38px;
    }
  }
  
  .select-frame {
    width: 226px;
    height: 28px;
    background: #f4f4f4;
    border-radius: 3px;
    display: inline-block;
    color: #666;
    padding-left: 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  
  .operations {
    text-align: center;
    padding: 40px 0 20px;
  }
  
  .btn {
    display: inline-block;
    line-height: 40px;
    height: 40px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    width: 105px;
    background-color: #b72e29;
    border-radius: 3px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  #topBar {
    background-color: #f5f5f5;
    
  }
  
  .advertisement {
    width: 100%;
    height: 78px;
    background: url("../assets/img/advertisement.jpg") center top no-repeat;
  }
  
  .userInfo {
    position: relative;
    cursor: pointer;
    .username {
      vertical-align: middle;
      font-weight: 700;
      position: relative;
      padding-right: 20px;
      img {
        width: 14px;
        height: 14px;
        display: inline-block;
        vertical-align: middle;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
      }
    }
    .iabACn {
      min-width: 100px;
      z-index: 2;
      display: none;
      position: absolute;
      left: -1px;
      list-style: none;
      background: rgb(255, 255, 255);
      padding: 4px;
      border-width: 0px 1px 1px;
      border-style: solid solid solid;
      border-color: rgb(206, 206, 206) rgb(206, 206, 206) rgb(206, 206, 206);
      border-image: initial;
      border-top: 0px;
      .cORWOV {
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        text-align: center;
        display: inline-block;
        cursor: pointer;
        font-size: 0.875rem;
        color: rgb(51, 51, 51);
        background-color: inherit;
        outline: none;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        border-radius: 0.25rem;
        padding: 0.25rem 0.5rem;
      }
      .fqxKSQ {
        width: 200px;
        margin: 0px;
        border-bottom: 1px solid rgb(238, 238, 238);
        padding: 0.25rem 0.5rem;
        > span:first-child {
          width: calc(100% - 40px);
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        > span:nth-child(2) {
          width: 30px;
          cursor: pointer;
          float: right;
        }
        > span {
          display: inline-block;
          line-height: 24px;
        }
        .cMCsEP {
          color: rgb(102, 102, 102);
          font-weight: bolder;
        }
        .cORWOV {
          white-space: nowrap;
          vertical-align: middle;
          user-select: none;
          text-align: center;
          display: inline-block;
          cursor: pointer;
          font-size: 0.875rem;
          color: rgb(51, 51, 51);
          background-color: inherit;
          outline: none;
          border-width: initial;
          border-style: none;
          border-color: initial;
          border-image: initial;
          border-radius: 0.25rem;
          padding: 0.25rem 0.5rem;
        }
      }
    }
    &:hover {
      background-color: #fff;
      .username {
        color: rgb(183, 46, 41);
      }
      .iabACn {
        display: block;
      }
      .fqxKSQ:hover {
        > span:nth-child(2) {
          color: rgb(183, 46, 41);
        }
      }
    }
  }
  
  .search {
    padding-top: 26px;
    width: 1200px;
    margin: 0 auto;
    position: relative;
    .logo {
      width: 301px;
      img {
        width: 100%;
        vertical-align: top;
      }
    }
    .company-name {
      color: #333333;
      font-size: 28px;
      line-height: 60px;
      margin-left: 15px;
    }
    .operation {
      margin-top: 4px;
      margin-left: 45px;
      .input {
        width: 670px;
        height: 34px;
        position: relative;
        > input {
          display: inline-block;
          width: 630px;
          line-height: 34px;
          height: 34px;
          font-size: 20px;
          border: solid 1px #000000;
          border-radius: 3px 0 0 3px;
          border-right: none;
          background: #f5f5f5;
        }
        .search-btn {
          cursor: pointer;
          position: absolute;
          top: 0;
          right: 1px;
          width: 50px;
          height: 36px;
          background-color: #b72e29;
          border-radius: 3px;
          text-align: center;
          img {
            display: inline-block;
            width: 22px;
            height: 22px;
            vertical-align: middle;
            margin-top: 7px;
          }
        }
      }
      
    }
    .follow {
      margin-top: 4px;
      width: 160px;
      height: 36px;
      background-color: #fff;
      border-radius: 3px;
      font-size: 20px;
      border: 1px solid #ccc;
      border-radius: 3px;
      color: #333;
      text-align: center;
      line-height: 36px;
      margin-left: 20px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      font-family: 'Microsoft YaHei UI Light';
    }
    .myCollect {
      position: absolute;
      right: 0;
      bottom: -74px;
    }
  }
  
  .nav {
    width: 1200px;
    font-size: 21px;
    margin: 0 auto;
    padding: 29px 0 18px;
    .detail-logo {
      margin-right: 60px;
      img {
        vertical-align: -55%;
      }
    }
    .navbar {
      .home-link {
        cursor: pointer;
        text-align: center;
        display: inline-block;
        font-size: 20px;
        font-family: 'Microsoft YaHei UI Light';
        margin-right: 33px;
        color: #333;
        position: relative;
        &.active {
          color: $red;
        }
        &:last-child {
          margin-right: 0;
        }
        .icon {
          position: absolute;
          right: -25px;
          top: -10px;
        }
      }
    }
    .nav-btn {
      .btn {
        display: inline-block;
        padding: 0 15px;
        height: 40px;
        background-color: #1d4299;
        border-radius: 3px;
        font-size: 16px;
        color: #fff;
        text-align: center;
        line-height: 40px;
        margin-left: 20px;
      }
    }
  }

</style>
