<script setup lang="ts">
const { t } = useI18n()
document.title = t('title')
</script>

<template>
  <AppHeader />

  <main class="min-h-[calc(100vh-3.5rem-300px)] bg-base-300">
    <RouterView />
  </main>

  <AppFooter />
</template>
