<template>
  <div class="home">
    <a-button type="primary" @click="push('/')">我是子应用，点我回到主应用</a-button>
    <div>官方通讯------> Token: {{token}}</div>
    <div>rxjs通讯------> RXjs Token: {{rxjsToken}}</div>
  </div>
</template>

<script>
import actions from '../../micro/shared/actions'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      token: null,
      rxjsToken: null
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
    // 注册观察者函数
    // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
    actions.onGlobalStateChange((state, prev) => {
      const { token } = state
      // 未登录 - 返回主页
      if (!token) {
        this.$message.error('未检测到登录信息！')
        this.push('/')
      }
      this.token = token
    }, true)
  },
  methods: {
    push (subapp) { history.pushState(null, subapp, subapp) }
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
