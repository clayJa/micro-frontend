<template>
  <div class="home">
    <a-button type="primary" @click="push('/vue')">点我进入子应用</a-button>
    <a-button type="primary" @click="login">点我登录并进入子应用</a-button>
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
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
    // 注册一个观察者函数
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log('主应用观察者：token 改变前的值为 ', prevState.token)
      console.log('主应用观察者：登录状态发生改变，改变后的 token 的值为 ', state.token)
    })
  },
  methods: {
    push (subapp) { history.pushState(null, subapp, subapp) },
    login () {
      const token = Math.random()
      sessionStorage.setItem('token', token)
      actions.setGlobalState({ token })
      this.push('/vue')
    }
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
