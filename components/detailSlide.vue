<template>
  <div class="box">
    <div class="detailSlide">
      <ul>
        <li @click='toTop' v-if='$route.path=="/"||$route.path=="/index"'>
          <span>
            回到顶部
          </span>
          
        </li>
        <li>
          <router-link to='/help' target="_blank">帮助中心</router-link>
        </li>
        <li v-for="(item,index) in tabTit" :key='index'>
          <span @click='changeSlide(index,item.dom)' :class='{active:activeIndex===index}'>{{item.tit}}</span>
        </li>
        <li>
        <span @click='toTop' v-if='$route.path!=="/"&&$route.path!=="/index"'>
          <img src="../assets/img/icon/backtop-icon.png" alt="">
        </span>
        </li>
      </ul>
      <slot name='code'></slot>
    </div>
  </div>

</template>

<script>
  import $ from 'jquery'
  
  export default {
    name: "detailSlide",
    props: ['tabTit'],
    data() {
      return {
        activeIndex: '',
      }
    },
    methods: {
      changeSlide(index, dom) {
        this.activeIndex = index
        $(window).scrollTop($('#' + dom).offset().top)
      },
      toTop() {
        $(window).scrollTop(0)
        this.activeIndex = ''
      },
    },
    created(){
    },
  }
</script>

<style scoped lang='scss'>
  @import "../assets/css/$var";
  
  .box {
    width: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    height: 0;
    z-index: 99;
  }
  
  .detailSlide {
    position: absolute;
    top: 0;
    transform: translate(120%, -50%);
    right: 0;
    z-index: 999;
    li {
      margin-bottom: 6px;
      span, a {
        cursor: pointer;
        display: block;
        width: 50px;
        height: 50px;
        padding: 6px 10px;
        background-color: #fff;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        color: #666;
        font-size: 14px;
        line-height: 1.3;
        &.active {
          background-color: $red;
          color: #fff;
        }
      }
      &:last-child {
        text-align: center;
        
        span {
          padding-top: 16px;
          background-color: $red;
        }
        
      }
    }
  }

</style>
