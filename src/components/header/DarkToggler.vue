<script setup lang="ts">
const { t } = useI18n()

const isDark = useDark({
  selector: 'html',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light',
  storageKey: 'data-theme',
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    :aria-label="isDark ? t('aria.toggleLightMode') : t('aria.toggleDarkMode')"
    class="btn btn-square btn-ghost"
    @click="toggleDark()"
  >
    <LineMdSunnyFilledLoopToMoonFilledTransition v-if="isDark" />
    <LineMdMoonFilledToSunnyFilledTransition v-else />
  </button>
</template>
