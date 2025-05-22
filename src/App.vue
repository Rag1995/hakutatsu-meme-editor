<script setup lang="ts">
const { t } = useI18n()
document.title = t('title')
</script>

<template>
  <RouterView />
</template>
