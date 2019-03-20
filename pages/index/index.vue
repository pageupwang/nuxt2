<template>
  <div id="index">
    <ul>
      <li v-for="(item,index) in navList" :key='index'>12</li>
    </ul>
  </div>
</template>

<script>
  import axios from '../../plugins/axios'
  export default {
    async asyncData () {
      let [navs,sessions]= await Promise.all([
        axios.get(`/rest-web/open/nav`),
        axios.get(`/rest-web/open/album/sticky/list`)
      ])
      //   this.navList = data.content;
      //     this.attractTitle = data.content.enrolling_hall_type;
      //     this.attractChecked = this.attractTitle[0].id;
      //     this.getAttractMain(this.attractChecked);
      // console.log(navs);
      // let navs=data
      return {
        navList:navs.data.content,
        attractTitle:navs.data.content.enrolling_hall_type,
        attractChecked:navs.data.content.enrolling_hall_type[0].id,
        session:sessions.data.content.list,
      }
    },
    name: "index",
    data() {
      return {
      
      }
    },
    components:{
    },
    mounted(){

    },
    methods:{
    
    },
    created(){
    
    },
  }
</script>

<style scoped lang='scss'>
  #index{
    min-width: 1200px;
    .mian{
      width: 1200px;
      margin: 0 auto;
    }
    .auction{
      width: 1200px;
      margin: 0 auto;
      .auction-tit{
        padding: 40px 0 21px;
        overflow: hidden;
        .auction-tit-l{
          width: 790px;
        }
        
        .auction-tit-r{
          width: 410px;
          text-align: center;
          font-size: 33px;
          color: #161616;
        }
      }
      .auction-main{
        overflow: hidden;
        background-color: #fff;
        .auction-lf{
          float: left;
          width: 790px;
        }
        .auction-rg{
          float: left;
          width: 396px;
          padding-left: 14px;
        }
      }
      .bank-frame{
        overflow: hidden;
        .bank-item{
          float: left;
          margin-right: 2px;
          width: 298px;
          background-color: #fff;
          text-align: center;
          >img{
          
          }
        }
      }
    }
    .frame-center{
      width: 1200px;
      margin: 40px auto 0;
    }
    .auction-frame{
      .auction-main{
        margin-top: 20px;
        height: 640px;
        background-color: #fff;
        overflow: hidden;
        .auction-lf{
          width: 240px;
          height: 2px;
        }
        .auction-center{
          padding-left: 10px;
          width: 750px;
          height: 2px;
          .auction-frame{
            .auction-tit{
              padding:0 0 10px 10px;
              overflow: hidden;
              >p{
                float: left;
                height: 56px;
                line-height: 56px;
                font-size: 17px;
                border-bottom: 3px solid transparent;
                text-align: center;
                width: 243.33px;
                cursor: pointer;
              }
              .active{
                color: #d41723;
                border-bottom-color: #d41723;
              }
            }
            .auction-item{
              overflow: hidden;
            }
          }
        }
        .auction-rg{
          width: 200px;
        }
      }
    }
    .omen-frame{

    }
    .service-frame{
      .service-main{
        margin-top: 20px;
        background-color: #fff;
        overflow: hidden;
        .service-lf{
          float: left;
          width: 240px;
          .service-img{
            height: 610px;
            position: relative;
            >img{
              width: 100%;
              height: 100%;
              display: block;
            }
            >span{
              position: absolute;
              top: 0;
              left: 0;
              text-align: center;
              width: 100%;
              height: 49px;
              background-color: rgba(0,0,0,0.7);
              line-height: 49px;
              font-size: 21px;
              color: #fff;
            }
            .service-btn{
              position: absolute;
              text-align: center;
              height: 40px;
              line-height: 40px;
              font-size: 17px;
              color: #fff;
              background-color: rgba(212,23,35,.7);
              margin-top: 5px;
              display: block;
              width: 95%;
              left: 50%;
              transform: translateX(-50%);
              bottom: 52px;
            }
            .service-blue{
              background-color: rgba(29,66,153,.7);
              bottom: 6px;
            }
          }
          
        }
        .service-rg{
          float: left;
          padding-left: 3px;
          width: 957px;
          height: 610px;
          overflow: hidden;
        }
      }
    }
    .headlines-frame{
      .new-main{
        background-color: #fff;
        padding: 0 15px 20px ;
        overflow: hidden;
        margin-top: 20px;
      }
    }
    .slides{
      >.slides-item{
        margin-bottom: 6px;
        position: relative;
        >a,span{
          cursor: pointer;
          display: block;
          width: 50px;
          height: 50px;
          padding: 6px 10px;
          background-color: #fff;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          color: #666;
          font-size: 14px;
          line-height: 1.3;
        }
        .code{
          position: absolute;
          width: 120px;
          height: 120px;
          top: 0;
          left: -130px;
          display: none;
          transform: translateY(-28%);
        }
      }
      .slides-code:hover{
        .code{
          display: block!important;
        }
      }
    }
  }

</style>
