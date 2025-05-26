export const useCollectionStore = defineStore('collection', () => {
  const collectionImages = ref<string[]>([])
  const currentImage = ref<string | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // 動態加載 collection 中的所有圖片
  const loadCollectionImages = async () => {
    if (collectionImages.value.length > 0) return // 如果已經加載過，則不重複加載

    isLoading.value = true
    error.value = null

    try {
      // 使用 Vite 的導入.glob 功能動態加載所有圖片
      const imageModules = import.meta.glob(
        '/public/assets/img/collection/*.{png,jpg,jpeg,gif,webp}',
        { eager: true },
      )

      // 將導入的模組轉換為圖片路徑數組
      collectionImages.value = Object.keys(imageModules).map((path) => {
        return path.replace('/public', '.')
      })
    } catch (err) {
      error.value = 'Error loading collection.'
      console.error('Error loading collection:', err)
    } finally {
      isLoading.value = false
      currentImage.value = './assets/img/collection/hakutatsu.png'
    }
  }

  const setCurrentImage = (image: string | null) => {
    currentImage.value = image
  }

  return {
    collectionImages,
    currentImage,
    isLoading,
    error,
    loadCollectionImages,
    setCurrentImage,
  }
})
