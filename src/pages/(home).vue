<route lang="yaml">
name: 'home'
meta:
  title: 'page.title.home'
  icon: 'home'
  order: 1
</route>

<script setup lang="ts">
const route = useRoute()
const { locale, t } = useI18n()

const onChange = (e: Event) => {
  const target = e.target as HTMLSelectElement
  const value = target.value
  locale.value = value
  localStorage.setItem('locale', value)

  console.log('locale', localStorage.getItem('locale'))
}
</script>

<template>
  <h1>
    {{ route.meta.title }} => {{ route.meta.title ? t(route.meta.title) : '' }}
  </h1>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div>
    <div>Current Locale: {{ locale }}</div>
    <div>greeting: {{ t('greeting') }}</div>
    <div>farewell: {{ t('farewell') }}</div>
    <select v-model="locale" @change="onChange">
      <option value="zh-TW">繁體中文</option>
      <option value="en">English</option>
      <option value="ja">日本語</option>
    </select>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
