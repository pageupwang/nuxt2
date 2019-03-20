<template>
  <div class="banner">
    <div class="broadcast">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in banner" :key='index'>
            <a :href="item.linkUrl" target='_blank'
               :style="{background:'url(' + item.imgUrl + ')center top  no-repeat'}"
               style='display: block;height: 460px;'>
            </a>
          </div>
        </div>
        <div class="pagination"></div>
        <div class="recommend clearfix">
          <div class="goods-city fl">
            <div class="goods" style='background-color: #fff;'>
              <div class="title clearfix">
            <span class='fl'>
              拍品类型
            </span>
                <!--<router-link to='/search' class="fr">-->
                <!--更多-->
                <!--</router-link>-->
              </div>
              <div class="option" style="max-height: 100px;">
                <ul class='clearfix'>
                  <li v-for="(item,index) in sales" :key='index' @click="choseType(item)" style='margin-right: 25px;'>{{item.name}}</li>
                </ul>
              </div>
            </div>
            <div class="goods">
              <div class="title clearfix">
            <span class='fl'>
              标的物所在地
            </span>
                <!--<router-link to='/search' class="fr">-->
                <!--更多-->
                <!--</router-link>-->
              </div>
              <div class="option">
                <ul class='clearfix'>
                  <li v-for="(item,index) in citys" :key='index' @click="choseCity(item)">{{item.name}}</li>
                </ul>
              </div>
            </div>
            <!--<div class="one-money" @click="onePay">-->
              <!--一口价-->
            <!--</div>-->
          </div>
          <div class="little-nav fr">
            <div class="login-info">
            
            </div>
            <div class='join'>
              <div class="user">
                <div class="title" v-if='!user.accountAuthName'>
                  会员登录
                </div>
                <router-link class="title" v-else to='/member' style='display: block;color: #1d4299;'>
                  {{user.accountAuthName}}
                </router-link>
                <div class="operation">
                  <template v-if='!user.accountAuthName'>
                    <router-link to="/login" tag='div' class="btn" style='color: #fff;'>登录</router-link>
                    <router-link to="/login" tag='div' class="btn" style='background-color: #fff;'>注册</router-link>
                  </template>
                  <template v-else>
                    Hi，欢迎回家！
                  </template>
                </div>
              </div>
              <ul>
                <router-link tag='li' to='/member' v-if='user.agencyId' style='margin-top: 0;'>拍卖行加盟入驻</router-link>
                <template v-else>
                  <template v-if='user.accountAuthName'>
                    <router-link tag='li' to='/member/joinMechanism' style='margin-top: 0;' v-if='user.accountAuth'>
                      拍卖行加盟入驻
                    </router-link>
                    <router-link tag='li' to='/member/profile/apply' style='margin-top: 0;' v-if='!user.accountAuth'>拍卖行加盟入驻</router-link>
                  </template>
                  <router-link tag='li' :to='{path:"/login",query:{ isservise : 2 }}' style='margin-top: 0;' v-if='!user.accountAuthName'>
                    拍卖行加盟入驻
                  </router-link>
                </template>
                
                <router-link tag='li' to='/member/profile/apply' v-if='!user.accountAuth'>服务商加盟入驻</router-link>
                <router-link tag='li' :to='{path:"/login",query:{ isservise : 1 }}' v-else-if='!user.accountAuthName'>
                  服务商加盟入驻
                </router-link>
                <router-link tag='li' to='/member' v-else>服务商加盟入驻</router-link>
              </ul>
              <div class="service">
                <h4>客服热线：</h4>
                <h4>400-015-0005</h4>
              </div>
            </div>
            <div class="tab">
              <div class="tab-tit clearfix">
                <div :class="['fl', {'check':tabIndex==0}, 'check-tit']" @click='checkTab(0)'>
                  帮助中心
                </div>
                <div :class="['fr', {'check':tabIndex==1}, 'check-tit']" @click='checkTab(1)'>
                  平台公告
                </div>
              </div>
              <div class="tab-mian" v-if='tabIndex==0'>
                <ul class='clearfix'>
                  <router-link tag='li' :to="{path:item.path,query:{ navid : item.navid,id:item.id }}" v-for="(item,index) in helps" :key='index'
                               :style='{float:index%2==0?"left":"right"}'>
                    {{item.text}}
                  </router-link>
                </ul>
              </div>
              <div class="tab-mian" v-else>
                <ul class='clearfix'>
                  <router-link tag='li'  :to="{path:'/news',query:{ articleTypeId : 10001,id: item.id}}"
                               v-for="(item,index) in announcements" :key='index'
                               style='width: 100%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;border: none'>
                    {{item.title}}
                  </router-link>
                </ul>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    
    </div>
  
  </div>
