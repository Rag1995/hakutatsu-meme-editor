import { createI18n } from 'vue-i18n'

// 語言代碼列表: https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes
import messages from '@intlify/unplugin-vue-i18n/messages'

// 建立 i18n 實例
const i18n = createI18n({
  locale: localStorage.getItem('locale') ?? navigator.language ?? 'zh-TW', // 如果 localStorage 沒有值，就用瀏覽器語言，否則用 zh-TW
  fallbackLocale: 'en', // 找不到時使用英文
  messages,
})

export default i18n
