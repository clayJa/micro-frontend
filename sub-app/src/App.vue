<template>
  <div id="app">
    <div class="frame-wrapper">
      <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
      <router-view v-show="$route.name" />

      <!-- 子应用渲染区，用于挂载子应用节点 -->
      <div v-show="!$route.name" id="frame"></div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'App',
  data () {
    return {
    }
  },
  watch: {
    $route () {}
  },
  computed: {
  },
  methods: {
  },
  components: {
  }
}
</script>
<style lang="stylus">
* {
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  height: 100%;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  vertical-align: top;
  border: none;
}

.clearf:after, .clearf:before {
  content: '';
  display: block;
  clear: both;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
