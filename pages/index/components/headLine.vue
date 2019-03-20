<template>
  <div class="astrict">
    <headItem v-for="(item,index) in newData" :newData="item" :key='index' :detail="item"></headItem>
  </div>

</template>
<script>
  import headItem from './headItem'
  import {headline} from '../../../api/open/property'
  
  export default {
    name: "headLine",
    data() {
      return {
        newData: [],
      }
    },
    components: {
      headItem
    },
    methods: {
      getList() {
        let para = {
          type: '1',
        }
        headline(para).then(res => {
          let data = res.data
          if (data.code === '000') {
            this.newData = data.content
          }
        }).catch(err => {
          console.log(err);
        })
      },
    },
    created() {
      this.getList()
    },
  }
</script>

<style scoped lang='scss'>
  .astrict {
    overflow: hidden;
  }
</style>
