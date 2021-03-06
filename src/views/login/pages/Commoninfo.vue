<template>
  <div>
    <nut-navbar
      :leftShow="true"
      :rightShow="true"
      title=""
      v-for="(item,index) in dataTitle"
      :key="index"
    >
      <a
        slot="left"
        class="left"
      >
        {{item.Title}}
      </a>
      <a
        slot="right"
        class="right"
      > {{item.em}}</a>
      <a slot="back-icon"></a>
      <div
        slot="more-icon"
        class="rightIcon"
      >
        <nut-icon
          color="#99a2c2"
          type="right"
        >
        </nut-icon>
      </div>
    </nut-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataTitle: [
        {
          Title: '常用信息',
          em: '旅客/地址/发票抬头'
        }, {
          Title: '我的收藏',
          em: '降价产品有提醒'
        }, {
          Title: '浏览历史',
          em: '近15天访问记录'
        }, {
          Title: '我要合作',
          em: '供应商加盟/代理合作'
        }
      ]

    }
  }
}
</script>

<style lang="less" scoped>
/deep/.nut-navbar {
  height: 98px !important;
  line-height: 98px;
  border-bottom: 1px solid #efefef;
  .nav-right {
    display: flex;
    align-items: center;
  }
}
.rightIcon {
  display: flex;
  align-items: center;
}
.left {
  display: block;
  font-size: 32px;
  margin-left: 20px;
}

.right {
  font-size: 26px;
  color: #99a2c2;
}
</style>
