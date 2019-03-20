<template>
    <div class="hot-item">
      <hotData></hotData>
      <hotData></hotData>
      <hotData></hotData>
      <hotData></hotData>
      <hotData></hotData>
    </div>
</template>
<script>
    import hotData from './hotData'
    export default {
        name: "hotItem",
        components:{
          hotData,
        }
    }
</script>

<style scoped lang='scss'>
  .hot-item{
    background-color: #fff;
    padding-top: 10px;
    overflow: hidden;
  }
</style>
