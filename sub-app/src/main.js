import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/style/reset.styl'
import './assets/style/common.styl'
import './assets/style/font.styl'
import startQiankun from '../micro' // 引入微前端配置

Vue.use(ant)

Vue.config.productionTip = false

startQiankun() // 启动微前端
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
