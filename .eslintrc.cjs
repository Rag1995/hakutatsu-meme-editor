module.exports = {
  env: {
    es6: true, // 啟用 ECMAScript 6 的全局變量和語法 (例如: let、const、箭頭函數等)
    browser: true, // 啟用瀏覽器環境的全局變量 (例如: window、document)
    node: true, // 啟用 Node.js 環境的全局變量 (例如: process、__dirname)
  },
  parserOptions: {
    ecmaVersion: '2020', // 指定 ECMAScript 的版本為 2020 (支持最新的語法特性，例如可選鏈接 ?. 和空值合併操作符 ??)
    sourceType: 'module', // 指定代碼使用 ES 模塊 (import/export) 語法
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser', // 使用 vue-eslint-parser 來解析 Vue 文件
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    curly: ['error', 'multi-or-nest'], // 允許單行語句省略大括號 (例如: if 語句)
    '@typescript-eslint/consistent-type-imports': 'off', // 關閉一致的型別引入
    '@typescript-eslint/no-empty-object-type': 'error', // 禁止使用空的物件型別 (例如: {})
    'vue/multi-word-component-names': 'error', // 要求元件名稱必須由多個單字組成
    // 禁止未使用的變數，但是允許使用 _ 開頭的變數
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always', // 沒有內容的標籤如 <br> 總是自閉合
          normal: 'always', // 正常的 HTML 標籤如 <div> 總是自閉合
          component: 'always', // 自訂元件標籤總是自閉合
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true, // 允許修飾符 (例如: <template v-slot:default.prop>)
      },
    ],
    // 元件名稱必須使用大駝峰式命名法
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
      },
    ],
  },
}
