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

import { GlobalComponents } from 'vue'
declare global {
  type CompInst = {
    [Property in keyof GlobalComponents]: InstanceType<
      GlobalComponents[Property]
    >
  }
  type UnwrapReadonlyArray<T> = T extends Readonly<Array<infer U>> ? U : T
}
