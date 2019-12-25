<template>
  <div class="product-frame">
    <nuxt-link to="/meansShop" target="_blank"class="product-item">
      <div class="item-img">
        <img src="../../../../deve/default/default/360pai/src/assets/img/exercise/icon.jpg" alt="">
      </div>
      <div class="item-name">360资产小店</div>
      <div class="item-word">免费添加"资产"，享多重佣金分润，NPL行业人士专属个人资产店铺</div>
    </nuxt-link>
    <nuxt-link to="/contractShop" target="_blank"class="product-item">
      <div class="item-img">
        <img src="../../../../deve/default/default/360pai/src/assets/img/exercise/icon2.jpg" alt="">
      </div>
      <div class="item-name">赢回来合同商城</div>
      <div class="item-word">拟合同就上WIN合同商城，提供上万份、二十余大类专业合同模板</div>
    </nuxt-link>
    <nuxt-link to="/numberJump" target="_blank"class="product-item">
      <div class="item-img">
        <img src="../../../../deve/default/default/360pai/src/assets/img/exercise/icon3.jpg" alt="">
      </div>
      <div class="item-name">360数字跳动</div>
      <div class="item-word">投资收益智能管理神器，智能计算债权投资收益率、监控本息回款额、预警处置时间节点</div>
    </nuxt-link>
    <a href="https://www.360aidata.com/assessMap" target="_blank"class="product-item">
      <div class="item-img">
        <img src="../../../../deve/default/default/360pai/src/assets/img/exercise/icon4.jpg" alt="">
      </div>
      <div class="item-name">360估价地图</div>
      <div class="item-word">一站式解决价值估值，提供全国全方位精准的价格数据维度，大幅提高工作效率</div>
    </a>
    <a href="https://www.360aidata.com/brief" target="_blank"class="product-item">
      <div class="item-img">
        <img src="../../../../deve/default/default/360pai/src/assets/img/exercise/icon4.jpg" alt="">
      </div>
      <div class="item-name">360法数</div>
      <div class="item-word">属地化尽调、处置效率提升，投前、投中可控，增加跨区投资可能性</div>
    </a>
    <nuxt-link to="/steward" target="_blank"class="product-item">
      <div class="item-img">
        <img src="../../../../deve/default/default/360pai/src/assets/img/exercise/icon4.jpg" alt="">
      </div>
      <div class="item-name">360楼管家</div>
      <div class="item-word">采集、分析楼宇企业经营数据，提升资产管理效率，提高物管运营收益</div>
    </nuxt-link>
  </div>
</template>

<script>
    export default {
        name: "exercise"
    }
</script>

<style scoped lang='scss'>
  .product-frame{
    overflow: hidden;
  }
  .product-frame .product-item{
    cursor: pointer;
    float: left;
    width: 135px;
    height: 258px;
    box-sizing: border-box;
    padding: 20px 13px 0;
    border-right: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    background-color: #fff;
  }
  .product-frame .product-item .item-img{
    width: 70px;
    margin: 0 auto;
    height: 60px;
    overflow: hidden;
  }
  .product-frame .product-item .item-img img{
    width: 70px;
    height: 60px;
    display: block;
  }
  .product-frame .product-item .item-name{
    font-size: 14px;
    color: #333;
    text-align: center;
    line-height: 16px;
    padding: 25px 0 20px;
  }
  .product-frame .product-item .item-word{
    font-size: 12px;
    color: #808080;
    line-height: 16px;
  }
</style>
