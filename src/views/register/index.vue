<template>
  <div>
    <nut-navbar
      :leftShow="true"
      title=""
      :rightShow="true"
    >
      <div
        class="backs"
        slot="back-icon"
        @click="backHandle"
      ></div>
      <div
        class="registerTitle"
        slot="more-icon"
      >
      </div>
    </nut-navbar>
    <information />
    <p>
      注册即代表您同意我们的
      <a href="#">服务协议</a>
      和
      <a href="#">隐私政策</a>
    </p>
    <nut-popup
      :style="{ padding: '30px 50px' }"
      v-model="show"
      position="bottom"
      :close-on-click-overlay="false"
    >
      <h3>
        携程用户注册协议和隐私政策
      </h3>
      <div
        class="register-bd"
        ref="pTitle"
      >
        <div>
          <p>
            亲爱的用户，在您注册为携程用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署携程《服务协议》和《隐私政策》，
            <b>请您务必仔细阅读、充分理解协议中的条款内容后再点击同意，尤其是加粗字体。</b>
          </p>
          <p>
            <b>【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。如果您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容。</b>
          </p>
          <p>
            <b>
              点击同意即代表您已阅读并同意携程
              <a href="#">《服务协议》</a>
              和
              <a
                href="#"
                id=""
              >《隐私政策》</a>
              ，并同意我们将您的订单信息共享给为完成此订单所必须的第三方合作方。
            </b>
          </p>
        </div>

      </div>
      <div class="register-btn">
        <nut-button
          type="default"
          @click="noAgree"
        >
          不同意
        </nut-button>
        <nut-button
          type="default"
          color="#fff"
          @click="agree"
        >
          同意并继续
        </nut-button>
      </div>
    </nut-popup>

  </div>
</template>

<script>
import information from './pages/Information'
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      show: true
    }
  },
  components: {
    information
  },
  methods: {
    backHandle () {
      this.$router.go(-1)
    },
    noAgree () {
      this.$router.go(-1)
    },
    agree () {
      this.show = false
    }
  },
  mounted () {
    this.$nextTick(() => {
      console.log('enter')
      /* eslint-disable no-new */
      new BScroll(this.$refs.pTitle, {
        click: true
      })
    })
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
}
p {
  text-align: center;
  overflow: hidden;
  color: #999;
  font-size: 26px;
  margin-top: 50px;
  a {
    color: #099fde;
  }
}
/deep/.popup-box {
  height: 856px;
  padding: 0px !important;
  h3 {
    font-size: 34px;
    height: 96px;
    text-align: center;
    margin: 0;
    line-height: 96px;
    font-weight: 700;
    border-bottom: 1px solid #f1f1f1;
    color: #333;
    font-family: Arial, 'Lucida Grande', Verdana, 'Microsoft YaHei', hei;
  }
}
.register-bd {
  width: 690px;
  height: 650px;
  overflow: hidden;
  margin: 0 auto;
}

.register-btn {
  height: 88px;
  width: 100%;

  display: flex;
}

/deep/.nut-button {
  flex: 1;
  height: 108px;
  border: unset;
  border-top: 1px solid #f1f1f1;
  &:nth-of-type(2) {
    background-color: #ff9913;
  }
}

.register-bd {
  p {
    text-align: unset;
    color: #333;
    font-size: 30px;
    line-height: 1.7;
    letter-spacing: 2px;
    text-indent: 2em;
  }
}
</style>
