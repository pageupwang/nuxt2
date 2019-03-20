<template>
  <div id="index">
    <keep-alive>
      <banner :bannerFrame="navList" :helps='helps'></banner>
    </keep-alive>
    <div class="mian">
      <king-kong></king-kong>
      <indexTitle style="margin: 40px 0 21px" title='热门拍品' word='全网联拍' id='title1'></indexTitle>
      <hot-sale :navList="navList"></hot-sale>
    </div>
    <div class="auction">
      <div class="auction-tit">
        <div class="auction-tit-l fl"><indexTitle title='拍卖专场' word='全网联拍' id='title2'></indexTitle></div>
        <div class="auction-tit-r fl" v-if='!agencyCode'>金牌商家</div>
        <div class="auction-tit-r fl" v-else>公司简介</div>
      </div>
      <div class="auction-main" style='background: none;min-height: 516px;'>
        <div class="auction-lf">
          <auctionBanner :session="session"></auctionBanner>
        </div>
        <div class="auction-rg" style='width: 406px;padding-left: 4px;'>
          <advertisement v-if='!agencyCode'></advertisement>
          <router-link v-else to="/companyProfile">
            <img :src="agencyInfo.imageUrl" alt="">
          </router-link>
        </div>
      </div>
      <div class="bank-frame">
        <div class="bank-item">
          <a href="http://www.chamc.com.cn" target='_blank'>
            <img src="../../assets/img/bank1.png" alt="">
          </a>
          
        </div>
        <div class="bank-item">
          <a href="http://www.cinda.com.cn" target='_blank'>
            <img src="../../assets/img/bank2.png" alt="">
          </a>
         
        </div>
        <div class="bank-item">
          <a href="http://www.gwamcc.com" target='_blank'>
            <img src="../../assets/img/bank3.png" alt="">
          </a>
        </div>
        <div class="bank-item" style="margin: 0;">
          <a href="http://www.coamc.com.cn" target='_blank'>
            <img src="../../assets/img/bank4.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="auction-frame frame-center">
      <indexTitle title='拍卖大厅' id='title3'></indexTitle>
      <div class="auction-main" >
        <div class="auction-lf fl">
          <seek :type="1" :navList="navList"></seek>
          <showAdvert :banner="bannerSecond"></showAdvert>
        </div>
        <div class="auction-center fl">
          <auction :navList="navList"></auction>
        </div>
        <div class="auction-rg fl">
          <rank :rankList="aboutRank" title="2"></rank>
        </div>
      </div>
    </div>
    <div class="auction-frame frame-center">
      <indexTitle title='全网招商' id='title4'></indexTitle>
      <div class="auction-main">
        <div class="auction-lf fl">
          <seek :type="2" :navList="navList"></seek>
          <showAdvert :banner="bannerThird"></showAdvert>
        </div>
        <div class="auction-center fl">
          <div class="auction-frame">
            <div class="auction-tit">
              <p :class="{'active':attractChecked==item.id}" v-for="(item,index) in attractTitle" :key='index' @click="attractChange(item.id)" >{{item.hallName}}</p>
            </div>
            <div class="auction-item">
              <indexItem v-for="(item,index) in attractMain" :key='index' :data="item"></indexItem>
            </div>
          </div>
        </div>
        <div class="auction-rg fl">
          <rank :rankList="attractRank" title="1"></rank>
        </div>
      </div>
    </div>
    <div class="service-frame frame-center">
      <indexTitle title='服务招标专区' id='title5'></indexTitle>
      <div class="service-main">
        <div class="service-lf fl">
          <div class="service-img">
            <img src="../../assets/img/service-img.jpg">
            <span>处置服务商投标专区</span>
            <router-link to='/member/applyHandleServer' class="service-btn">服务商加盟入口</router-link>
            <router-link to='/member/lookService' class="service-btn service-blue">我要发布需求</router-link>
          </div>
         
        </div>
        <div class="service-rg fr">
          <service></service>
        </div>
      </div>
    </div>
    <div class="headlines-frame frame-center">
      <indexTitle title='360PAI今日头条' id='title6'></indexTitle>
      <div class="new-main">
        <headLine></headLine>
      </div>
    </div>
    <detailSlide :tabTit='slides'>
      <div slot='code' class='slides'>
        <div class="slides-item slides-code">
          <span style='padding-top: 10px;'>
             <img src="../../assets/img/code.png" alt="公众二维码">
          </span>
          <div class="code">
            <img src="../../assets/img/code.png" alt="公众二维码">
          </div>
        </div>
      </div>
    </detailSlide>
  </div>
