<template>
  <router-link :to="'/productDetail?id='+data.activityId" class="indexItem" target="_blank">
    <div class="index-img">
      <img :src="data.images+'?imageView2/1/w/220/h/150'">
    </div>
    <div class='info'>
      <div class="title">{{data.asset_name}}</div>
      <div class="auction">
        起拍价：<span style="color: #d41723;font-weight: bold">{{data.startingPrice ? data.startingPrice : "无"}}</span>
      </div>
      <div class="auction">
        拍卖方式：<span>{{data.modeStr}}</span>
      </div>
      <div class="auction" v-show="data.cityLabel != null && data.cityName != null && data.cityLabel && data.cityName">
        {{data.cityLabel}}：<span>{{data.cityName}}</span>
      </div>
    </div>
    <div class="auction-time">
      <div class="auction-status" v-if="data.auctionStatus == '即将开拍'">即将开始</div>
      <div class="auction-status starting" v-else-if="data.auctionStatus == '正在拍卖'&&dataDay">拍卖中</div>
      <div class="auction-status auctioning" v-else-if="data.auctionStatus == '成功'|| data.auctionStatus =='已完成'|| !dataDay">拍卖结束</div>
      <div class='time' v-if="data.auctionStatus == '即将开拍'">距离开始：{{data.beginAt}}</div>
      <div class='time' v-else-if="data.auctionStatus == '正在拍卖' && dataDay">距离结束：{{time}}</div>
      <div class='time' v-else-if="data.auctionStatus == '成功'|| data.auctionStatus =='已完成' || !dataDay">结束时间：{{data.endAt}}</div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: "indexItem",
    props:["data"],
    data() {
      return {
        //预招商
        time:"",
        dataDay: true,
        seconds : 0,
      }
    },
    methods:{
      getTime(){
        this._clock = window.setTimeout(() => {
          this.seconds = this.seconds-1000;
          if(this.seconds<=0){
            this.dataDay = false;
            return false;
          }
          let hours = parseInt(this.seconds / (1000 * 60 * 60));
          let minutes = parseInt((this.seconds % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = parseInt((this.seconds % (1000 * 60)) / 1000);
          this.time = hours+'小时'+minutes+'分'+seconds+'秒';
          this.getTime();
        },1000)
      },
      getData(){
        this.seconds = (Number(this.data.endTime) - Number(this.data.dataTime))*1000;
        if(this.seconds<=0){
          this.dataDay = false;
          return false;
        }else{
          this.dataDay = true;
        }
        let hours = parseInt((this.seconds / (1000 * 60 * 60)));
        let minutes = parseInt((this.seconds % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = parseInt((this.seconds % (1000 * 60)) / 1000);
        this.time = hours+'小时'+minutes+'分'+seconds+'秒';
        this.getTime();
      },
    },
    watch: {
      data: function () {
        clearInterval(this._clock);
        this.getData();
      },
    },
    created(){
      this.getData();
    },
  }
</script>

<style scoped lang='scss'>
  .indexItem {
    float: left;
    width: 240px;
    padding-top: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    .index-img{
      width: 220px;
      margin: 0 auto;
      position: relative;
      .img-tit{
        position: absolute;
        width: 80px;
        height: 20px;
        line-height: 20px;
        background-color: #1d4299;
        color: #fff;
        text-align: center;
        top: 0;
        left: -10px;
      }
      >img{
        width: 100%;
        height: 150px;
        display: block;
      }
    }
    .info{
      padding: 16px 10px;
      width: 200px;
      margin: 0 auto;
      font-size: 16px;
      line-height: 16px;
      position: relative;
      .title{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .money-city{
        font-size: 13px;
        padding-top: 10px;
        .money{
          font-size: 12px;
          >span{
            margin-left: 5px;
            font-size: 16px;
            font-weight: 700;
          }
        }

      }
      .auction{
        padding-top: 10px;
        font-size: 13px;
        >span{
          font-size: 14px;
          margin-left: 5px;
          font-weight: 700;
        }
        i{
          font-style: normal;
        }
      }
      .assessment{
        >span{
          margin-left: 5px;
          font-size: 17px;
        }
      }

      .city{
        position: absolute;
        bottom: 16px;
        right: 0;
        >img{
          display: inline-block;
          width: 14px;
          height: 18px;
          margin-right: 3px;
          vertical-align: middle;
        }
        >span{
          display: inline-block;
          height: 20px;
          line-height: 20px;
          vertical-align: middle;
        }
      }
    }
    .auction-time{
      background-color: #787878;
      text-align: center;
      height: 20px;
      line-height: 20px;
      color: #fff;
      position: relative;
      padding-left: 60px;
      .auction-status{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 60px;
        height: 24px;
        line-height: 24px;
        background-color: #1d4299;
      }
      .auctioning{
        background-color: #a9a9a9;
      }
      .starting{
        background-color: #d41723;
      }

    }
  }
</style>
