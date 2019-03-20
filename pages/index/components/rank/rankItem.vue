<template>
    <div class="rank-data" @click='toDetail(data)'>
      <div class="rank-img">
        <img :src="data.images+'?imageView2/1/w/73/h/56'">
      </div>
      <div class="rank-money">
        <div class="rank-name one-txt-cut">{{data.name}}</div>

        <p class="one-txt-cut" v-show="data.deposit != null && data.depositLabel != null && data.deposit && data.depositLabel">
          {{data.depositLabel}}：<span>{{data.deposit}}</span>
        </p>
        <p class="one-txt-cut" v-show="data.cityLabel != null && data.cityName != null && data.cityLabel && data.cityName">
          {{data.cityLabel}}：<span class="status">{{data.cityName}}</span>
        </p>
        <p class="one-txt-cut" v-show="this.data.mortgageLabel != null && this.data.mortgageValue != null && this.data.mortgageLabel && this.data.mortgageValue">
          {{data.mortgageLabel}}：<span class="status">{{data.mortgageValue}}</span>
        </p>
      </div>
    </div>
</template>

<script>
    export default {
      name: "rankItem",
      props:["data","title"],
      methods:{
        toDetail(data){
          let path = ""
          if (data.type == 1) {
            path = "/merchantDetail"
          } else {
            path='/loanDetail'
          }
          this.$router.push({path: path, query: {activityId: data.id, type: data.type}})
        }
      },
    }
</script>

<style scoped lang="scss">
    .rank-data{
      padding: 8px 2px 8px;
      height: 56px;
      float: left;
      cursor: pointer;
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
