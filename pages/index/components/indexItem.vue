<template>
  <div class="indexItem" @click='toDetail(data)'>
    <div class="index-img">
      <img :src="data.images+'?imageView2/1/w/220/h/150'">
      <div class="img-tit" v-if="data.type">{{data.typeName}}</div>
    </div>
    <div class='info'>
      <div class="title">{{data.name}}</div>
      <div class="auction"
           v-show="data.deposit != null && data.depositLabel != null && data.deposit && data.depositLabel">
        {{data.depositLabel}}：<span>￥{{data.deposit}}</span>
      </div>
      <div class="auction" v-show="data.cityLabel != null && data.cityName != null && data.cityLabel && data.cityName">
        {{data.cityLabel}}：<span>{{data.cityName}}</span>
      </div>
      <div class="auction"
           v-show="this.data.mortgageLabel != null && this.data.mortgageValue != null && this.data.mortgageLabel && this.data.mortgageValue">
        {{data.mortgageLabel}}：<span>{{data.mortgageValue}}</span>
      </div>
    </div>
    <div class="auction-time">
      <div :class="{'auction-status auctioning':true,starting:data.status=='6'}">{{data.statusName}}</div>
      <div class='time'>截止时间：{{data.endAt}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "indexItem",
    props: ["data"],
    methods: {
      toDetail(data) {
        let path = ""
        if (data.type == 1) {
          path = "/merchantDetail"
        } else {
          path='/loanDetail'
        }
        this.$router.push({path: path, query: {activityId: data.id, type: data.type}})
      },
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
    cursor: pointer;
    height: 270px;
    .index-img {
      width: 220px;
      margin: 0 auto;
      position: relative;
      .img-tit {
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
      > img {
        width: 100%;
        height: 150px;
        display: block;
      }
    }
    .info {
      padding: 16px 10px;
      width: 200px;
      margin: 0 auto;
      font-size: 16px;
      line-height: 16px;
      position: relative;
      height: 69px;
      .title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .money-city {
        font-size: 13px;
        padding-top: 10px;
        .money {
          font-size: 12px;
          > span {
            margin-left: 5px;
            font-size: 16px;
            font-weight: 700;
          }
        }

      }
      .auction {
        padding-top: 10px;
        font-size: 13px;
        > span {
          font-size: 14px;
          margin-left: 5px;
          font-weight: 700;
          font-family: "arial";
        }
        i {
          font-style: normal;
        }
      }
      .assessment {
        > span {
          margin-left: 5px;
          font-size: 17px;
        }
      }

      .city {
        position: absolute;
        bottom: 16px;
        right: 0;
        > img {
          display: inline-block;
          width: 14px;
          height: 18px;
          margin-right: 3px;
          vertical-align: middle;
        }
        > span {
          display: inline-block;
          height: 20px;
          line-height: 20px;
          vertical-align: middle;
        }
      }
    }
    .auction-time {
      background-color: #787878;
      text-align: center;
      height: 20px;
      line-height: 20px;
      color: #fff;
      position: relative;
      padding-left: 60px;
      .auction-status {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 60px;
        height: 24px;
        line-height: 24px;
      }
      .auctioning {
        background-color: #a9a9a9;
      }
      .starting {
        background-color: #d41723;
      }

    }
  }
</style>
