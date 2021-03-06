<template>
  <div class="login">
    <Header />
    <Main />
    <Commoninfo />
  </div>
</template>

<script>
import Header from './pages/Header.vue'
import Main from './pages/Main.vue'
import Commoninfo from './pages/Commoninfo'
export default {
  components: {
    Header,
    Main,
    Commoninfo
  }
}
</script>

<style lang="less" scoped>
</style>
