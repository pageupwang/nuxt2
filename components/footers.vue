<template>
  <div id="footers" style='background-color: #f7f6f6; overflow:hidden;width: 100%;'>
    <div class="footer">
      <div class="emrsbG">
        <div class="fzqMdO">
          <div class="hhzdce">
            <p>拍卖学堂</p>
            <a href='javascript:;' v-for="(item,index) in school" :key='index' @click='tosub(item)'>{{item.title}}</a>
          </div>
          <div class="hhzdce">
            <p>竞买人帮助</p>
            <a href='javascript:;' v-for="(item,index) in buyer" :key='index' @click='tosub(item)'>{{item.title}}</a>
          </div>
          <div class="hhzdce">
            <p>支付帮助</p>
            <a href='javascript:;' v-for="(item,index) in pay" :key='index' @click='tosub(item)'>{{item.title}}</a>
          </div>
        </div>
      </div>
      <div class="isoqnl">
        <router-link v-for="(item,index) in abouts" :key='index' :to="item.path" target="_blank">
          {{item.text}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "footers",
    data() {
      return {
        abouts: [
          {text: '关于我们', path: '/about'},
          {text: '新闻中心', path: '/news'},
          {text: '联系我们', path: '/help/service'},
          {text: '帮助中心', path: '/help'}
        ],
      }
    },
    methods: {
      tosub(item) {
        this.$router.push({path: '/help/problem'})
      },

    },
    computed: {
      ...mapState({
        school: state => state.public.school,
        pay: state => state.public.pay,
        buyer: state => state.public.buyer,
      }),
    },
  }
</script>

<style scoped lang='scss'>
  .footer {
    position: relative;
    bottom: 0px;
    right: 0px;
    left: 0px;
    margin-top: 42px;
    min-width: 1200px;
    padding: 0px calc(50% - 600px);
    background: #fff;
    .kebhIg {
      height: 86px;
      width: 1200px;
      display: flex;
      justify-content: space-around;
      padding: 52px 0;
      a {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        img {
          margin-right: 15px;
          height: auto;
          width: 56px;
        }
        div h3 {
          font-size: 24px;
          font-weight: bold;
        }
        div p {
          font-size: 14px;
          color: rgb(102, 102, 102);
        }
      }
      :first-child img {
        width: 86px;
      }
    }
    .emrsbG {
      display: flex;
      padding-bottom: 35px;
      .fzqMdO {
        width: 700px;
        display: flex;
        align-items: flex-start;
        .hhzdce {
          display: flex;
          flex-direction: column;
          padding-left: 20px;
          border-left: 1px solid rgb(221, 221, 221);
          flex: 1 1 0%;
          p {
            font-size: 18px;
            font-weight: bold;
            color: rgb(51, 51, 51);
            margin-bottom: 22px;
          }
          a {
            font-size: 14px;
            line-height: 2;
            color: rgb(51, 51, 51);
          }
        }
        .hhzdce:first-child {
          border-left: 0px;
        }
      }
      .service {
        flex: 1 1 0%;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0px 50px 0px 14px;
        .djzowy {
          font-size: 12px;
          color: rgb(153, 153, 153);
          padding-left: 20px;
          margin-left: 20px;
          border-left: 1px solid rgb(221, 221, 221);
          div {
            display: flex;
            align-items: flex-start;
            img {
              width: 17px;
              margin-right: 20px;
            }
            span {
              line-height: 1;
              display: block;
              margin-bottom: 9px;
            }
          }
        }
        .grnhua {
          font-size: 12px;
          color: rgb(153, 153, 153);
          text-align: center;
          img {
            width: 120px;
          }
        }
      }

    }
    .isoqnl {
      text-align: center;
      border-width: 1px 0px;
      border-style: solid;
      border-color: rgb(221, 221, 221);
      padding: 12px 0px;
      a {
        color: rgb(102, 102, 102);
        font-size: 12px;
        margin: 0px 10px;
      }
    }
    .dzumdr {
      text-align: center;
      font-size: 12px;
      color: rgb(153, 153, 153);
      padding: 20px 0px 0px;
      a {
        color: rgb(153, 153, 153);
        margin: 0px 5px;
        img {
          display: inline;
          width: 20px;
          vertical-align: middle;
        }
      }
    }
    .zhizhao {
      text-align: center;
      font-size: 12px;
      overflow: hidden;
      padding: 12px;
      a {
        color: #999;
      }
      .line {
        width: 1px;
        height: 13px;
        background-color: #999;
        display: inline-block;
        margin: 0 20px;
        margin-top: 2px;
        vertical-align: middle;
      }
    }
  }
</style>