</template>

<script>
  import {getBanner} from '../../../api/open/attract'
  import {getplatformAnnouncements} from '../../../api/open/help'
  
  import {mapState} from 'vuex'
  
  export default {
    name: "banner",
    props: ["bannerFrame",'helps'],
    components: {},
    data() {
      return {
        banner: [],
        sales: [],
        citys: [],
        // helps: [
        //   {type: '如何参拍', text: '如何参拍', path: '/help/problem',navid:11,id:58},
        //   {type: '保证金支付', text: '保证金支付', path: '/help/problem',navid:13,id:35},
        //   {type: '保证金退回', text: '保证金退回', path: '/help/problem',navid:13,id:37},
        //   {type: '竞价规则', text: '债权交割', path: '/help/problem',navid:11,id:47},
        //   {type: '成交规则', text: '拍卖流程', path: '/help/problem',navid:11,id:58},
        //   {type: '常见问题', text: '拍卖方式', path: '/help/problem',navid:10,id:42},
        // ],
        assets: [],
        tabIndex: 0,
        mySwiper: {},
        titck: '',
        announcements: [],
      }
    },
    methods: {
      //平台公告
      getPlatformAnnouncements() {
        let para = {
          page: 1,
          perPage: 3,
        }
        getplatformAnnouncements(para).then(res => {
          let data = res.data
          if (data.code === '000') {
            this.announcements = data.content.list
          } else {
            this.announcements = []
          }
        }).catch(err => {
          console.log(err);
        })
      },
      //一口价
      onePay() {
        this.$store.commit('changeMode', {id: 'SEALED', name: '一口价暗标'})
        window.sessionStorage.setItem('component','auctionList')
        this.$router.push({path: '/search'})
      },
      checkTab(index) {
        this.tabIndex = index
      },
      //选择城市跳转到搜索
      choseCity(item) {
        this.$store.commit('changeCity', item)
        window.sessionStorage.setItem('component','auctionList')
        this.$router.push({path: '/search'})
      },
      //选择类型跳转到搜索
      choseType(item) {
        this.$store.commit('changeAsset_groups', item)
        window.sessionStorage.setItem('component','auctionList')
        this.$router.push({path: '/search'})
      },
      //获取搜索条件
      getNav() {
        this.citys = this.bannerFrame.activity_cities
        this.sales = this.bannerFrame.asset_groups_names
        
      },
    },
    created() {
      this.getNav()
      this.getPlatformAnnouncements()
    },
    mounted() {
      getBanner(9, 1).then(res => {
        let data = res.data
        if (data.code === '000') {
          this.banner = data.content.list;
          this.$nextTick(function () {
            this.mySwiper = new this.$Swiper('.swiper-container', {
              loop: true,
              autoplay: 3000,
              pagination: '.pagination',
              resizeReInit: true,
              paginationClickable: true,
            });
          })
        } else {
        
        }
      }).catch(err => {
        console.log(err);
      })
    },
    watch: {
      bannerFrame: function () {
        this.citys = this.bannerFrame.activity_cities
        this.sales = this.bannerFrame.asset_groups_names
      },
      banner: function () {
      
      }
    },
    computed: {
      ...mapState({
        user: state => state.user
      }),
    },
    destroyed() {
      this.mySwiper = null
    },
  }

