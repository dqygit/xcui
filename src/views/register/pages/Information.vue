<template>
  <div class="information">
    <h2 class="title">请输入用户信息</h2>
    <input
      type="text"
      placeholder="请输入用户名"
      v-model="username"
    >
    <span></span>
    <input
      type="password"
      placeholder="请输入密码"
      v-model="password"
    >
    <span></span>
    <input
      type="text"
      placeholder="请输入手机号"
      v-model="phone"
    >
    <span></span>
    <nut-button
      :block="true"
      color="#fff"
      type="default"
      @click="register"
    >
      注册
    </nut-button>

  </div>
</template>

<script>
import requset from '../../../utils/network'

export default {
  data () {
    return {
      username: '',
      password: '',
      phone: ''
    }
  },
  methods: {
    register () {
      const that = this
      requset({
        url: '/register',
        methods: 'get',
        params: {
          name: that.username,
          password: that.password,
          phone: that.phone
        }
      })
    }
  }

}
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  text-align: center;
  font-size: 50px;
  margin-top: 100px;
  font-weight: 300;
  color: #333;
}
.information {
  width: 540px;
  margin: 0 auto;
}
input:nth-of-type(1) {
  overflow: hidden;
  margin-top: 30px;
}
input {
  height: 54px;
  width: 100%;
  outline: none;
  border: unset;
}
span {
  display: block;
  width: 100%;
  height: 1px;
  background-color: #333;
  margin: 30px 0px;
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
</style>
