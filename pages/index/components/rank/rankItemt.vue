<template>
    <router-link :to="'/productDetail?id='+data.activityId" class="rank-data" target="_blank">
      <div class="rank-img">
        <img :src="data.imageUrl+'?imageView2/1/w/73/h/56'">
      </div>
      <div class="rank-money">
        <div class="rank-name one-txt-cut">{{data.name}}</div>
        <p class="one-txt-cut" >
          起拍价：<span>{{data.startingPrice ? data.startingPrice : '无'}}</span>
        </p>
        <p class="one-txt-cut">
          拍卖方式：<span class="status">{{data.modeStr}}</span>
        </p>
      </div>
    </router-link>
</template>

<script>
    export default {
      name: "rankItem",
      props:["data","title"],
    }
</script>

<style scoped lang="scss">
    .rank-data{
      padding: 8px 2px 8px;
      height: 56px;
      float: left;
      .rank-img{
        float: left;
        width: 73px;
        height: 56px;
        >img{
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .rank-money{
        float: left;
        padding-left: 11px;
        max-width: 103px;
        .rank-name{
          font-size: 13px;
          color: #010101;
        }
        >p{
          color: #010101;
          font-size: 8px;
          >span{
            font-size: 12px;
            font-weight: bold;
            color: #c00000;
          }
          >.status{
            font-size: 10px;
            color: #010101;
          }
        }
      }
    }
</style>
