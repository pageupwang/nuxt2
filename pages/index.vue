<template>
  <div class='index'>
    <banner :announcements='announcements' :banner='banner'/>
    <div class="mian">
      <kingKong/>
      <indexTitle style="margin: 40px 0 21px" title='热门资产' word='全网联拍' id='title1'></indexTitle>
      <hotSale :mainList.sync='mainList' :attractChecked.sync='attractChecked'/>
    </div>
    <div class="auction">
      <div class="auction-tit">
        <div class="auction-tit-l fl">
          <indexTitle title='资产专场' word='全网联拍' id='title2'></indexTitle>
        </div>
        <div class="auction-tit-r fl" style='position: relative;' v-if='!agencyCode'>360PAI智能产品中心
        </div>
        <div class="auction-tit-r fl" v-else>公司简介</div>
      </div>
      <div class="auction-main clearfix" style='background: none;min-height: 516px;'>
        <div class="auction-lf" style="width: 790px;min-height: 1px">
          <auctionBanner :session="session"></auctionBanner>
        </div>
        <div class="auction-rg" style='width: 406px;padding-left: 4px;'>
          <exercise v-if='!agencyCode'></exercise>
          <nuxt-link v-else to="/about">
            <img :src="agencyInfo.imageUrl" alt="">
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="auction-frame frame-center" v-if="attractMain&&attractMain.length>0">
      <indexTitle title='全网招商' id='title4'></indexTitle>
      <div class="auction-main clearfix">
        <div class="auction-lf fl">
          <seek :type="2" :nav="nav"></seek>
          <!--<showAdvert :banner="bannerThird"></showAdvert>-->
        </div>
        <div class="auction-center fl">
          <nuxt-link to='/merchant' style='color: #999;font-size: 16px;position: absolute;right: 5px;top: -40px;'>
            更多>
          </nuxt-link>
          <div class="auction-frame">
            <div class="auction-tit" style="display: none">
              <p :class="{'active':attractChecked==item.id}" v-for="(item,index) in nav.enrolling_hall_type"
                 :key='index'
                 @click="attractChange(item.id)">{{item.hallName}}</p>
            </div>
            <div class="auction-item">
              <indexItem v-for="(item,index) in attractMain" :key='index' :data="item"></indexItem>
            </div>
          </div>
        </div>
        <!--<div class="auction-rg fl">-->
        <!--<rank :rankList="attractRank" title="1"></rank>-->
        <!--</div>-->
      </div>
    </div>
  </div>

</template>