</template>

<script>
  import searchItem from '../../components/searchItem'
  import banner from './components/banner'
  import kingKong from './components/kingKong'
  import hotSale from './components/hotSale'
  import indexTitle from './components/indexTitle'
  import auctionBanner from './components/auctionBanner'
  import advertisement from './components/advertisement'
  import rank from './components/rank'
  import auction from './components/auction'
  import service from './components/service'
  import headLine from './components/headLine'
  import showAdvert from './components/showAdvert'
  import indexItem from './components/indexItem'
  import magnifierImg from './components/magnifierImg'
  import seek from './components/seek'
  import detailSlide from '../../components/detailSlide'
  import {rankList,attractMain,getNav,auctionSession,auctionList,getBanner} from '../../api/open/attract'
  import {SetCookie} from "../../assets/js/tools";
  import axios from '../../plugins/axios'
  export default {
    async asyncData () {
      let [navs,sessions]= await Promise.all([
        axios.get(`/rest-web/open/nav`),
        axios.get(`/rest-web/open/album/sticky/list`)
      ])
      //   this.navList = data.content;
      //     this.attractTitle = data.content.enrolling_hall_type;
      //     this.attractChecked = this.attractTitle[0].id;
      //     this.getAttractMain(this.attractChecked);
      // console.log(navs);
      // let navs=data
      return {
        helps: [
          {type: '如何参拍', text: '如何参拍', path: '/help/problem',navid:11,id:58},
          {type: '保证金支付', text: '保证金支付', path: '/help/problem',navid:13,id:35},
          {type: '保证金退回', text: '保证金退回', path: '/help/problem',navid:13,id:37},
          {type: '竞价规则', text: '债权交割', path: '/help/problem',navid:11,id:47},
          {type: '成交规则', text: '拍卖流程', path: '/help/problem',navid:11,id:58},
          {type: '常见问题', text: '拍卖方式', path: '/help/problem',navid:10,id:42},
        ],
        navList:navs.data.content,
        attractTitle:navs.data.content.enrolling_hall_type,
        attractChecked:navs.data.content.enrolling_hall_type[0].id,
        session:sessions.data.content.list,
      }
    },
    name: "index",
    props:['agencyInfo','agencyCode'],
    data() {
      return {
        //预招商
        attractRank:[],
        attractTitle:[],
        attractChecked: "",
        attractMain: [],
        navList:[],
        //拍卖专场
        session : [],
        aboutRank: [],
        bannerSecond: [],
        bannerThird: [],
        slides:[
          {tit: '热门拍品', dom: "title1"},
          {tit: '拍卖专场', dom: "title2"},
          {tit: '拍卖大厅', dom: "title3"},
          {tit: '全网招商', dom: "title4"},
          {tit: '服务招标', dom: "title5"},
          {tit: '今日头条', dom: "title6"},
        ],
      }
    },
    components:{
      searchItem,
      banner,
      kingKong,
      hotSale,
      indexTitle,
      auctionBanner,
      advertisement,
      service,
      headLine,
      rank,
      auction,
      showAdvert,
      indexItem,
      magnifierImg,
      seek,
      detailSlide,
    },
    mounted(){

    },
    methods:{
      // 获取首页数据
      getIndex(){
        getNav().then(res => {
          let data = res.data;
          if (data.code === '000') {
            this.navList = data.content;
            this.attractTitle = data.content.enrolling_hall_type;
            this.attractChecked = this.attractTitle[0].id;
            this.getAttractMain(this.attractChecked);
          } else {

          }
        }).catch(err => {
          console.log(err);
        });
        //拍卖专场
        // auctionSession().then(res => {
        //   let data = res.data;
        //   if (data.code === '000') {
        //     this.session = data.content.list;
        //   } else {
        //
        //   }
        // }).catch(err => {
        //   console.log(err);
        // })
      },
      //预招商tab切换
      attractChange(tabId){
        if(tabId == this.attractChecked){
          return false
        }
        this.attractChecked = tabId;
        this.getAttractMain(this.attractChecked);
      },
      //预招商内容
      getAttractMain(tabId){
        attractMain(tabId).then(res => {
          let data = res.data
          if (data.code === '000') {
            this.attractMain = data.content.homeList;
          } else {

          }
        }).catch(err => {
          console.log(err);
        })
      },


      getAttractRank(){
        //获取拍卖大厅排行
        auctionList().then(res => {
          let data = res.data
          if (data.code === '000') {
            this.aboutRank = data.content.list;
          } else {

          }
        }).catch(err => {
          console.log(err);
        })
        //获取预招商排行榜
        rankList().then(res => {
          let data = res.data
          if (data.code === '000') {
            this.attractRank = data.content.list;
          } else {

          }
        }).catch(err => {
          console.log(err);
        });
        getBanner(2,3).then(res => {
          let data = res.data
          if (data.code === '000') {
            this.bannerSecond = data.content.list;
          } else {

          }
        }).catch(err => {
          console.log(err);
        })
        getBanner(2,4).then(res => {
          let data = res.data
          if (data.code === '000') {
            this.bannerThird = data.content.list;
          } else {

          }
        }).catch(err => {
          console.log(err);
        })
      }
    },
    created(){
      this.getIndex();
      this.getAttractRank();
    },
  }
