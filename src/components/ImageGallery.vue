<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'
import { useGalleryStore } from '@/stores'

const { t } = useI18n()

const store = useGalleryStore()
const { gallery } = toRefs(store)
const { removeFromGallery } = store
</script>

<i18n lang="yaml">
zh-TW:
  gallery: '畫廊'
  dragToReorder: '拖曳可以改變圖片順序喔~!'
  remove: '移除'
en:
  gallery: 'Gallery'
  dragToReorder: 'Drag to reorder images!'
  remove: 'Remove'
ja:
  gallery: 'ギャラリー'
  dragToReorder: 'ドラッグして画像の順序を変更できます！'
  remove: '削除'
</i18n>

<template>
  <div>
    <div class="divider">
      <div class="flex items-center gap-2">
        <i class="i-tabler-star-filled shrink-0 text-accent" />
        <span class="text-xl font-black">{{ t('gallery') }} </span>
        <i class="i-tabler-star-filled shrink-0 text-accent" />
      </div>
    </div>
    <div class="mb-4 py-2 text-center">{{ t('dragToReorder') }}</div>
    <VueDraggable
      v-model="gallery"
      :animation="350"
      tag="ul"
      class="flex flex-wrap gap-4"
    >
      <TransitionGroup move-class="transition">
        <li
          v-for="(dataURL, i) in gallery"
          :key="dataURL"
          class="relative cursor-move"
        >
          <span
            class="absolute top-0 left-0 flex size-8 items-center justify-center bg-white/10 font-mono text-white"
          >
            {{ i + 1 }}
          </span>
          <button
            :aria-label="t('remove')"
            class="btn absolute top-0 right-0 btn-square rounded-none shadow-none btn-sm btn-error"
            @click="removeFromGallery(i)"
          >
            <i class="i-tabler-x" />
          </button>
          <div class="absolute right-0 bottom-0">//</div>
          <img :src="dataURL" alt="Image" class="w-48 object-cover" />
        </li>
      </TransitionGroup>
    </VueDraggable>
  </div>
</template>
