<route lang="yaml">
name: 'home'
meta:
  title: 'routes.home'
  icon: 'home'
  order: 1
</route>

<script setup lang="ts">
import { useGalleryStore } from '@/stores'

const store = useGalleryStore()
const { gallery } = toRefs(store)
</script>

<template>
  <div class="container pt-8 pb-24">
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body pb-16">
        <ImageEditor class="mb-4" />
        <ImageGallery class="mb-8" />
        <div v-if="gallery.length > 1" class="flex justify-center">
          <GifGenerator />
        </div>
      </div>
    </div>
  </div>
</template>