</script>
<style>
  .pagination {
    position: absolute;
    z-index: 20;
    bottom: 10px;
    width: 50%;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .swiper-pagination-switch {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background: #555;
    margin: 0 5px;
    opacity: 0.8;
    cursor: pointer;
  }
  
  .swiper-active-switch {
    background: #b72e29;
  }
</style>
<style scoped lang='scss'>
  $bannerH: 460px;
  .banner {
    position: relative;
    height: $bannerH;
    min-height: $bannerH;
    min-width: 1200px;
    .broadcast {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      .swiper-container {
        height: $bannerH;
        img {
          height: $bannerH;
        }
        .swiper-slide {
          width: 100%;
        }
        .recommend {
          width: 1200px;
          height: 0;
          left: 50%;
          position: absolute;
          top: 0;
          transform: translateX(-50%);
          color: #fff;
          z-index: 9;
          .goods-city {
            position: absolute;
            left: 0;
            width: 200px;
            background-color: #eaeaea;
            height: $bannerH;
            position: relative;
            color: #333;
            .goods {
              padding: 0 20px;
              min-height: 120px;
              .title {
                padding-top: 30px;
                font-weight: 700;
                > .fl {
                  font-size: 14px;
                }
                > .fr {
                  color: #fff;
                  line-height: 29px;
                }
              }
              .option {
                max-height: 245px;
                overflow: hidden;
                li {
                  margin-top: 20px;
                  cursor: pointer;
                  float: left;
                  font-size: 12px;
                  color: #333;
                  width: 33.33%;
                  &:hover {
                    color: #b72e29;
                  }
                }
              }
            }
            .one-money {
              color: #C71623;
              width: 120px;
              height: 30px;
              border-radius: 3px;
              border: 1px solid #C71623;
              text-align: center;
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
              text-align: center;
              line-height: 28px;
              cursor: pointer;
              bottom: 15px;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              font-size: 17px;
            }
          }
          .little-nav {
            position: absolute;
            right: 0;
            top: 20px;
            color: #1D4299;
            width: 214px;
            height: 420px;
            background-color: #f7f7f7;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            .join {
              height: 280px;
              background-color: #fff;
              padding-top:30px;
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
              .user {
                font-size: 16px;
                color: #1d4299;
                text-align: center;
                .title{
                  padding: 0 20px;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
              .operation {
                padding: 20px 0;
                .btn {
                  font-size: 14px;
                  display: inline-block;
                  width: 60px;
                  height: 25px;
                  background: rgba(29, 66, 153, 1);
                  border-radius: 3px;
                  border: 1px solid #1D4299;
                  -webkit-box-sizing: border-box;
                  -moz-box-sizing: border-box;
                  box-sizing: border-box;
                  cursor: pointer;
                }
              }
              li {
                width: 100px;
                height: 24px;
                border: 1px solid rgba(29, 66, 153, 1);
                color: #1d4299;
                border-radius: 3px;
                line-height: 23px;
                margin: 10px auto 0;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                text-align: center;
                cursor: pointer;
                > img {
                  display: inline-block;
                  width: 15px;
                  height: 15px;
                  margin-right: 8px;
                  vertical-align: middle;
                }
              }
            }
            .tab {
              padding: 0 30px;
              padding-top: 20px;
              background-color: #f7f7f7;
              height: 140px;
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
              .tab-tit {
                position: relative;
                cursor: pointer;
                &:before {
                  content: '';
                  display: block;
                  width: 1px;
                  height: 12px;
                  background-color: #b5b5b5;
                  border-radius: 1px;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }
                > .check-tit {
                  color: #1F1F1F;
                  height: 19px;
                  border-radius: 3px;
                  line-height: 19px;
                  text-align: center;
                  font-size: 13px;
                }
                .check {
                  color: #E6053A;
                }
              }
              .tab-mian {
                li {
                  width: 72px;
                  height: 16px;
                  border: 1px solid rgba(67, 67, 67, 1);
                  border-radius: 3px;
                  margin-top: 10px;
                  text-align: center;
                  color: #434343;
                  line-height: 16px;
                  cursor: pointer;
                }
              }
            }
            .service {
              text-align: center;
              margin-top: 20px;
              font-size: 16px;
              > h4 {
                font-size: 14px;
                margin-bottom: 10px;
                font-weight: 400;
              }
            }
          }
        }
      }
    }
    
  }
</style>
