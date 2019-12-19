<template>
  <div class="checkArea clearfix" :style='{top:top?top:"",width:checkAreaW}' v-if="checkAreaFlag" @blur='blurs'>
    <ul class="provinces">
      <li v-for="(item,index) in provinces" :class='{active:city.provinceId===item.id}' :key='index'
          @click.stop='showCity(item)'>{{item.name}}
      </li>
    </ul>
    <ul v-if='citys.length' class="citys">
      <li v-for="(item,index) in citys" :class='{active:city.id===item.id}' :key='index'
          @click.stop='checkCity(item)'>
        {{item.name}}
      </li>
    </ul>
    <ul v-if='areas.length' class="areas">
      <li v-for="(item,index) in areas" :key='index' :class='{active:city.areaId===item.id}'
          @click.stop='checkArea(item)'>{{item.name}}
      </li>
    </ul>
    <ul v-if='towns.length&&townFlag' class="towns">
      <li v-for="(item,index) in towns" :key='index' :class='{active:city.townId===item.id}'
          @click.stop='checkTown(item)'>{{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  import {getcities, getAreas, getTownsByArea} from '../api/common'
  import {mapState} from 'vuex'
  
  export default {
    name: "checkArea",
    props: ['top', 'checkAreaFlag', 'city', 'townFlag'],
    data() {
      return {
        citys: [],
        areas: [],
        towns: [],
      }
    },
    methods: {
      blurs() {
        this.$emit('update:checkAreaFlag', false)
      },
      checkCity(item) {
        this.city.id = item.id
        this.city.name = item.name
        this.$emit('update:city', this.city)
        if (item.id == '') {
          this.$emit('update:checkAreaFlag', false)
          this.city.areaId = ''
          this.city.areaName = ''
          this.$emit('checkCity', this.city)
        } else {
          this.showAreas(item.id)
        }
        
      },
      checkArea(item) {
        this.city.areaId = item.id
        this.city.areaName = item.name
        this.$emit('update:city', this.city)
        if (!this.townFlag) {
          this.$emit('checkCity', this.city)
          this.$emit('update:checkAreaFlag', false)
        } else {
          this.getTown(item)
        }
        
      },
      checkTown(item) {
        this.city.townId = item.id
        this.city.townName = item.name
        this.$emit('update:city', this.city)
        this.$emit('checkCity', this.city)
        this.$emit('update:checkAreaFlag', false)
      },
      getTown(item) {
        let para = {
          areaId: item.id,
        }
        getTownsByArea(para).then(res => {
          let data = res.data
          if (data.code === '000') {
            let towns = data.content
            this.towns = towns
            if (!towns.length) {
              this.$emit('checkCity', this.city)
              this.$emit('update:checkAreaFlag', false)
            }
          } else {
            this.towns = []
          }
        }).catch(err => {
          console.log(err);
        }).finally(() => {
        
        })
      },
      showCity(item) {
        this.city.provinceId = item.id
        this.city.provinceName = item.name
        let para = {
          provinceId: item.id
        }
        getcities(para).then(res => {
          let data = res.data
          if (data.code === '000') {
            let citys = data.content
            this.citys = citys
          }
        }).catch(err => {
          console.log(err);
        })
      },
      showAreas(id) {
        let para = {
          cityId: id
        }
        getAreas(para).then(res => {
          let data = res.data
          if (data.code === '000') {
            this.areas = data.content
          } else {
          
          }
        }).catch(err => {
          console.log(err);
        }).finally(() => {
        
        })
      },
      
      
    },
    created() {
    },
    computed: {
      checkAreaW() {
        let count = 1
        if (this.citys.length) {
          count++
        }
        if (this.areas.length) {
          count++
        }
        if (this.towns.length) {
          count++
        }
        return 134 * count + "px";
      },
      ...mapState({
        provinces: state=>state.public.provinces
      })
    },
  }
</script>

<style scoped lang='scss'>
  .checkArea {
    color: #000;
    position: absolute;
    font-size: 14px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    box-sizing: border-box;
    margin-top: 1px;
    border-radius: 4px;
    /*transition: all 0.3s ease 0s;*/
    background: rgb(255, 255, 255);
    left: 0;
    z-index: 9;
    /*min-width: 411px;*/
    > ul {
      float: left;
      vertical-align: top;
      min-width: 111px;
      width: 133px;
      height: 180px;
      list-style: none;
      margin: 0px;
      padding: 0px;
      border-right: 1px solid rgb(232, 232, 232);
      overflow: auto;
      border-radius: 4px;
      background: rgb(255, 255, 255);
      li {
        line-height: 22px;
        cursor: pointer;
        white-space: nowrap;
        padding: 5px 12px;
        &.active {
          background-color: rgb(244, 243, 244);
        }
      }
    }
  }

</style>
