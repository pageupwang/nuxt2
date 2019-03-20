<template>
  <div id="footers" style='background-color: #f7f6f6; overflow:hidden;'>
    <div class="footer">
      <div class="kebhIg">
        <router-link v-for="(item,index) in helps" :key='index' :to="item.path" target="_blank">
          <img :src="item.img" alt="">
          <div>
            <h3>{{item.name}}</h3>
            <p>{{item.text}}</p>
          </div>
        </router-link>
      </div>
      <div class="emrsbG">
        <div class="fzqMdO">
          <div class="hhzdce">
            <p>拍卖学堂</p>
            <a href='javascript:;' v-for="(item,index) in school" :key='index' @click='tosub(item)'>{{item.title}}</a>
          </div>
          <div class="hhzdce">
            <p>竞买人帮助</p>
            <a href='javascript:;'  v-for="(item,index) in buyer" :key='index' @click='tosub(item)'>{{item.title}}</a>
          </div>
          <div class="hhzdce">
            <p>支付帮助</p>
            <a href='javascript:;'  v-for="(item,index) in pay" :key='index' @click='tosub(item)'>{{item.title}}</a>
          </div>
        </div>
        <div class="service">
          <div class="djzowy">
            <div>
              <img src="../assets/img/tel.png" alt="">
              <p>
                <span>客服电话</span>
                <span style="color: rgb(23,48,101);font-size: 25px;">400-015-0005</span>
              </p>
            </div>
            <div>
              <img src="../assets/img/cooperation.png" alt="">
              <p>
                <span>业务合作</span>
                <span>021-3388-5987</span>
              </p>
            </div>
          </div>
          <div class="grnhua">
            <img src="../assets/img/code.png" alt="公众二维码">
            <p>扫码关注</p>
            <p>360PAI公众号</p>
          </div>
        </div>
      </div>
      <div class="isoqnl">
        <router-link v-for="(item,index) in abouts" :key='index' :to="item.path" target="_blank">
          {{item.text}}</router-link>
      </div>
      <div class="dzumdr">
        <router-link to="/privacy" target="_blank">用户协议</router-link>
        <router-link to="/conceal" target="_blank">隐私协议</router-link>
        <span>©2018 360pPAI.COM.All rights reserved.</span>
        <a href="https://www.miibeian.gov.cn/" target="_blank">沪ICP备18016056号-1</a>
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202007656" target="_blank">
          <img src="https://oeqbkxgti.qnssl.com/FinEALw7ifYIV2baxOAzDe1ctz1S.png" alt="">
          沪公网安备 31011202007656号
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import {indexHelp} from '../api/open/indexApi'
  export default {
    name: "footers",
    data(){
      return {
        helps:[
          {name:'全网联拍',path:'/help/joint',img:require('../assets/img/qwlp.png'),text:'海量资产 · 同步竞价 · 全网联动'},
          {name:'支付安全',path:'/help/payment',img:require('../assets/img/safe.png'),text:'央行监管 · 资金安全'},
          {name:'合同安全',path:'/help/signature',img:require('../assets/img/hetong.png'),text:'签约高效 · 实名认证 · 合法合规'}
        ],
        abouts:[
          {text:'关于我们',path:'/about'},
          {text:'新闻中心',path:'/news'},
          {text:'联系我们',path:'/help/service'},
          {text:'帮助中心',path:'/help'}
        ],
        school:[],
        buyer:[],
        pay:[],
      }
    },
    methods:{
      tosub(item){
        this.$store.commit('setProblemNavid',item.categoryId)
        this.$store.commit('setProblemId',item.id)
        this.$router.push({path: '/help/problem' })
      },
      //拍卖学堂
      getindexHelp(id,name){
        indexHelp(id).then(res => {
          let data = res.data
          if (data.code === '000') {
            this[name]=data.content.list
          } else {

          }
        }).catch(err => {
          console.log(err);
        })
      },
    },
    created(){
      this.getindexHelp(11,'buyer')
      this.getindexHelp(10,'school')
      this.getindexHelp(13,'pay')
    },
  }
</script>

<style  scoped lang='scss'>
  .footer{
    position: relative;
    bottom: 0px;
    right: 0px;
    left: 0px;
    margin-top: 42px;
    min-width: 1200px;
    padding: 0px calc(50% - 600px);
    background: #fff;
    .kebhIg{
      height: 86px;
      width: 1200px;
      display: flex;
      justify-content:space-around;
      padding: 52px 0;
      a{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        img{
          margin-right: 15px;
          height: auto;
          width: 56px;
        }
        div h3{
          font-size: 24px;
          font-weight: bold;
        }
        div p{
          font-size: 14px;
          color: rgb(102, 102, 102);
        }
      }
      :first-child img{
        width: 86px;
      }
    }
    .emrsbG{
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
          div{
            display: flex;
            align-items: flex-start;
            img{
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
        .grnhua{
          font-size: 12px;
          color: rgb(153, 153, 153);
          text-align: center;
          img{
            width: 120px;
          }
        }
      }

    }
    .isoqnl{
      text-align: center;
      border-width: 1px 0px;
      border-style: solid;
      border-color: rgb(221, 221, 221);
      padding: 12px 0px;
      a{
        color: rgb(102, 102, 102);
        font-size: 12px;
        margin: 0px 10px;
      }
    }
    .dzumdr{
      text-align: center;
      font-size: 12px;
      color: rgb(153, 153, 153);
      padding: 20px 0px;
      a{
        color: rgb(153, 153, 153);
        margin: 0px 5px;
        img{
          display: inline;
          width: 20px;
          vertical-align: middle;
        }
      }
    }
  }
</style>
