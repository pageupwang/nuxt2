<template>
  <div class="adver-frame">
    <div class="adver-data" v-for="(item,index2) in adverList" :key='index2' @click="tojigou(item)">
      <img :src="item.logoUrl">
      <p>{{item.agencyName}}</p>
    </div>
    <!--<div class="adver-data" v-for="(v,index3) in adver" :num='index3' @click='tojigou(v)'>-->
      <!--<img :src="v.logoUrl">-->
    <!--</div>-->
  </div>
</template>
<script>
  import {getMerchantFirst,getMerchant} from '../../../api/open/attract'
  import {createA} from '../../../assets/js/commom'
  import {getZizhan} from '../../../assets/js/config'
    export default {
      name: "advertisement",
      data() {
        return {
          adver: [],
          adverList: [],
        }
      },
      methods:{
        //跳转机构
        tojigou(item){
          let code = item.code;
          // let url='https://'+code+'.360pai.com'
          let location=window.location.href
          let http=""
          if(location.indexOf('com')>-1){
            http="https://"
          }else{
            http="http://"
          }
          let url=http+code+getZizhan();
          createA(url)
        },
        //跳转
        toUrl(item){
          createA(item.url)
        },
        getIndex(){
          // getMerchantFirst(1,12).then(res => {
          //   let data = res.data;
          //   if (data.code === '000') {
          //     this.adver = data.content.list;
          //   } else {
          //
          //   }
          // }).catch(err => {
          //   console.log(err);
          // });
          getMerchant(1,9).then(res => {
            let data = res.data;
            if (data.code === '000') {
              this.adverList = data.content.list;
            } else {

            }
          }).catch(err => {
            console.log(err);
          })
        },
      },
      created(){
        this.getIndex();
      },
    }

</script>



<style scoped lang='scss'>
  .adver-frame{
    width: 100%;
    overflow: hidden;
    .adver-data{
      float: left;
      width: 134px;
      height: 170px;
      text-align: center;
      cursor: pointer;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding-top: 20px;
      margin-bottom: 2px;
      margin-right: 2px;
      background-color: #fff;
      >img{
        display: block;
        margin: 0 auto;
        vertical-align: middle;
        width: 70px;
        height: 70px;
      }
      p{
        font-size: 14px;
        color: #333333;
        padding:0 20px;
        margin-top: 25px;
        height: 42px;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
      }
      &:nth-child(3n){
        margin-right: 0;
      }
    }
  }
</style>
