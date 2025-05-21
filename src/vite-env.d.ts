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

declare module '*.yaml' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any
  export default content
}

import { FabricObject } from 'fabric'

declare module 'fabric' {
  // to have the properties recognized on the instance and in the constructor
  interface FabricObject {
    id?: number
  }
  // to have the properties typed in the exported object
  interface SerializedObjectProps {
    id?: number
  }
}

// to actually have the properties added to the serialized object
FabricObject.customProperties = ['id']
