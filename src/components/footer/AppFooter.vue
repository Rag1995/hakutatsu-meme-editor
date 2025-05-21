<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
zh-TW:
  websiteAuthor: '網站作者'
  author:
    description: '工作是寫程式，興趣是寫程式'
en:
  websiteAuthor: 'Website Author'
  author:
    description: 'Work is coding, hobby is coding'
ja:
  websiteAuthor: 'ウェブサイトの作者'
  author:
    description: '仕事はプログラミング、趣味もプログラミング'
</i18n>

<template>
  <footer class="bg-base-100 text-base-content">
    <div class="container footer p-20 md:footer-horizontal">
      <aside>
        <img
          src="@img/hakutatsu.jpg"
          alt="北達 Hakutatsu"
          class="mb-2 mask size-24 mask-squircle"
        />
        <h6 class="footer-title">北達 Hakutatsu</h6>
        <div class="flex gap-4 text-lg">
          <a href="https://www.twitch.tv/hakutatsu88" target="_blank">
            <i class="i-tabler-brand-twitch" />
          </a>
          <a href="https://x.com/hakutatsu88" target="_blank">
            <i class="i-tabler-brand-x" />
          </a>
          <a href="https://www.plurk.com/hakutatsu88" target="_blank">
            <i class="i-simple-icons-plurk" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100083323838876"
            target="_blank"
          >
            <i class="i-tabler-brand-facebook-filled" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCuR04885JsFrBDbTFMeiorA"
            target="_blank"
          >
            <i class="i-tabler-brand-youtube-filled" />
          </a>
        </div>
      </aside>
      <nav>
        <img
          src="@img/me-1.png"
          :alt="t('websiteAuthor')"
          class="mb-2 mask size-24 mask-squircle"
        />
        <h6 class="footer-title">{{ t('websiteAuthor') }}</h6>
        <p class="mb-4">{{ t('author.description') }}</p>
        <div class="flex gap-4 text-lg">
          <a href="https://github.com/Rag1995" target="_blank">
            <i class="i-simple-icons-github" />
          </a>
          <a href="https://x.com/rag_dust" target="_blank">
            <i class="i-tabler-brand-x" />
          </a>
        </div>
      </nav>
    </div>
  </footer>
</template>
