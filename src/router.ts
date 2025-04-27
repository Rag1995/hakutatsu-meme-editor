import { createRouter, createWebHashHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  // scrollBehavior: () => ({ top: 0, left: 0, behavior: 'smooth' }),
})

if (import.meta.hot) handleHotUpdate(router)
