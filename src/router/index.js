import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IviewTestPage from '@/components/IviewTestPage'
import Skeleton from '@/components/Skeleton'
import MultiMenu from '@/components/MultiMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/iviewtest',
      name: 'IviewTestPage',
      component: IviewTestPage
    },
    {
      path: '/skeleton',
      name: 'Skeleton',
      component: Skeleton
    },
    {
      path: '/multiMenu',
      component: MultiMenu
    }
  ]
})
