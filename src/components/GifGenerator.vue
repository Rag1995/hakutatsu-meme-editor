<script setup lang="ts">
import { useGalleryStore } from '@/stores'
import { downloadFile } from '@/utils'

const { t } = useI18n()
const store = useGalleryStore()
const { gifUrl, isGeneratingGIF } = toRefs(store)
const { generateGIF } = store

const modal = ref<HTMLDialogElement>()

const showModal = () => {
  modal.value?.showModal()
  generateGIF()
}

const handleDownload = () => {
  if (!gifUrl.value) return
  downloadFile(gifUrl.value, 'image.gif')
}
</script>

<i18n lang="yaml">
zh-TW:
  generateGIF: '產生GIF'
  downloadGIF: '下載GIF'
  close: '關閉'
en:
  generateGIF: 'Generate GIF'
  downloadGIF: 'Download GIF'
  close: 'Close'
ja:
  generateGIF: 'GIFを生成'
  downloadGIF: 'GIFをダウンロード'
  close: '閉じる'
</i18n>

<template>
  <button class="btn btn-lg btn-success" @click="showModal()">
    <i class="i-tabler-photo-video" />
    {{ t('generateGIF') }}
  </button>
  <dialog ref="modal" class="modal">
    <div class="modal-box pt-8">
      <form method="dialog">
        <button class="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm">
          ✕
        </button>
      </form>

      <div class="mx-auto mb-4 w-full max-w-96 border">
        <div v-if="isGeneratingGIF" class="py-16 text-center">
          <span class="loading loading-xl loading-spinner text-secondary" />
        </div>
        <img v-else :src="gifUrl" alt="GIF" class="w-full" />
      </div>

      <div class="modal-action grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
        <button class="btn btn-accent" @click="handleDownload()">
          <i class="i-tabler-download" />
          {{ t('downloadGIF') }}
        </button>
        <form method="dialog">
          <button class="btn w-full">
            <i class="i-tabler-x" />
            {{ t('close') }}
          </button>
        </form>
      </div>
    </div>
  </dialog>
</template>
