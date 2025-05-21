import GIF from 'gif.js'

export const useGalleryStore = defineStore('gallery', () => {
  const gallery = useStorage<string[]>('gallery', [])

  const removeFromGallery = (index: number) => {
    gallery.value.splice(index, 1)
  }
  const addToGallery = (image: string) => {
    gallery.value.push(image)
  }
  const clearGallery = () => {
    gallery.value = []
  }

  const isGeneratingGIF = ref(false)
  const gifUrl = ref<string>()
  const loadImageFromDataURL = (dataURL: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(img) // 當圖片加載完成時解析 Promise
      img.onerror = (err) => reject(err) // 當圖片加載失敗時拒絕 Promise
      img.width = 500
      img.height = 500
      img.src = dataURL // 將 dataURL 設置為圖片的來源
    })
  }
  const generateGIF = async () => {
    if (gallery.value.length === 0) return

    isGeneratingGIF.value = true
    const gif = new GIF({
      workers: 2,
      quality: 1,
      width: 500,
      height: 500,
      workerScript: '/assets/js/gif.worker.js',
    })
    for (const dataURL of gallery.value) {
      try {
        const img = await loadImageFromDataURL(dataURL)
        gif.addFrame(img, { copy: true, delay: 300 })
      } catch (error) {
        console.error('Error loading image:', error)
      }
    }

    gif.on('finished', (blob) => {
      gifUrl.value = URL.createObjectURL(blob)
      isGeneratingGIF.value = false
    })
    gif.render()
  }

  return {
    gallery,
    addToGallery,
    removeFromGallery,
    clearGallery,
    gifUrl,
    isGeneratingGIF,
    generateGIF,
  }
})
