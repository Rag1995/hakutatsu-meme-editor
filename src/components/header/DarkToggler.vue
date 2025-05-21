<script setup lang="ts">
const { t } = useI18n()

const isDark = useDark({
  selector: 'html',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light',
  storageKey: 'data-theme',
})
</script>

<i18n lang="yaml">
zh-TW:
  toggleLightMode: '切換為淺色模式'
  toggleDarkMode: '切換為深色模式'
en:
  toggleLightMode: 'Switch to light mode'
  toggleDarkMode: 'Switch to dark mode'
ja:
  toggleLightMode: 'ライトモードに切り替え'
  toggleDarkMode: 'ダークモードに切り替え'
</i18n>

<template>
  <label
    role="button"
    :aria-label="isDark ? t('toggleLightMode') : t('toggleDarkMode')"
    class="btn !swap btn-square swap-rotate btn-ghost"
  >
    <input v-model="isDark" type="checkbox" />
    <i class="swap-off i-famicons-sunny" />
    <i class="swap-on i-famicons-moon" />
  </label>
</template>
