// 一个进度条插件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { message } from 'ant-design-vue'
// 官方通信
import actions from './shared/actions'
import subjectActions from './shared/subjectActions'
// 当前版本 qiankun 对 insertBefore 处理有问题，这里先使用修改后的本地包
import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
  prefetchApps,
  initGlobalState,
  MicroAppStateActions
} from './es'
/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
// import render from './render/ReactRender'
import render from './render/VueRender'
/**
 * Step1 初始化应用（可选）
 */
// render({ loading: true })

const loader = loading => render({ loading })

subjectActions.subscribe(v => { // 在主应用注册呼机监听器，这里可以监听到其他应用的广播
  console.log(`监听到子应用${v.from}发来消息：`, v)
})
const msg = { // 结合下章主应用下发资源给子应用，将pager作为一个模块传入子应用
  // data: store.getters, // 从主应用仓库读出的数据
  // components: LibraryUi, // 从主应用读出的组件库
  // utils: LibraryJs, // 从主应用读出的工具类库
  // emitFnc: childEmit, // 从主应用下发emit函数来收集子应用反馈
  subjectActions, // 从主应用下发应用间通信呼机
  mainActions: actions
}

// 子应用注册信息
const apps = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: 'VueMicroApp',
    entry: '//localhost:10200',
    container: '#subapp-viewport',
    loader,
    activeRule: '/vue',
    props: msg
  }
]

/**
 * 注册子应用
 * 第一个参数 - 子应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
registerMicroApps(apps, {
  // qiankun 生命周期钩子 - 加载前
  beforeLoad: (app) => {
    // 加载子应用前，加载进度条
    NProgress.start()
    console.log('before load', app.name)
    return Promise.resolve()
  },
  // qiankun 生命周期钩子 - 挂载后
  afterMount: (app) => {
    // 加载子应用前，进度条加载完成
    NProgress.done()
    console.log('after mount', app.name)
    actions.setGlobalState({ token: sessionStorage.token })
    subjectActions.next({
      from: 'hhh',
      token: '但若不见你，阳光也无趣'
    })
    return Promise.resolve()
  },
  afterUnmount: app => {
    console.log('afterUnmount', app)
    // app.render({ appContent: '', loading: false })
  }
})

prefetchApps([{
  name: 'VueMicroApp',
  entry: '//localhost:10200'
}])

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event) => {
  console.error(event)
  const { message: msg } = event
  // 加载失败时提示
  if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
    message.error('子应用加载失败，请检查应用是否可运行')
  }
})

// 导出 qiankun 的启动函数
export default start
