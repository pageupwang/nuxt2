<template>
  <div class="indexTitle" :id='id'>
    <div class="line"></div>{{title}}
    <span v-if="word">{{word}}</span>
  </div>
</template>

<script>
  export default {
    name: "indexTitle",
    props:['title','word','id']
  }
</script>

<style scoped lang='scss'>
  .indexTitle{
    padding-left: 20px;
    font-size: 33px;
    color: #161616;
    position: relative;
    .line{
      width: 6px;
      height: 30px;
      background-color: #d41723;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    >span{
      color: #fff;
      background-color: #D41723;
      line-height: 16px;
      border-radius: 3px;
      padding: 4px 8px;
      margin-left: 10px;
      font-size:16px;
    }
  }

</style>
