import { createRouter, createWebHashHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'

// 增加 Catch-All Route 用來處理找不到的路由（也就是「404 頁面」的重新導向）
routes.push({
  path: '/:path(.*)',
  redirect: { name: 'home' },
})

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  // scrollBehavior: () => ({ top: 0, left: 0, behavior: 'smooth' }),
})

if (import.meta.hot) handleHotUpdate(router)
