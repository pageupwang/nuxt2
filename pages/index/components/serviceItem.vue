<template>
  <router-link class="service-date"
               :to="{path:'/handleDetail',query:{ disposalId : detail.disposalId,disposalType:detail.disposalType }}">
    <p class="service-img">
      <img :src="detail.extra1+'?imageView2/1/w/211/h/145'" alt="" v-if='detail.extra1'>
      <img src="../../../assets/img/default-img.png" alt="" v-else>
    </p>
    <p class="data-name one-txt-cut">{{detail.disposalName}}</p>
    <p class="data-city one-txt-cut">所在地：{{detail.providerAreas&&detail.providerAreas.length&&detail.providerAreas[0].name}}等多地</p>
    <p class="data-btn">招标中</p>
  </router-link>
</template>
<script>
  export default {
    name: "serviceItem",
    props: ['detail'],
  }
</script>

<style scoped lang='scss'>
  .service-date {
    width: 231px;
    float: left;
    margin: 0 10px 10px 0;
    .service-img {
      padding: 10px;
      width: 211px;
      height: 145px;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .data-name {
      padding: 15px 18px 0 18px;
      font-size: 16px;
      line-height: 16px;
      color: #010101;
      /*width: 100%;*/
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    .data-city {
      padding: 17px 18px 25px;
      font-size: 16px;
      line-height: 16px;
      color: #010101;
    }
    .data-btn {
      background-color: #d41723;
      text-align: center;
      font-size: 12px;
      color: #fff;
      line-height: 20px;
      height: 20px;
    }
  }
</style>
