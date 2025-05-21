import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import tailwindcss from '@tailwindcss/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    VueRouter({
      extensions: ['.vue', '.md'],
      routesFolder: ['src/pages'],
      /* options */
    }),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      include: [
        /\.[tj]sx?$/, // .ts, .tsx .js, .jsx
        /\.vue$/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue', // Vue 3
        VueRouterAutoImports,
        'vue-i18n',
        '@vueuse/core',
        'pinia',
        { from: 'vue', imports: ['ShallowRef', 'Ref'], type: true },
      ],
      /* options */
    }),
    Components({
      directoryAsNamespace: false, // 資料夾名稱作為命名空間
      collapseSamePrefixes: true, // 相同前綴的命名空間合併
      dts: 'src/vue-components.d.ts', // 自動生成的 TypeScript 定義檔
      dirs: ['src/components'], // 自動導入的資料夾
      resolvers: [], // 自定義解析器
      /* options */
    }),
    VueI18nPlugin({
      /* options */
      // locale messages resource pre-compile option
      include: [resolve(__dirname, './src/i18n/locales/**')],
    }),
  ],
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, './src')}/`,
      '@img/': `${resolve(__dirname, './src/assets/img')}/`,
    },
    extensions: ['.vue', '.js', '.ts'],
  },
  optimizeDeps: {
    include: ['gif.js'], // 強制優化 gif.js
  },
})
