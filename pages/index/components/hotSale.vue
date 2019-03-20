<template>
  <div class="hotSale">
    <div class="hotSale-tit">
      <div class="btn-lf" @click="btnLeft" v-if="page > 1"><</div>
      <div class="btn-rg" @click="btnRight" v-if="page < pageList">></div>
      <div class="hotSale-frame" :style="{width:frameWidth+'px',left: -moveWidth*(page-1)+'px'}">
        <p class="tit-item" :class="{'tit-active':attractChecked==item.id}" v-for="(item,index) in navList.asset_property_names" :key='index' @click="getMain(item.id)">{{item.name}}</p>
      </div>
    </div>
    <div class="hot-frame clearfix">
      <hotData v-for="(item,index) in mainList" :key='index' :data="item"></hotData>
    </div>
  </div>
</template>

<script>
  import hotData from './hotSale/hotData'
  import {hotSearch} from '../../../api/open/attract'
  export default {
    name: "hotSale",
    props: ["navList"],
    components:{
      hotData
    },
    data() {
      return {
        attractChecked: 0,
        mainList : [],
        frameWidth: "",
        moveWidth: 1200,
        page: 1,
        pageList: 1,
      }
    },
    methods:{
      getTitle(){
        if(this.navList.asset_property_names){
          this.pageList = Math.ceil(this.navList.asset_property_names.length/5);
          this.frameWidth = this.pageList*1201;
          this.attractChecked = this.navList.asset_property_names[0].id;
          this.getMain(this.attractChecked);
        }
      },
      getMain(id){
        hotSearch(id).then(res => {
          let data = res.data;
          if (data.code === '000') {
            this.attractChecked = id
            this.mainList = data.content.list;
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
    watch: {
      navList: function () {
        this.getTitle();
      },
    },
    created(){
      this.getTitle();
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
          border-bottom: 6px solid #d41723;
        }
      }
      .hot-frame{
        height: 240px;
        background-color: #fff;
      }
    }
</style>
