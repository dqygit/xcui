<template>
  <div>
    <nut-navbar
      :leftShow="true"
      :rightShow="true"
      title=""
    >
      <div
        class="backs"
        slot="back-icon"
      ></div>
      <div
        class="registerTitle"
        slot="more-icon"
      >
        注册
      </div>
    </nut-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
/deep/.nut-navbar {
  height: 88px;
  line-height: 88px;
  font-size: 30px;
  .back {
    width: 22px;
    height: 22px;
    margin-left: 20px;
    transform: rotateZ(45deg);
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
  }
  .registerTitle {
    margin-right: 20px;
    color: #099fde;
  }
}
</style>
