<template>
  <div class="kingKong">
    <ul class='clearfix'>
      <li @click='nowPai' :style="{background:'url(' + banner[0].imgUrl + ')center center  no-repeat'}"></li>
      <li @click='newPai' :style="{background:'url(' + banner[1].imgUrl + ')center center  no-repeat'}"></li>
      <router-link :to="king[index].path" tag='li' v-for="(item,index) in banner" :style="{background:'url(' + item.imgUrl + ') center center  no-repeat'}" :key='index' v-if="index > 1">{{king[index].name}}</router-link>
    </ul>
  </div>
</template>

<script>
  import {getBanner} from '../../../api/open/attract'
  export default {
    name: "kingKong",
    data() {
      return {
        king: [
          {name: '', path: '/search'},
          {name: '', path: '/searchNew'},
          {name: '', path: '/property'},
          {name: '', path: '/allocation'},
          {name: '', path: '/albums'},
        ],
        banner: ["","","","",""],
      }
    },
    methods: {
      nowPai(){
        this.$store.commit('changeStatus', {id: "beginAuction", name: "正在拍卖"})
        window.sessionStorage.setItem('component','auctionList')
        this.$router.push({path: '/search' })
      },
      newPai(){
        window.sessionStorage.setItem('component','auctionList')
        this.$router.push({path: '/searchNew' })
      },
      getNav(){
        getBanner(5,2).then(res => {
          let data = res.data
          if (data.code === '000') {
            this.banner = data.content.list;
          } else {

          }
        }).catch(err => {
          console.log(err);
        })
      },
    },
    created() {
      this.getNav()
    },
  }
</script>

<style scoped lang='scss'>
  .kingKong {
    width: 1200px;
    margin: 20px auto;
    li {
      cursor: pointer;
      width: 200px;
      height: 260px;
      float: left;
      color: #fff;
      font-size: 25px;
      line-height: 260px;
      text-align: center;
      background-color: #000;
      margin-right: 20px;
      &:last-child{
        margin-right: 0;
        width: 320px;
      }
    }
  }

</style>
