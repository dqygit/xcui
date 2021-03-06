<template>
  <div>
    <div class="goWallet">
      <div class="wallentIcon">
      </div>
      <div class="wallent">
        <div class="top">钱包</div>

        <div class="down">
          <div>礼品卡</div>
          <div>现金</div>
          <div>返现</div>
        </div>
      </div>
    </div>
    <nut-row type="flex">
      <nut-col
        :span="8"
        class="list-code"
      >
        <div><i></i> 优惠卷</div>
        <div>领卷</div>
      </nut-col>
      <nut-col
        :span="8"
        class="list-code center"
      >
        <div><i></i> 积分</div>
        <div>兑好礼</div>
      </nut-col>
      <nut-col
        :span="8"
        class="list-code iLast"
      >
        <div><i></i> 拿去花</div>
        <div>分期付款</div>
      </nut-col>
    </nut-row>
    <div class="line"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.goWallet {
  width: 100%;
  height: 146px;

  display: flex;
  padding: 22px, 20px, 20px, 32px;
  .wallentIcon {
    width: 40px;
    height: 40px;
    // background-color: red;
    margin-left: 32px;
    margin-top: 20px;
    background-image: url('/login/un_home_mobile_7.4@2x.png');
    background-position: 0 -80px;
    background-size: 88px auto;
  }
  .wallent {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    .top {
      font-size: 32px;
      margin-left: 20px;
      // color: #999999;
    }
    .down {
      font-size: 30px;
      margin-left: 20px;
      margin-top: 18px;
      display: flex;
      flex-direction: row;
      color: #999999;
      div {
        margin-right: 25px;
        + div {
          padding-left: 25px;
          border-left: 1px solid #999999;
        }
      }
    }
  }
  border-bottom: 1px solid #efefef;
}

.list-code {
  display: flex;
  flex-direction: column;
  height: 126px;
  border-bottom: 1px solid #efefef;
  justify-content: center;
  align-items: center;
  :nth-of-type(1) {
    font-size: 30px;
    position: relative;
    display: flex;
    color: #333333;
    i {
      display: block;
      width: 40px;
      height: 40px;

      margin-right: 10px;
      background-image: url('/login/un_home_mobile_7.4@2x.png');
      background-size: 88px auto;
      background-position: 0 -120px;
    }
  }
  :nth-of-type(2) {
    font-size: 26px;
    color: #999;
    margin-top: 10px;
  }
}

.center {
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
  div {
    :nth-of-type(1) {
      background-position: 0 -220px;
    }
  }
}
.iLast {
  div {
    :nth-of-type(1) {
      background-position: -40px -300px;
    }
  }
}
.line {
  width: 100%;
  height: 20px;
  background-color: #efefef;
}
</style>
