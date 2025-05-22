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

<template>
  <label
    role="button"
    :aria-label="
      isDark ? t('buttons.toggleLightMode') : t('buttons.toggleDarkMode')
    "
    class="btn !swap btn-square swap-rotate btn-ghost max-sm:btn-sm"
  >
    <input v-model="isDark" type="checkbox" />
    <i class="swap-off i-famicons-sunny" />
    <i class="swap-on i-famicons-moon" />
  </label>
</template>
