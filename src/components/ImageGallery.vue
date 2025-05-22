<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'
import { useGalleryStore } from '@/stores'

const { t } = useI18n()

const store = useGalleryStore()
const { gallery } = toRefs(store)
const { removeFromGallery } = store
</script>

<template>
  <div id="gallery">
    <div class="divider">
      <div class="flex items-center gap-2">
        <i class="i-tabler-star-filled shrink-0 text-accent" />
        <span class="text-xl font-black">{{ t('gallery.title') }} </span>
        <i class="i-tabler-star-filled shrink-0 text-accent" />
      </div>
    </div>
    <div class="mb-4 py-2 text-center">{{ t('gallery.description') }}</div>
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
            :aria-label="t('buttons.remove')"
            class="btn absolute top-0 right-0 btn-square rounded-none shadow-none btn-sm btn-error"
            @click="removeFromGallery(i)"
          >
            <i class="i-tabler-x" />
          </button>
          <img :src="dataURL" alt="Image" class="w-48 object-cover" />
        </li>
      </TransitionGroup>
    </VueDraggable>
  </div>
</template>
