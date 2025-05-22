<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header
    class="sticky top-0 right-0 left-0 z-900 bg-base-100/80 shadow-md backdrop-blur-sm"
  >
    <div class="container flex h-14 items-center">
      <div class="flex gap-1 text-xl font-black">
        <i
          class="i-icon-park-outline-aquarius shrink-0 scale-x-[-1] text-secondary"
        />
        <h1 class="line-clamp-1">
          {{ t('title') }}
        </h1>
      </div>

      <div class="ml-auto flex items-center gap-1">
        <a
          role="button"
          href="https://github.com/Rag1995/hakutatsu-meme-editor"
          target="_blank"
          :aria-label="t('buttons.githubRepo')"
          class="btn btn-square btn-ghost"
        >
          <i class="i-simple-icons-github" />
        </a>
        <DarkToggler />
        <LanguageDropdown />
      </div>
    </div>
  </header>
</template>
