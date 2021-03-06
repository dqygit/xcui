<template>
  <div class="Info">
    <input
      type="text"
      placeholder="请输入用户名"
    >
    <span></span>
    <input
      type="password"
      placeholder="请输入密码"
    >
    <span></span>
    <nut-button
      @click="clickHandler"
      :disabled='disabled'
      :block="true"
      color="#fff"
      type="default"
    >
      登录
    </nut-button>
    <p class="loginMethod">
      <a href="#">
        账号密码登录
      </a>
      <a href="#">
        境外手机登录
      </a>
    </p>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.Info {
  width: 650px;
  height: 100px;

  margin: 150px auto;

  input {
    height: 54px;
    width: 650px;
    outline: none;
    border: unset;
  }
  span {
    display: block;
    width: 100%;
    height: 1px;
    background-color: #333;
    margin: 58px 0px;
  }
}
/deep/.nut-button {
  overflow: hidden;
  margin-top: 20px;
  height: 88px;
  font-size: 37px;
  background-color: #ff9a14 !important;
  border: unset;
  border-radius: 8px;
}
.loginMethod {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  a {
    color: #666666;
  }
}
</style>
