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
        @click="backHandle"
      ></div>
      <div
        class="registerTitle"
        slot="more-icon"
        @click="registerHandle"
      >
        注册
      </div>
    </nut-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    registerHandle () {
      this.$router.push({
        path: '/register'
      })
    },
    backHandle () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.nut-navbar {
  height: 88px;
  line-height: 88px;

  .back {
    width: 22px;
    height: 22px;
    margin-left: 20px;
    transform: rotateZ(45deg);
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    .backs {
      width: 100%;
      height: 100%;
    }
  }
  .registerTitle {
    font-size: 30px;
    margin-right: 20px;
    color: #099fde;
  }
}
</style>