<script>

  import banner from './index/components/banner'
  import kingKong from './index/components/kingKong'
  import indexTitle from './index/components/indexTitle'
  import hotSale from './index/components/hotSale'
  import auctionBanner from './index/components/auctionBanner'
  import indexItem from './index/components/indexItem'
  import seek from './index/components/seek'
  import exercise from './exercise/exercise'
  import {moneySend, moneySendt} from '../assets/js/commom'
  import {mapState} from 'vuex'
  
  function formatMainList(mainList) {
    let arr = mainList
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].activityType === 'enrolling') {
        if (arr[i].category === '1') {
          arr[i].finalName = '保证金';
          arr[i].price = moneySendt(arr[i].deposit);
          arr[i].finalPrice = moneySend(arr[i].deposit);
        } else {
          if (arr[i].category === '2') {
            arr[i].finalName = '债权本金';
          } else {
            arr[i].finalName = '市场参考价';
          }
          arr[i].price = moneySendt(arr[i].refPrice);
          arr[i].finalPrice = moneySend(arr[i].refPrice);
        }
      } else {
        arr[i].price = moneySendt(arr[i].startingPrice);
        arr[i].finalName = '起拍价';
        arr[i].finalPrice = moneySend(arr[i].startingPrice);
      }
    }
    return arr
  }
  
  function formatHomeList(homeList) {
    let arr = homeList
    for (let i = 0; i < arr.length; i++) {
      arr[i].price = moneySendt(arr[i].deposit);
      arr[i].startingPrice = moneySend(arr[i].deposit);
      arr[i].beginAt = arr[i].beginAt.split(' ')[0];
      arr[i].endAt = arr[i].endAt.split(' ')[0];
      arr[i].createdAt = arr[i].createdAt.split(' ')[0];
    }
    return arr
  }
  
  export default {
    components: {
      banner,
      kingKong,
      indexTitle,
      hotSale,
      auctionBanner,
      exercise,
      seek,
      indexItem,
    },
    async asyncData({store,$axios}) {
      let nav = store.state.public.nav
      let attractChecked = nav.asset_property_names && nav.asset_property_names[0].id;
      let attractId = nav.enrolling_hall_type && nav.enrolling_hall_type[0].id
      
      const [announcements, banner, mainList, session, attractMain] = await Promise.all([
        $axios.get('/open/platform_announcements'),
        $axios.get('/open/banners/list?page=1&perPage=9&type=1'),
        $axios.post('/open/assetProperty/search', {'assetPropertyId': attractChecked}),
        $axios.get('/open/album/sticky/list'),
        $axios.get('/open/assetHall/enrolling_activity_list?hallId=' + attractId),
      ])
      return {
        announcements: announcements.data.content.list,
        banner: banner.data.content.list,
        mainList: formatMainList(mainList.data.content.list),
        attractChecked: attractChecked,
        session: session.data.content.list,
        attractMain: formatHomeList(attractMain.data.content.homeList),
        attractId: attractId,
      }
    },
    methods: {
      attractChange(tabId) {
        if (tabId == this.attractId) {
          return false
        }
        this.attractId = tabId;
        this.getAttractMain(this.attractId);
      },
      getAttractMain(attractId) {
        this.$axios.get('/open/assetHall/enrolling_activity_list?hallId=' + attractId)
          .then(res => {
            let data = res.data
            if (data.code === '000') {
              let arr = data.content.homeList;
              this.attractMain = formatHomeList(arr);
            } else {
            
            }
          })
      },
    },
    computed: {
      ...mapState({
        agencyCode: state => state.user.agencyCode,
        nav: state => state.public.nav,
      })
    },
    
  }
</script>

<style lang='scss'>
  .index {
    min-width: 1200px;
    .mian {
      width: 1200px;
      margin: 0 auto;
    }
    .auction {
      width: 1200px;
      margin: 0 auto;
      .auction-tit {
        padding: 40px 0 21px;
        overflow: hidden;
        .auction-tit-l {
          width: 790px;
        }
        
        .auction-tit-r {
          width: 410px;
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          color: #161616;
          line-height: 50px;
        }
      }
      .auction-main {
        background-color: #fff;
        .auction-lf {
          float: left;
          width: 790px;
        }
        .auction-rg {
          float: left;
          width: 396px;
          padding-left: 14px;
        }
      }
      .bank-frame {
        overflow: hidden;
        .bank-item {
          float: left;
          margin-right: 2px;
          width: 298px;
          background-color: #fff;
          text-align: center;
          > img {
          
          }
        }
      }
    }
    .frame-center {
      width: 1200px;
      margin: 40px auto 0;
    }
    .auction-frame {
      .auction-main {
        margin-top: 20px;
        background-color: #fff;
        .auction-lf {
          width: 240px;
        }
        .auction-center {
          position: relative;
          padding-left: 10px;
          width: 950px;
          .auction-frame {
            .auction-tit {
              padding: 0 0 10px 10px;
              overflow: hidden;
              > p {
                float: left;
                height: 56px;
                line-height: 56px;
                font-size: 17px;
                border-bottom: 3px solid transparent;
                text-align: center;
                width: 243.33px;
                cursor: pointer;
              }
              .active {
                color: #b72e29;
                border-bottom-color: #b72e29;
              }
            }
            .auction-item {
              overflow: hidden;
            }
          }
        }
        .auction-rg {
          width: 200px;
        }
      }
    }
  }
</style>
