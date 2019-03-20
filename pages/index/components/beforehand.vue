<template>
  <div class="auction-frame">
    <div class="auction-tit">
      <p class="active">债权招商</p>
      <p>抵押物预招商</p>
      <p>物权招商</p>
    </div>
    <div class="auction-main">
      <indexItem>
        <div slot="tit" class="img-tit">抵押物预招商</div>
        <i slot="money">保障金：</i>
        <i slot="way">所在地：</i>
      </indexItem>
      <indexItem>
        <div slot="tit" class="img-tit">抵押物预招商</div>
        <i slot="money">保障金：</i>
        <i slot="way">所在地：</i>
      </indexItem>
      <indexItem>
        <div slot="tit" class="img-tit">抵押物预招商</div>
        <i slot="money">保障金：</i>
        <i slot="way">所在地：</i>
      </indexItem>
      <indexItem>
        <div slot="tit" class="img-tit">抵押物预招商</div>
        <i slot="money">保障金：</i>
        <i slot="way">所在地：</i>
      </indexItem>
      <indexItem>
        <div slot="tit" class="img-tit">抵押物预招商</div>
        <i slot="money">保障金：</i>
        <i slot="way">所在地：</i>
      </indexItem>
      <indexItem>
        <div slot="tit" class="img-tit">抵押物预招商</div>
        <i slot="money">保障金：</i>
        <i slot="way">所在地：</i>
      </indexItem>
    </div>
  </div>
</template>

<script>
  import indexItem from './indexItem'
  export default {
    name: "beforehand",
    components:{
      indexItem
    }
  }
</script>


<style scoped lang='scss'>
  .auction-frame{
    .auction-tit{
      padding:0 0 10px 10px;
      overflow: hidden;
      >p{
        float: left;
        height: 55px;
        line-height: 55px;
        font-size: 17px;
        border-bottom: 3px solid transparent;
        text-align: center;
        width: 243.33px;
        cursor: pointer;
      }
      .active{
        color: #d41723;
        border-bottom-color: #d41723;
      }

    }
    .auction-main{
      overflow: hidden;
    }
  }
</style>
