import { createI18n } from 'vue-i18n'

// 語言代碼列表: https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes
import zhTW from './locales/zh-TW'
import en from './locales/en'
import ja from './locales/ja'

// 建立 i18n 實例
const i18n = createI18n({
  legacy: false, // 啟用 Composition API 模式
  locale: localStorage.getItem('locale') ?? navigator.language ?? 'zh-TW', // 如果 localStorage 沒有值，就用瀏覽器語言，否則用 zh-TW
  fallbackLocale: 'en', // 找不到時使用英文
  messages: {
    'zh-TW': zhTW,
    en,
    ja,
  },
})

export default i18n
