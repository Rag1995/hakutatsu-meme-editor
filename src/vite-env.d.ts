/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

import 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    icon?: string
    order?: number
  }
}
