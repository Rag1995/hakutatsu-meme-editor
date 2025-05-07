<script setup lang="ts">
const { t, locale } = useI18n()

const items = shallowRef([
  { label: '繁體中文', value: 'zh-TW' },
  { label: '日本語', value: 'ja' },
  { label: 'English', value: 'en' },
])

const setLocale = (lang: string) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}

watch(
  locale,
  (newLocale) => {
    document.documentElement.lang = newLocale
  },
  { immediate: true },
)
</script>

<template>
  <div class="dropdown dropdown-end">
    <div
      tabindex="0"
      role="button"
      :aria-label="t('aria.changeLanguage')"
      class="btn btn-square btn-ghost"
    >
      <FlowbiteLanguageOutline />
    </div>
    <!-- dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 h-[30.5rem] max-h-[calc(100vh-8.6rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline-1 outline-black/5 -->
    <div
      tabindex="0"
      class="dropdown-content w-36 overflow-y-auto rounded-box border border-base-content/10 bg-base-200 text-base-content shadow-2xl"
    >
      <ul class="menu w-full gap-1 menu-sm">
        <li v-for="{ label, value } in items" :key="value">
          <button
            :class="{ 'menu-active': locale === value }"
            @click="setLocale(value)"
          >
            {{ label }}
          </button>
        </li>
      </ul>
    </div>
  </div>

  <!-- <Button
    icon="pi pi-language"
    severity="secondary"
    aria-haspopup="true"
    aria-controls="language-menu"
    @click="toggle"
  />
  <Menu id="language-menu" ref="menu" :model="items" popup /> -->
</template>
