<template>
  <div class='top clearfix' :style="{'background':bg?'#d7d6d6':'#f5f5f5'}">
    <div>
      <router-link to='/' class='iHoxzn fl' v-if='!agencyCode'>360PAI首页</router-link>
      <div class="iTGQtL fr clearfix">
        <div v-for="(item,index) in bars" class='fr'>
          <router-link :to="item.path" :key='index' v-if="!item.blank&&!item.islogin">{{item.name}}</router-link>
        </div>
        <div class='fr'>
          <template v-if='!agencyCode'>
            <span  @click='tojigou' v-if="user.agencyId">机构登录</span>
          </template>
        </div>
        <div class="userInfo userInfo1" v-if='accountAuthName'>
          <router-link to="/member"  class='username '>{{accountAuthName}}
            <img src="../assets/img/down.png"alt="">
          </router-link>
          <div class='btn-box'>
            <div>
              <ul>
                <template v-for="(item,index) in user.accountList">
                  <li v-if='!item.default'><i>{{item.name}} </i> <button @click='useChange(item.partyId)'>切换</button></li>
                </template>
              </ul>
            </div>
            <button class="sc-iwsKbI cORWOV" @click='layout'>退出</button>
          </div>
        </div>
        <div class="userInfo " v-else>
          <router-link to="/login" class='username'>
            登录注册
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {layOut} from '../api/common'
  import {getCode,toPartner,deleteMainCookie} from '../assets/js/config'
  import {changeRole} from '../api/confined/member'
  import {mapState} from 'vuex'
  export default {
    name: "topbar",
    props: ['bg'],
    data() {
      return {
        bars: [
          {name: '帮助中心', path: '/help/service'},
          {name: '新闻中心', path: '/news'},
          {name: '会员中心', path: '/member'},
          {name: '我的关注', path: '/myCollect'},
        ],
        agencyCode:'',
      }
    },
    methods:{
      useChange(partyId){
        let that = this
        let confirm = this.$confirm({
          title: '提示',
          text: '是否确认切换',
          dangerouslyUseHTMLString: false,
          button:
            {
              text: '确定',
              ontap: function () {
                confirm.close().then(function (res) {
                  that.changeUser(partyId);
                });
              }
            },
        })
      },
      changeUser(partyId){
        let para = {
          partyId:partyId
        }
        changeRole(para).then(res => {
          let data = res.data
          if (data.code === '000') {
            this.$store.dispatch('getUser',true);
          } else {
            // this.$dialog.alert(data.desc)
          }
        }).catch(err => {
          console.log(err);
        })
      },
      tojigou(){
        toPartner(true)
      },
      layout(){
        layOut().then(res => {
        }).catch(err => {
          console.log(err);
        }).finally(res=>{
          deleteMainCookie()
          this.$router.push({path: '/login' })
        })
      },
    },
    mounted(){
      this.agencyCode=getCode()
    },
    computed: {
      ...mapState({
        accountAuthName:state=>state.user.accountAuthName,
        user:state=>state.user
      })
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
