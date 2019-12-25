<template>
    <div class="auction-banner">
      <nuxt-link  target='_blank' class="auction-item" :to='{path:"/albumsList",query:{ id : item.id }}' v-for="(item,index) in session" :key='index'>
        <img :src="item.detailImg" :alt="item.albumName">
      </nuxt-link>
    </div>
</template>

<script>
    export default {
        name: "auctionBanner",
        props:["session"],
        data() {
          return {

          }
        }
    }
</script>

<style scoped lang='scss'>
    .auction-banner{
      width: 100%;
      overflow: hidden;
      a{
        display: block;
      }
      .auction-item{
        float: left;
        width: 100%;
        height: 170px;
        margin-bottom: 2px;
        cursor: pointer;
        >img{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
</style>
