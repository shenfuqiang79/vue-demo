import Vue from 'vue'
import Router from 'vue-router'
import IviewTestPage from '@/components/IviewTestPage'
import Skeleton from '@/components/Skeleton'
import MultiMenu from '@/components/MultiMenu'
import managementBoard from '@/views/managementBoard/ManagementBoard'
import { routers } from './managementBoard/managementBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/iviewtest'
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
    },
    {
      path: '/managementBoard',
      component: managementBoard
    },
    ...routers
  ]
})
