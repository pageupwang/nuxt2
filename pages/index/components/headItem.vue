<template>
  <div class="new-item">
    <div class="new-tit">{{detail.name}}</div>
    <div class="new-data">
      <div class="new-img fl">
        <img :src="detail.image" alt="">
      </div>
      <div class="new-word fl">
        <router-link
          :to='{path:"/news",query:{ articleTypeId : item.articleTypeId,id:item.id}}'
          class="one-txt-cut"
          v-for="(item,index) in detail.article"
          :key='index'
        >
          {{item.articleName}}
        </router-link>
      
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "headItem",
    props: ['detail']
  }
</script>

<style scoped lang='scss'>
  .new-item {
    float: left;
    width: 585px;
    .new-tit {
      font-size: 24px;
      line-height: 24px;
      padding: 38px 0 29px;
    }
    .new-data {
      overflow: hidden;
      .new-img {
        width: 200px;
        height: 190px;
        > img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .new-word {
        padding: 30px 0 0 20px;
        > a {
          width: 340px;
          display: block;
          font-size: 16px;
          margin-bottom: 27px;
          > span {
            border-right: 3px solid #666;
            padding-right: 10px;
            margin-right: 10px;
          }
        }
      }
    }
  }
</style>
