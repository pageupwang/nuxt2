<template>
  <div class="noData">
    <img src="../assets/img/no-data.png" alt="">
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    name: "noData",
    props:["message"],
  }
</script>

<style scoped lang='scss'>
  .noData {
    width: 100%;
    text-align: center;
    padding: 100px 0px;
    background: rgb(255, 255, 255);
    margin: 20px 0px;
    img{
      width: 200px;
    }
    p{
      width: 100%;
      text-align: center;
      margin-top: 10px;
      font-size: 14px;
      color: rgb(138, 166, 185);
    }
  }
</style>
