<template>
    <div class="rank-frame">
      <div class="rank-tit">排行榜
        <img src="../../../assets/img/icon/hot-rank-icon.png" alt="">
        <router-link to="/merchant" v-if="title == 1">更多></router-link>
        <router-link to="/search" v-else-if="title == 2">更多></router-link>
      </div>
      <div class="rank-item" v-if="title == 1">
        <rankDate v-for="(item,index) in rankList" :key='index' :data="item" :title="title"></rankDate>
      </div>
      <div class="rank-item" v-if="title == 2">
        <rankDatet v-for="(item,index) in rankList" :key='index' :data="item" :title="title"></rankDatet>
      </div>
    </div>
</template>

<script>
    import rankDate from './rank/rankItem'
    import rankDatet from './rank/rankItemt'
    export default {
      name: "rank",
      props:["rankList","title"],
      components:{
        rankDate,
        rankDatet,
      }
    }
</script>

<style scoped lang="scss">
    .rank-frame{
      .rank-tit{
        /*background-color: #e7e5e6;*/
        font-size: 20px;
        color: #d41723;
        height: 59px;
        line-height: 59px;
        position: relative;
        img{
        
        }
        >a{
          position: absolute;
          right: 12px;
          height: 24px;
          line-height: 24px;
          font-size: 14px;
          top: 50%;
          margin-top: -12px;
          color: #504f4f;
        }
      }
      .rank-item{
        padding-top: 7px;
      }
    }
</style>
