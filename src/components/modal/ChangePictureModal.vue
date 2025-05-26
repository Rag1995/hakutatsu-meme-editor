<script setup lang="ts">
import { onMounted } from 'vue'
import { useCollectionStore } from '@/stores'

const { t } = useI18n()
const collectionStore = useCollectionStore()

// 使用解構從 store 中獲取資料和方法
const { collectionImages } = toRefs(collectionStore)
const { loadCollectionImages, setCurrentImage } = collectionStore

// 動態加載 collection 中的所有圖片
onMounted(() => {
  loadCollectionImages()
})

// 將選中的圖片添加到畫廊
const selectImage = (imagePath: string) => {
  setCurrentImage(imagePath)
  // 關閉模態窗口
  const modal = document.getElementById(
    'change_picture_modal',
  ) as HTMLDialogElement
  if (modal) modal.close()
}
</script>

<template>
  <div>
    <!-- Open the modal using ID.showModal() method -->
    <dialog id="change_picture_modal" class="modal">
      <div class="modal-box max-w-3xl">
        <form method="dialog">
          <button
            class="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm"
          >
            ✕
          </button>
        </form>
        <h3 class="mb-4 text-lg font-bold">
          {{ t('modal.changePicture.title') }}
        </h3>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div
            v-for="(imagePath, index) in collectionImages"
            :key="index"
            class="group relative h-48 w-48"
          >
            <img
              :src="imagePath"
              :alt="`Collection image ${index + 1}`"
              class="h-48 w-48 cursor-pointer rounded-lg object-cover transition-opacity group-hover:opacity-60"
              @click="selectImage(imagePath)"
            />
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100"
            >
              <button
                class="btn btn-sm btn-primary"
                @click="selectImage(imagePath)"
              >
                {{ t('modal.changePicture.select') }}
              </button>
            </div>
          </div>
        </div>
        <div v-if="collectionImages.length === 0" class="py-8 text-center">
          {{ t('modal.changePicture.noImages') }}
        </div>
      </div>
    </dialog>
  </div>
</template>
