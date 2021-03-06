<template>
  <!-- header部分 -->
  <div class="Header">
    <nut-navbar
      :leftShow="true"
      :rightShow="true"
      title=""
    >
      <a
        slot="back-icon"
        class="back"
      ></a>
      <a
        slot="more-icon"
        class="message"
      ></a>
    </nut-navbar>
    <h1 class="title">
      登录携程，开启旅程
    </h1>

    <div class="login-box">
      <nut-button
        shape="circle"
        type="default"
        color="#fff"
        @click="loginPage"
      >
        登录/注册
      </nut-button>

      <nut-button shape="circle">

        手机号查单
      </nut-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loginPage () {
      this.$router.push({ path: '/loginPage' })
    }
  }
}
</script>

<style lang="less" scoped>
.Header {
  width: 100%;
  height: 312px;
  position: relative;
  background-image: url('/login/photo_myctrip@2x_6.22.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /deep/.nut-navbar {
    height: 88px;
    line-height: 88px;
    background-color: unset;
  }
  .back {
    width: 18px;
    height: 32px;
    margin-left: 10px;
    background-image: url('/login/un_home_mobile_7.4@2x.png');
    background-size: 88px auto;
    background-position: 0 -44px;
  }
  .message {
    display: block;
    margin-right: 10px;
    width: 38px;
    height: 36px;
    background-image: url('/login/un_home_mobile_7.4@2x.png');
    background-size: 88px auto;
    background-position: -50px -180px;
  }
  .title {
    position: absolute;
    font-size: 36px;
    top: 88px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-weight: normal;
  }

  .login-box {
    width: 100%;
    height: 64px;
    position: absolute;
    top: 200px;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
  }
  /deep/.nut-button {
    width: 240px;
    height: 72px;
    border: unset;
    overflow: hidden;
  }
  .nut-button:first-child {
    background-color: #ff9a14;
  }

  .nut-button:nth-of-type(2) {
    background: rgba(255, 255, 255, 0.15);
  }
}
</style>
