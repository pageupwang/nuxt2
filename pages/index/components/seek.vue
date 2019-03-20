<template>
    <div class="seek-frame">
      <div class="seek-tit">快速查找</div>
      <div class="seek-main">
        <div class="seek-line clearfix" v-if="type == 1">
          <div class="seek-name fl">拍卖类型:</div>
          <div class="seek-work fl">
            <select v-model='category_group_id.id' @change="changeCategory">
              <option v-for="(item,index) in asset_groups_names" :key='index' :value="item.id">{{item.name}}</option>
            </select>
            <div class="down">
              <img src="../../../assets/img/icon/down2.jpg">
            </div>
          </div>
        </div>
        <div class="seek-line clearfix" v-if="type == 2">
          <div class="seek-name fl">招商类型:</div>
          <div class="seek-work fl">
            <select v-model='merType'>
              <option v-for="(item,index) in types" :key='index' :value="item.id">{{item.name}}</option>
            </select>
            <div class="down">
              <img src="../../../assets/img/icon/down2.jpg">
            </div>
          </div>
        </div>
        <div class="seek-line clearfix">
          <div class="seek-name fl">标的所在地:</div>
          <div class="seek-work fl one-txt-cut" @mousedown="propShow">
              {{city}}
              <div class="down">
                <img src="../../../assets/img/icon/down2.jpg">
              </div>
              <div class="hide-input" style="width: 0;height: 0;overflow:hidden;opacity: 0">
                <input type="text" v-focus="focusStatus" @blur="propHide">
              </div>
          </div>
          <div class="city-frame clearfix" v-if="focusStatus">
            <ul class="fl">
              <li v-for="(v,index) in province" :class="{active : provinceNum==v.id}" @mousedown="showCity(v.id)">{{v.name}}</li>
            </ul>
            <ul class="fl" @mousedown="propShowt">
              <li v-for="(v,index2) in cityList" @mousedown="getCity(v.id,v.name)" @mousedown.stop="propHide">{{v.name}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="seek-submit" @click="search">确认</div>
    </div>
</template>

<script>
  import {getAllProvinces,getcities} from '../../../api/common'
  import {searchNav} from '../../../api/open/search'
    export default {
      name: "seek",
      props:["type",'navList'],
      data() {
        return {
          cityId: "",
          city: "",
          province: [],
          cityList: "",
          cityProp : false,
          provinceNum: "",
          focusStatus : false,
          auction : "",
          asset_groups_names:[],//拍卖类型
          category_group_id:{id:"0",name:'全部'},
          activity_cities:[],//搜索页城市列表
          types: [
            {id:0,name:'全部'},
            {id:1,name:'抵押物预招商'},
            {id:2,name:'债权招商 '},
            {id:3,name:'物权招商'},
          ],//抵押物类型arr
          merType:"0",
        }
      },
      directives: {
        focus: {
          // 指令的定义
          inserted: function (el,obj) {  //这是需要页面刚加载就能进行聚焦操作使用的钩子函数,可以省略的，视具体需求而定
            //console.log(obj);
            if(obj.value) { //对值进行判断
              // 聚焦元素
              el.focus()
            }
          },
          // 当指令所在组件的 VNode 及其子 VNode 全部更新后调用
          componentUpdated: function(el,obj) {  //这是每当绑定的值发生改变时触发的钩子函数
            //console.log(obj);  //可以打印看一下
            if(obj.value) {
              el.focus();
            }
          }
        }
      },
      methods:{
        changeCategory(){
          for (let i = 0; i < this.asset_groups_names.length; i++) {
            if(this.category_group_id.id==this.asset_groups_names[i].id){
              this.category_group_id.name=this.asset_groups_names[i].name
              break
            }
          }
        },
        search(){
          //1去搜索页，2去预招商
          
          if(this.type==1){
            this.$store.commit('changeAsset_groups', this.category_group_id);
            this.$store.commit('changeCity',{id:this.cityId,name:this.city})
            this.preserCity()
            window.sessionStorage.setItem('component','auctionList')
            this.$router.push({path: '/search' })
          }
          if(this.type==2){
            this.preserCity()
            this.$store.commit('changeMerchantCityId', {id:this.cityId,name:this.city})
            let typeName=''
            for (let i = 0; i < this.types.length; i++) {
              if(this.types[i].id==this.merType){
                typeName=this.types[i].name
              }
            }
            this.$store.commit('changeMerchantType', {name:typeName,id:this.merType})
            this.$router.push({path: '/merchant' })
          }
        },
        preserCity(){
          let flag=false
          for (let i = 0; i < this.activity_cities.length; i++) {
            if(this.cityId==this.activity_cities[i].id){
              flag=true
              break
            }
          }
          if(!flag){
            let city=this.activity_cities
            city.push({id:this.cityId,name:this.city})
            city.push({id:10000,name:"更多"})
            window.sessionStorage.setItem('citys',JSON.stringify(city))
          }
        },
        showCity(id){
          this.focusStatus = false;
          this.provinceNum = id
          let para = {
            provinceId:id
          }
          getcities(para).then(res => {
            let data = res.data
            if (data.code === '000') {
              this.cityList = data.content
            }
          }).catch(err => {
            console.log(err);
          })
        },
        propShow(){
          this.focusStatus = true;
        },
        propShowt(){
          this.focusStatus = false;
        },
        propHide(){
          this.focusStatus = !this.focusStatus;
        },
        getCity(id,name){
          this.focusStatus = false;
          this.city = name;
          this.cityId = id;
        },
        getProvinces(){
          getAllProvinces().then(res => {
            let data = res.data;
            if (data.code === '000') {
              this.province = data.content
            }
          }).catch(err => {
            console.log(err);
          })
        },
      },
      created(){
        this.getProvinces();
      },
      watch:{
        navList:function () {
           this.asset_groups_names=[{id:0,name:'全部'}].concat(this.navList.asset_groups_names)
           this.activity_cities=[{id:0,name:'全部'}].concat(this.navList.activity_cities)
        }
      },
    }
</script>

<style scoped lang='scss'>
  .seek-frame{
    height: 276px;
    .seek-tit{
      padding: 29px 25px;
      font-size: 25px;
      line-height: 25px;
    }
    .seek-main{
      font-size: 16px;
      .seek-line{
        padding-left: 25px;
        padding-bottom: 35px;
        position: relative;
        .seek-name{
          width: 115px;
          height: 24px;
          line-height: 24px;
          color: #161616;
        }
        .seek-work{
          width: 59px;
          padding-right: 16px;
          padding-left: 5px;
          height: 22px;
          border: 1px solid #606879;
          border-radius: 3px;
          position: relative;
          font-size: 12px;
          line-height: 22px;
          >select{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            padding: 0 16px 0 4px;
            line-height: 22px;
            border: none;
            outline: none;
            color: #333;
            background-color: transparent;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            z-index: 1;
            font-size: 12px;
          }
          .down{
            position: absolute;
            width: 10px;
            height: 10px;
            top: 50%;
            margin-top: -5px;
            right: 5px;
            img{
              width: 100%;
              height: 100%;
              display: block;
            }
          }
        }
      }
    }
    .city-frame{
      position: absolute;
      left: 140px;
      border: 1px solid #999;
      width: 180px;
      height: 150px;
      z-index: 2;
      top: 25px;
      background-color: #fff;
      border-radius: 3px;
      overflow: hidden;
      -moz-box-shadow: 0 0 5px #ccc;
      box-shadow: 0 0 5px #ccc;
      ul{
        cursor: pointer;
        width: 50%;
        box-sizing: border-box;
        float: left;
        height: 150px;
        font-size: 14px;
        overflow-x: auto;
        min-height: 149px;
        li{
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding: 0 8px;
          color: #333;
          height: 25px;
          line-height: 25px;
          &:hover{
            background-color: #f5f5f5;
          }
          &.active{
            background-color: #f0f0f0;
          }
        }
      }
    }
    .seek-submit{
      margin: 0 auto;
      width: 80px;
      height: 30px;
      text-align: center;
      font-size: 16px;
      color: #fff;
      background-color: #d41723;
      line-height: 30px;
      cursor: pointer;
      border-radius: 3px;
    }
  }
</style>
