<template>
  <router-link :to="'/productDetail?id='+data.activityId" target="_blank" class="hot-data">
    <div class="hot-img">
      <img :src="data.imageUrl+'?imageView2/1/w/220/h/150'">
    </div>
    <p class="one-txt-cut">{{data.assetName}}</p>
    <p>保证金：<span>{{data.deposit}}</span></p>
  </router-link>
</template>
<script>
    export default {
      name: "hotData",
      props: ["data"],
    }
</script>
<style scoped lang='scss'>
  .hot-data{
    width: 230px;
    float: left;
    padding: 0 5px;
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
      padding-bottom: 18px;
      line-height: 17px;
      >span{
        font-weight: bold;
        color: #c00000;
      }
    }
  }
</style>