</script>

<style scoped lang='scss'>
  #index{
    min-width: 1200px;
    .mian{
      width: 1200px;
      margin: 0 auto;
    }
    .auction{
      width: 1200px;
      margin: 0 auto;
      .auction-tit{
        padding: 40px 0 21px;
        overflow: hidden;
        .auction-tit-l{
          width: 790px;
        }
        
        .auction-tit-r{
          width: 410px;
          text-align: center;
          font-size: 33px;
          color: #161616;
        }
      }
      .auction-main{
        overflow: hidden;
        background-color: #fff;
        .auction-lf{
          float: left;
          width: 790px;
        }
        .auction-rg{
          float: left;
          width: 396px;
          padding-left: 14px;
        }
      }
      .bank-frame{
        overflow: hidden;
        .bank-item{
          float: left;
          margin-right: 2px;
          width: 298px;
          background-color: #fff;
          text-align: center;
          >img{
          
          }
        }
      }
    }
    .frame-center{
      width: 1200px;
      margin: 40px auto 0;
    }
    .auction-frame{
      .auction-main{
        margin-top: 20px;
        height: 640px;
        background-color: #fff;
        overflow: hidden;
        .auction-lf{
          width: 240px;
          height: 2px;
        }
        .auction-center{
          padding-left: 10px;
          width: 750px;
          height: 2px;
          .auction-frame{
            .auction-tit{
              padding:0 0 10px 10px;
              overflow: hidden;
              >p{
                float: left;
                height: 56px;
                line-height: 56px;
                font-size: 17px;
                border-bottom: 3px solid transparent;
                text-align: center;
                width: 243.33px;
                cursor: pointer;
              }
              .active{
                color: #d41723;
                border-bottom-color: #d41723;
              }
            }
            .auction-item{
              overflow: hidden;
            }
          }
        }
        .auction-rg{
          width: 200px;
        }
      }
    }
    .omen-frame{

    }
    .service-frame{
      .service-main{
        margin-top: 20px;
        background-color: #fff;
        overflow: hidden;
        .service-lf{
          float: left;
          width: 240px;
          .service-img{
            height: 610px;
            position: relative;
            >img{
              width: 100%;
              height: 100%;
              display: block;
            }
            >span{
              position: absolute;
              top: 0;
              left: 0;
              text-align: center;
              width: 100%;
              height: 49px;
              background-color: rgba(0,0,0,0.7);
              line-height: 49px;
              font-size: 21px;
              color: #fff;
            }
            .service-btn{
              position: absolute;
              text-align: center;
              height: 40px;
              line-height: 40px;
              font-size: 17px;
              color: #fff;
              background-color: rgba(212,23,35,.7);
              margin-top: 5px;
              display: block;
              width: 95%;
              left: 50%;
              transform: translateX(-50%);
              bottom: 52px;
            }
            .service-blue{
              background-color: rgba(29,66,153,.7);
              bottom: 6px;
            }
          }
          
        }
        .service-rg{
          float: left;
          padding-left: 3px;
          width: 957px;
          height: 610px;
          overflow: hidden;
        }
      }
    }
    .headlines-frame{
      .new-main{
        background-color: #fff;
        padding: 0 15px 20px ;
        overflow: hidden;
        margin-top: 20px;
      }
    }
    .slides{
      >.slides-item{
        margin-bottom: 6px;
        position: relative;
        >a,span{
          cursor: pointer;
          display: block;
          width: 50px;
          height: 50px;
          padding: 6px 10px;
          background-color: #fff;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          color: #666;
          font-size: 14px;
          line-height: 1.3;
        }
        .code{
          position: absolute;
          width: 120px;
          height: 120px;
          top: 0;
          left: -130px;
          display: none;
          transform: translateY(-28%);
        }
      }
      .slides-code:hover{
        .code{
          display: block!important;
        }
      }
    }
  }

</style>
