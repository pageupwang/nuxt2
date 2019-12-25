<template>
  <div class="kingKong">
    <ul class='clearfix'>
      <li
        @click='nowPai(item.id)'
        v-for="(item,index) in banner"
        :key='index'
      >
        <img :src=" item.imgUrl" alt="" style='width: 100%;height: 100%;'>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "kingKong",
    data() {
      return {
        banner: [],
      }
    },
    methods: {
      nowPai(id) {
        this.$store.dispatch('changeSearchComponent', 'allSearch')
        this.$store.commit('SET_POSTER_ID', id)
        this.$router.push({path: '/auctioning', query: {id: id}})
      },
      getPoster() {
        this.$axios.get('/open/activity/poster/list').then(res => {
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
      this.getPoster()
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
      height: 200px;
      float: left;
      margin-right: 20px;
      &:last-child {
        width: 320px;
        margin-right: 0;
      }
      
    }
  }

</style>
