<template>
  <div class="home">
    <a-button type="primary" @click="push('/vue')">点我进入子应用</a-button>
  </div>
</template>

<script>
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
