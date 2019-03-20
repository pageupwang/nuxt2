<template>
    <div id="magnifier-frame">
      <div class="magnifier-main" :style="{width:width+'px',height:height+'px'}"  @mouseenter="handOver"  @mousemove="handMove" @mouseleave="handOut">
        <img :src="src" />
        <div class="mask-frame" v-show="imgObj" :style="{width: configs.maskWidth+'px',height: configs.maskHeight+'px',opacity: configs.maskOpacity,backgroundColor:configs.maskColor,left:mouseMask.left+'px',top:mouseMask.top+'px'}"></div>
      </div>
      <div class="magnifier-big" v-show="imgObj" :style="{width:configs.width+'px',height:configs.height+'px', left: Number(imgRect.left)+Number(width)+'px',top:imgRect.top+'px'}">
        <div class="big-frame" :style="{width:width*(configs.width/configs.maskWidth)+'px',height:height*(configs.height/configs.maskHeight)+'px',left:bigImg.left+'px',top:bigImg.top+'px'}" >
          <img :src="src" />
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "magnifierImg",
        props: {
          src: {
            type: String,
            required: true
          },
          width:{
            type: String,
            default:'300'
          },
          height:{
            type: String,
            default:'300'
          },
          configs: {
            type: Object,
            default:function() {
              return {
                width: 200,
                height: 200,
                maskWidth: 100,
                maskHeight: 100,
                maskColor: 'blue',
                maskOpacity: 0.5
              }
            }
          }

        },
        data:function () {
          return{
            imgRect:{
              left : 5,
              top : 0,
            },
            imgObj: false,
            bigImg:{
              left : 0,
              right : 0,
            },
            mouseMask:{
              left : 0,
              top : 0,
            },
          }
        },
        methods: {
          handMove:function(e) {
            let x = e.pageX - document.getElementById("magnifier-frame").offsetLeft;
            let y = e.pageY - document.getElementById("magnifier-frame").offsetTop;
            if(x - this.configs.maskWidth/2<0){
              this.mouseMask.left = 0;
              this.bigImg.left = 0;
            }else if(x - this.configs.maskWidth/2>this.width-this.configs.maskWidth){
              this.mouseMask.left = this.width-this.configs.maskWidth;
              this.bigImg.left = -(this.width-this.configs.maskWidth)*(this.configs.width/this.configs.maskWidth);
            }else{
              this.mouseMask.left = x - this.configs.maskWidth/2;
              this.bigImg.left = -(x - this.configs.maskWidth/2)*(this.configs.width/this.configs.maskWidth);
            }
            if(y - this.configs.maskHeight/2<0){
              this.mouseMask.top = 0;
              this.bigImg.top = 0;
            }else if(y - this.configs.maskHeight/2>this.height-this.configs.maskHeight){
              this.mouseMask.top = this.height-this.configs.maskHeight;
              this.bigImg.top = -(this.height-this.configs.maskHeight)*(this.configs.width/this.configs.maskWidth);
            }else{
              this.mouseMask.top = y - this.configs.maskHeight/2;
              this.bigImg.top = -(y - this.configs.maskHeight/2)*(this.configs.width/this.configs.maskWidth);
            }
          },
          handOut:function(e) {
            this.imgObj = false;
          },
          handOver:function(e) {
            // 创建鼠标选择区域
            this.imgObj = true;
          }
        }
    }
</script>
<style scoped lang='scss'>
  #magnifier-frame{
    position: relative;
    .magnifier-main{
      background-color: #fff;
      position: relative;
      >img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .mask-frame{
        position: absolute;
        z-index: 99;
      }
    }
    .magnifier-big{
      position: absolute;
      overflow: hidden;
      background-color: #fff;
      z-index: 99;
      .big-frame{
        position: absolute;
        >img{
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
</style>
