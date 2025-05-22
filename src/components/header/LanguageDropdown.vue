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
    document.title = t('title')
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
      :aria-label="t('buttons.changeLanguage')"
      class="btn btn-square btn-ghost max-sm:btn-sm"
    >
      <i class="i-famicons-language" />
    </div>
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
            <span aria-hidden="true" class="font-mono font-black opacity-40">
              {{ value.slice(0, 2).toUpperCase() }}
            </span>
            {{ label }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
