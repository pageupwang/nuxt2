<template>
  <div class="modalBox" v-if='modalFlag'>
    <div class="modal" :style="{width:width?width+'px':'475px'}">
      <div class="title" :style="{'text-align':title?'center':'left','font-size':title?'20px':''}">
        <template v-if='title'>
          {{title}}
        </template>
        <template v-else>
        提示
        </template>
      </div>
      <div class="contain">
        <slot></slot>
      </div>
      <div class="close-btn" @click='close'>
        X
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "modalBox",
    props: ['width', 'title','modalFlag'],
    methods:{
      close(){
        this.$emit('update:modalFlag', false)
        this.$emit('close', false)
      },
    },
  }
</script>

<style scoped lang='scss'>
  @import "../assets/css/$var";
  
  .modalBox {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    top: 0;
    left: 0;
    z-index: 999;
    > .modal {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid $red;
      border-radius: 5px;
      .title {
        color: #fff;
        background-color: $red;
        line-height: 40px;
        padding: 0 20px;
        font-size: 16px;
        height: 40px;
      }
      .contain {
        padding-top: 20px;
        background-color: #fff;
      }
      .close-btn{
        position: absolute;
        font-size: 20px;
        right: 20px;
        top: 3px;
        transform:scaleX(1.5);
        color: #fff;
        cursor: pointer;
      }
    }
  }
</style>
