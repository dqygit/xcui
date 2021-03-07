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
    <div class="loginIcon">
      <nut-row>
        <nut-col :span="8">
          <div class=" login-third">
            <i class="qq-icon"></i>
          </div>
        </nut-col>
        <nut-col :span="8">
          <div class="login-third">
            <i class="baidu-icon"></i>
          </div>
        </nut-col>
        <nut-col :span="8">
          <div class="qq-icon login-third">
            <i class="weibo-icon"></i>
          </div>
        </nut-col>
      </nut-row>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.Info {
  width: 650px;
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
.loginIcon {
  width: 100%;
  height: 88px;

  margin-top: 80px;
  .login-third {
    width: 78px;
    height: 78px;

    margin: 0 auto;
    border-radius: 50%;
    border: 1px solid rgba(87, 196, 94, 0.6);
    margin-top: 5px;
    position: relative;
    i {
      position: absolute;
      display: block;
      width: 43px;
      height: 40px;

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: url('/login/73.png');
      background-size: 46px auto;
    }
  }
}
.qq-icon {
  background-position: 0 -40px;
}
.baidu-icon {
  background-position: 0 -80px;
}
.weibo-icon {
  background-position: 0 -120px;
}
</style>
