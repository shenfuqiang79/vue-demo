// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css'
import util from '@/libs/util'
import store from './store'
import {LoadingBar, Button, Row, Col, Menu, MenuItem, Submenu,
  Icon, Breadcrumb, BreadcrumbItem, Dropdown, DropdownMenu, DropdownItem, Avatar} from 'iview'

Vue.config.productionTip = false

// 全局注册iview组件，按需注册加载
Vue.component('Button', Button)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('Submenu', Submenu)
Vue.component('Icon', Icon)
Vue.component('Breadcrumb', Breadcrumb)
Vue.component('BreadcrumbItem', BreadcrumbItem)
Vue.component('Dropdown', Dropdown)
Vue.component('DropdownMenu', DropdownMenu)
Vue.component('DropdownItem', DropdownItem)
Vue.component('Avatar', Avatar)

// 页面顶部加载进度条
router.beforeEach((to, from, next) => {
  LoadingBar.start()
  util.title(to.meta.title)
  next()
})
router.afterEach((to) => {
  LoadingBar.finish()
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  mounted () {
    this.$store.commit('updateMenulist')
  }
})
