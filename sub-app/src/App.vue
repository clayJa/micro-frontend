<template>
  <div id="app">
      <router-view />
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
