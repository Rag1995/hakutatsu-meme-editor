<route lang="yaml">
name: 'about'
meta:
  title: 'page.title.about'
  icon: 'info'
  order: 2
</route>

<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()
</script>

<template>
  <div>
    <div>
      route.meta.title: {{ route.meta.title ? t(route.meta.title) : '' }}
    </div>
  </div>
</template>
