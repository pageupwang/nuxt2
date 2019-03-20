<template>
  <div class='searchItem' :class='{"m4":true}' >
    <div class="product">
      <span class='product-type'>{{reaust.categoryName}}</span>
      <img :src="reaust.imageUrl" alt="" class='product-pic'>
      <div class="product-name" :class="{active:false}" @click='cancelCollect(item)' v-if='ismyCollect'>
        <template>
          <img src="../assets/img/icon/no-collect-icon.png" alt="">
          取消关注
        </template>
      </div>
    </div>
    <div class="product-info">
      <div class="title">
        {{reaust.activityName}}
      </div>
      <p class='clearfix'>
        <span class='tip'>起拍价</span>
        <span class="money red" v-if='reaust.startingPrice'>￥{{reaust.startingPrice}}</span>
        <span class="money" v-else>无</span>
        <span style='float: right;margin-top: 2px;'>
          <img src="../assets/img/icon/adderss.png" alt=""
               style='width: 10px;height: 13px;display: inline-block;vertical-align: sub'>
          {{reaust.cityName}}</span>
      </p>
      <p class="clearfix">
        <span class='tip'>拍卖方式 <strong>{{reaust.modeStr}}</strong></span>
        <span class=" fr">{{reaust.viewCount}}人浏览</span>
      </p>
      <p class="clearfix">
        <span class="fr">{{reaust.depositCount}}人报名</span>
      </p>
    </div>
    <div class="buttom">
      <span> {{reaust.statusStr}}</span>
      截止时间：{{reaust.endAt}}
    </div>
    <div class="model" v-if='collectFlag'>
      <div class="tip">
        <img src="../assets/img/icon/question-icon.png" alt="">
        确认取消关注？
      </div>
      <div class="operaed clearfix">
        <div class="btn" @click="sure">
          确认
        </div>
        <div class="btn" @click='cancel'>
          取消
        </div>
      </div>
    </div>
    <div class='model' @click='chose' v-if='choseFlag'>
      <div class="gou">
        <img src="../assets/img/icon/collect-check-icon.png" alt="">
        <img src="../assets/img/icon/collect-nocheck-icon.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "searchItem",
    props: ['reaust'],
    data() {
      return {
        collectFlag: false,//单个取消关注flag
        choseFlag:false,
      }
    },
    methods: {
      //取消关注
      cancelCollect(item) {
        this.collectFlag = true
        this.checkItem=item
      },
      //确认取消关注
      sure() {

      },
      //取消取消关注
      cancel() {
        this.collectFlag = false
      },
      //选中
      chose(){

      },
    },
    computed: {
      ismyCollect() {
        return this.$route.path.indexOf('myCollect')>-1;
      }
    },
  }
</script>

<style scoped lang='scss'>
  @import "../assets/css/$var";

  .searchItem {
    float: left;
    margin-right: 20px;
    width: 285px;
    max-height: 400px;
    font-size: 12px;
    margin-top: 20px;
    background: rgb(255, 255, 255);
    cursor: pointer;
    position: relative;
    &:hover {
      box-shadow: rgba(170, 170, 170, 0.5) 0px 2px 12px 0px;
    }
    &:nth-child(4n+4) {
      margin-right: 0;
    }
    .product {
      position: relative;
      width: 100%;
      height: 186px;
      .product-type {
        position: absolute;
        left: 0px;
        top: 0px;
        display: inline-block;
        font-size: 12px;
        color: rgb(255, 255, 255);
        background: rgb(0, 68, 141);
        padding: 5px;
      }
      .product-pic {
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
      .product-status {
        position: absolute;
        bottom: 34px;
        right: 4px;
        width: 112px;
        height: 76px;
      }
      .product-name {
        position: absolute;
        width: 80px;
        bottom: 0px;
        right: 0;
        color: #333;
        font-size: 12px;
        text-align: center;
        line-height: 26px;
        background: rgba(255, 255, 255, 0.8);
        text-align: center;
        > img {
          vertical-align: -6%;
        }
        &.active {
          color: $red;
        }
      }
    }
    .product-info {
      padding: 5px 10px 14px;
      position: relative;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      min-height: 123px;
      > .title {
        font-size: 18px;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        margin-bottom: 7px;
        color: #333;
      }
      > p {
        color: #666;
        .tip {
          display: inline-block;
          width: 4em;
          margin-right: -6px;
          white-space: nowrap;
          margin-bottom: 7px;
        }
        .money {

          font-weight: 700;
          &.red {
            color: rgb(183, 46, 41);
            font-size: 14px;
          }
        }
      }

      .auction-status {
        position: absolute;
        line-height: 1;
        right: -3px;
        bottom: 10px;
        color: rgb(255, 255, 255);
        padding: 4px 6px 4px 11px;
        border-radius: 10px 0px 0px 10px;

        &:after {
          bottom: -5px;
          right: 0px;
          position: absolute;
          content: "";
          border-style: solid;
          border-width: 5px 3px 0px 0px;
          border-color: rgb(187, 187, 187) transparent transparent;
        }
      }
      .auction-status3 {
        background: rgb(187, 187, 187);
      }
      .auction-status2 {
        background: rgb(183, 46, 41);
      }
    }
    .buttom {
      line-height: 25px;
      color: #fff;
      position: relative;
      padding-left: 75px;
      background: #787878;
      text-align: center;
      > span {
        position: absolute;
        width: 75px;
        height: 30px;
        left: 0;
        bottom: 0;
        text-align: center;
        line-height: 30px;
        background-color: $red;
      }
    }
    .model {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .7);
      top: 0;
      left: 0;
      position: absolute;
      .tip {
        position: absolute;
        top: 96px;
        color: #fff;
        font-size: 18px;
        width: 100%;
        text-align: center;
        img {
          vertical-align: -42%;
        }
        strong{
          margin-left: 10px;
        }
      }
      .operaed {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        > .btn {
          float: left;
          width: 50%;
          line-height: 34px;
          text-align: center;
          font-size: 14px;
          color: #666;
          background: #BFBFBF;
          &:first-child {
            color: #fff;
            background-color: $red;
          }
        }
      }
      .gou{
        width: 50px;
        height: 50px;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
</style>
