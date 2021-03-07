<template>
  <div>
    <Header />
    <h2 class="title">用户快捷登录</h2>
    <Info />

  </div>
</template>

<script>
import Header from './pages/Header'
import Info from './pages/Info'

export default {
  components: {
    Header,
    Info
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
</style>
