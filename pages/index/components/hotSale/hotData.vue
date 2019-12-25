<template>
  <div class="hot-data" @click="toBriefDetail">
    <div class="hot-img">
      <img :src="data.imageUrl+'?imageView2/1/w/220/h/150'">
    </div>
    <p class="one-txt-cut">{{data.assetName}}</p>
    <template v-if="data.price&&data.price.length < 5">
      <div class="money-main one-txt-cut">
        <span>{{data.finalName}}</span>：<div class="money-name" v-if="data.finalPrice != '无'">￥</div><div class="money-big">{{data.finalPrice}}</div>
      </div>
    </template>
    <template v-else>
      <div class="money-main one-txt-cut">
        <span>{{data.finalName}}</span>：<div class="money-name">￥</div><div class="money-num one-txt-cut">{{data.finalPrice}}</div>
      </div>
    </template>
  </div>
</template>
<script>
    export default {
      name: "hotData",
      props: ["data"],
      methods:{
        toBriefDetail() {
          if(this.data.activityType === 'enrolling'){
            if(this.data.category === '1'){
              let url = this.$router.resolve({path: '/merchantDetail', query: {activityId: this.data.activityId,type: '1'}}).href
              window.open(url);
            }else{
              if(this.data.category === '2'){
                let url = this.$router.resolve({path: '/loanDetail', query: {activityId: this.data.activityId,type: '2'}}).href
                window.open(url);
              }else if(this.data.category === '4'){
                let url = this.$router.resolve({path: '/leaseMerchantDetail', query: {activityId: this.data.activityId,type: '4'}}).href
                window.open(url);
              }else{
                let url = this.$router.resolve({path: '/merchantDetail', query: {activityId: this.data.activityId,type: '3'}}).href
                window.open(url);
              }
            }
          }else{
            let path='/productDetail'
            if(this.data.mode==='FREE'){
              path='/biddingDetail'
            }
            let routeData = this.$router.resolve({path: path, query: {id: this.data.activityId}});
            window.open(routeData.href, '_blank');
          }
        },
      }
    }
</script>
<style scoped lang='scss'>
  .hot-data{
    width: 230px;
    float: left;
    padding: 0 5px;
    cursor: pointer;
    .hot-img{
      margin: 0 auto 20px;
      width: 220px;
      height: 150px;
      img{
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    >p{
      width: 195px;
      margin: 0 auto;
      font-size: 17px;
      color: #010101;
      line-height: 17px;
      >span{
        font-weight: bold;
        color: #c00000;
      }
    }
    .money-main{
      width: 195px;
      padding-bottom: 15px;
      margin: 0 auto;
      font-size: 17px;
      color: #010101;
      line-height: 17px;
      display: flex;
      height: 35px;
      align-items: flex-end;
      .money-name{
        color: #c02e2e;
        font-size: 14px;
        font-weight: bold;
      }
      .money-num{
        font-size: 16px;
        color: #c02e2e;
        font-weight: bold;
      }
      .money-big{
        font-size: 22px;
        color: #c02e2e;
        font-weight: bold;
        line-height: 20px;
      }
    }

  }
</style>
