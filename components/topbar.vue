<template>
  <div class='top clearfix' :style="{'background':bg?'#d7d6d6':'#f5f5f5'}">
    <div>
      <router-link to='/' class='iHoxzn fl'>360PAI首页</router-link>

      <div class="iTGQtL fr clearfix">
        <div v-for="(item,index) in bars" class='fr'>
          <router-link :to="item.path" :key='index'>{{item.name}}</router-link>
        </div>
        <div class="userInfo " >
          <router-link to="/login" class='username'>
            登录注册
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "topbar",
    props: ['bg'],
    data() {
      return {
        bars: [
          {name: '帮助中心', path: '/help/service'},
          {name: '新闻中心', path: '/news'},
          {name: '个人中心', path: '/member'},
          {name: '我的关注', path: '/member/myCollect'},
        ],
        agencyCode:'',
      }
    },
    methods:{

    },
    created(){
    },
  }
</script>

<style scoped lang='scss'>
  .userInfo1{
    &:hover{
      border-style: solid;
      border-color: rgb(206, 206, 206);
      border-image: initial;
      border-width: 0px 1px;
      background: rgb(255, 255, 255);
      .btn-box{
        display: block;
        button{
          color: #B72E29;
        }
      }
    }
  }
  .userInfo {
    float: right;
    position: relative;
    img{
      vertical-align: middle;
    }
    .btn-box{
      display: none;
      position: absolute;
      top: 30px;
      left: 0;
      min-width: 100%;
      background-color: #fff;
      text-align: right;
      z-index: 9;
      padding: 0 10px;
      li{
        white-space: nowrap;
      }
      button{
        white-space: nowrap;
        vertical-align: baseline;
        user-select: none;
        text-align: center;
        display: inline-block;
        cursor: pointer;
        font-size: 12px;
        color: rgb(51, 51, 51);
        background-color: inherit;
        outline: none;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        border-radius: 0.25rem;
        padding: 5px 10px;

      }
    }

  }

  .top {
    min-width: 1200px;
    color: #999;
    width: 100%;
    line-height: 30px;
    font-size: 12px;
    background: #f5f5f5;
    > div {
      width: 1200px;
      margin: 0 auto;
    }
    .iTGQtL {
      list-style: none;
      a ,span{
        color: #000;
        display: inline-block;
        vertical-align: top;
        padding: 0px 15px;
        cursor: pointer;
      }
    }
  }
</style>
