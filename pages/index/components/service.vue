<template>
  <div class="service-center">
    <div class="service-top">
      <div class="service-line "
           v-for="(item,index) in tab"
           :key='index'
           @click='tabs(item.id)'
           :class='{"service-active":item.id==activeId}'
      >
        {{item.name}}
      </div>
      <router-link to="/disposalServices" class="service-more fl">更多></router-link>
    </div>
    <div class="service-word-f">
      <div class="service-word">
        <noData v-if="list.length<=0" message='暂无处置服务'></noData>
        <serviceItem v-else :style="{margin: index>0&&(index+1)%4==0?0:''}" v-for="(item,index) in list" :key='index'
                     :detail='item'></serviceItem>
      </div>
    </div>
  </div>
</template>

<script>
  import noData from '../../../components/noData'
  import serviceItem from './serviceItem'
  import {getDisposalRequirementList} from '../../../api/open/disposalServices'
  import {checkCity} from '../../../assets/js/tools'

  export default {
    name: "service",
    data() {
      return {
        tab: [
          {name: '全部类型', id: 0},
          {name: '尽职调查', id: 10},
          {name: '资产评估', id: 11},
          {name: '司法处置', id: 12},
          {name: '执行处置', id: 13},
          {name: '清房', id: 14},
          {name: '催收', id: 15},
          {name: '查找线索', id: 16},
        ],
        activeId: 0,
        list: [],
      }
    },
    methods: {
      tabs(id) {
        this.activeId = id
        this.getList()
      },
      getList() {
        let para = {
          disposalType: this.activeId || '',
          cityId: '',
          orderBy: '',
          page: 1,
          perPage: 8,
        }
        getDisposalRequirementList(para).then(res => {
          let data = res.data
          if (data.code === '000') {
            this.list = data.content.list
            for (let i = 0; i < this.list.length; i++) {
              this.list[i].city = checkCity(this.list[i].cityId)
            }
          }
        }).catch(err => {
          console.log(err);
        })
      },
    },
    created() {
      this.getList()
    },
    components: {
      serviceItem,
      noData
    },
  }
</script>

<style scoped lang='scss'>
  .service-center {
    .service-top {
      overflow: hidden;
      padding-left: 10px;
      .service-line {
        float: left;
        font-size: 16px;
        color: #666;
        height: 47px;
        line-height: 47px;
        border-bottom: 3px solid transparent;
        width: 110px;
        text-align: center;
        cursor: pointer;
      }
      .service-active {
        color: #d41723;
        border-bottom-color: #d41723;
      }
      .service-more {
        height: 47px;
        line-height: 47px;
        margin-left: 12px;
        font-size: 16px;
        color: #666;
      }
    }
    .service-word-f {
      .service-word {
        overflow: hidden;
      }
    }
  }
</style>
