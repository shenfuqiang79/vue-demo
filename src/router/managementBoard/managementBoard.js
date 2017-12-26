import managementBoard from '@/views/managementBoard/ManagementBoard'

/**
 * 后台管理主页面路由
 * 如果其他页面的路由请新建js路由文件，分开管理
 */
export const group = {
  path: '/managementBoard/group',
  icon: 'ios-folder',
  name: 'group',
  title: 'Group',
  component: managementBoard,
  children: [
    {
      path: 'page1',
      icon: 'ios-paper-outline',
      name: 'page1',
      title: 'Page1',
      component: resolve => {
        require(['@/views/group/page1/page1'], resolve)
      }
    },
    {
      path: 'page2',
      icon: 'ios-list-outline',
      name: 'page2',
      title: 'Page2',
      component: resolve => {
        require(['@/views/group/page2/page2'], resolve)
      }
    }
  ]
}
export const page = {
  path: '/managementBoard/page',
  icon: 'ios-paper',
  title: 'Page',
  name: 'page',
  component: managementBoard,
  children: [
    {
      path: 'index',
      title: 'Page',
      name: 'page_index',
      component: resolve => {
        require(['@/views/page/page.vue'], resolve)
      }
    }
  ]
}

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  group,
  page
]
