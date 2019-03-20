<template>
    <div class="auction-frame">
      <div class="auction-tit">
        <p :class="{'active':active==item.id}" v-for="(item,index) in titleList" :key='index' @click="getMain(item.id)">{{item.hallName}}</p>
      </div>
      <div class="auction-main">
        <indexItemAuction v-for="(item,index) in mainList" :key='index' :data="item"></indexItemAuction>
      </div>
    </div>
</template>

<script>
    import indexItemAuction from './indexItemAuction'
    import {auctionMain} from '../../../api/open/attract'
    export default {
      name: "auction",
      props:["navList"],
      components:{
        indexItemAuction
      },
      data() {
        return {
          //预招商
          titleList:[],
          mainList:[],
          active: "",
        }
      },
      methods:{
        getData(){
          this.titleList = this.navList.asset_hall_type;
          if(this.titleList&&this.titleList.length>=0){
            this.active = this.titleList[0].id
            this.getMain(this.active);
          }
        },
        getMain(id){
          auctionMain(id).then(res => {
            let data = res.data;
            if (data.code === '000') {
              this.active = id
              this.mainList = data.content.list;
            } else {

            }
          }).catch(err => {
            console.log(err);
          })
        },
      },
      watch: {
        navList: function () {
          this.getData();
        },
      },
      created(){
        this.getData();
      },
    }
</script>

<style scoped lang='scss'>
    .auction-frame{
      .auction-tit{
        padding:0 0 10px 10px;
        overflow: hidden;
        >p{
          float: left;
          height: 55px;
          line-height: 55px;
          font-size: 17px;
          border-bottom: 3px solid transparent;
          text-align: center;
          width: 146px;
          cursor: pointer;
        }
        .active{
          color: #d41723;
          border-bottom-color: #d41723;
        }

      }
      .auction-main{
        overflow: hidden;
      }
    }
</style>
