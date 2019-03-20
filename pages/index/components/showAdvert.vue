<template>
    <div class="showAdvert">
      <a :href="item.linkUrl" class="show-data" v-for="(item,index) in banner" :key='index' target='_blank'>
        <img :src="item.imgUrl">
      </a>
    </div>
</template>

<script>
    export default {
      name: "showAdvert",
      props:["banner"],
    }
</script>

<style scoped lang="scss">
  .showAdvert{
    height: 362px;
    overflow: hidden;
    .show-data{
      width: 240px;
      height: 170px;
      margin-bottom: 22px;
      display: block;
      >img{
        width: 100%;
        height: 100%;
        display: block;
      }
      &:last-child{
        margin-bottom: 0;
      }
    }
  }
</style>
