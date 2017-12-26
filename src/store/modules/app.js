import {routers} from '@/router/managementBoard/managementBoard'

const app = {
  state: {
    menuList: [],
    routers: [
      ...routers
    ]
  },
  mutations: {
    updateMenulist (state, authorRouter) {
      state.menuList = routers
    }
  }
}

export default app
