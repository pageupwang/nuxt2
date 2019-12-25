<template>
  <div class="hotSale">
    <div class="hotSale-tit">
      <div class="btn-lf" @click="btnLeft" v-if="page > 1"><</div>
      <div class="btn-rg" @click="btnRight" v-if="page < pageList">></div>
      <div class="hotSale-frame" :style="{width:frameWidth+'px',left: -moveWidth*(page-1)+'px'}">
        <p class="tit-item" :class="{'tit-active':attractChecked==item.id}" v-for="(item,index) in nav.asset_property_names" :key='index' @click="getMain(item.id)">{{item.name}}</p>
      </div>
    </div>
    <div class="hot-frame clearfix">
      <hotData v-for="(item,index) in mainList" :key='index' :data="item"></hotData>
    </div>
  </div>
</template>

<script>
  import hotData from './hotSale/hotData'
  // import {hotSearch} from '../../../api/open/attract'
  import request from '~/plugins/axios'
  import {mapState} from 'vuex'
  import {moneySend,moneySendt} from '../../../assets/js/commom'
  export default {
    name: "hotSale",
    props:{
      mainList:{
        type:Array,
        default:function () {
          return []
        }
      },
      attractChecked:{
        type:[String,Number],
        default:0
      },
    },
    
    components:{
      hotData
    },
    data() {
      return {


        frameWidth: "",
        moveWidth: 1200,
        page: 1,
        pageList: 1,
      }
    },
    methods:{
      getTitle(){
        if(this.nav.asset_property_names){
          this.pageList = Math.ceil(this.nav.asset_property_names.length/5);
          this.frameWidth = this.pageList*1201;
        }
      },
      hotSearch(id){
        return request.post('/open/assetProperty/search',{'assetPropertyId':id})
      },
      getMain(id){
        this.hotSearch(id).then(res => {
          let data = res.data;
          if (data.code === '000') {
            this.$emit('update:attractChecked',id)
            let arr = data.content.list;
            for(let i=0;i<arr.length;i++){
              if(arr[i].activityType === 'enrolling'){
                if(arr[i].category === '1'){
                  arr[i].finalName = '保证金';
                  arr[i].price = moneySendt(arr[i].deposit);
                  arr[i].finalPrice = moneySend(arr[i].deposit);
                }else{
                  if(arr[i].category === '2'){
                    arr[i].finalName = '债权本金';
                  }else{
                    arr[i].finalName = '市场参考价';
                  }
                  arr[i].price = moneySendt(arr[i].refPrice);
                  arr[i].finalPrice = moneySend(arr[i].refPrice);
                }
              }else{
                arr[i].price = moneySendt(arr[i].startingPrice);
                arr[i].finalName = '起拍价';
                arr[i].finalPrice = moneySend(arr[i].startingPrice);
              }
            }
            this.$emit('update:mainList',arr)
          } else {

          }
        }).catch(err => {
          console.log(err);
        })
      },
      btnLeft(){
        this.page--;
        if(this.page<=1){
          this.page = 1;
        }
      },
      btnRight(){
        this.page++
        if(this.page>=this.pageList){
          this.page = this.pageList;
        }
      },
    },
    created(){
      this.getTitle();
    },
    computed: {
      ...mapState({
        nav:state=>state.public.nav,
      })
    },
  }
</script>

<style scoped lang='scss'>
    .hotSale{
      .hotSale-tit{
        width: 1200px;
        overflow: hidden;
        position: relative;
        height: 61px;
        .btn-lf,.btn-rg{
          position: absolute;
          top: 0;
          height: 55px;
          line-height: 55px;
          font-size: 25px;
          padding: 0 5px;
          z-index: 1;
          cursor: pointer;
        }
        .btn-lf{
          left: 5px;
        }
        .btn-rg{
          right: 5px;
        }
        .hotSale-frame{
          position: absolute;
          left: 0;
          top: 0;
          width: 3600px;
          -webkit-transition: all .5s;
          -moz-transition: all .5s;
          -ms-transition: all .5s;
          -o-transition: all .5s;
          transition: all .5s;
        }
        .tit-item{
          width: 240px;
          height: 55px;
          line-height: 55px;
          text-align: center;
          font-size: 25px;
          color: #121212;
          /*border-bottom: 6px solid #eee;*/
          float: left;
          cursor: pointer;
          font-family: 'Microsoft YaHei UI Light';
        }
        .tit-active{
          border-bottom: 6px solid #b72e29;
        }
      }
      .hot-frame{
        min-height: 240px;
        background-color: #fff;
      }
    }
</style>
