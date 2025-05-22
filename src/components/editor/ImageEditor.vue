<script setup lang="ts">
import { Canvas, FabricImage, Textbox } from 'fabric'
import { useGalleryStore } from '@/stores'
import { downloadFile } from '@/utils'

const { t } = useI18n()
const store = useGalleryStore()

const loading = ref(false)
const canvasRef = ref<HTMLCanvasElement>()
const canvas = shallowRef<Canvas | null>(null)
const width = 500
const height = 500
const fontFamily = 'SweiRainbowLegCJKtc-Bold'
const fontFamilySource = `
  url(https://cdn.jsdelivr.net/gh/max32002/swei-rainbow-leg@2.0/WebFont/CJK%20TC/SweiRainbowLegCJKtc-Bold.woff2) format("woff2"),
  url(https://cdn.jsdelivr.net/gh/max32002/swei-rainbow-leg@2.0/WebFont/CJK%20TC/SweiRainbowLegCJKtc-Bold.woff) format("woff")
`

const counter = ref(0)
const textboxes = shallowReactive<Textbox[]>([])

// 載入字型
const loadFont = () => {
  return new Promise<void>((resolve, reject) => {
    new FontFace(fontFamily, fontFamilySource)
      .load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont)
        console.log('Font loaded!')
        resolve()
      })
      .catch((error) => {
        console.error('Failed to load font:', error)
        reject(error)
      })
  })
}
// 初始化畫布
const initCanvas = () => {
  loading.value = true
  loadFont()
    .then(() => {
      canvas.value = new Canvas(canvasRef.value, {
        width,
        height,
        backgroundColor: '#1F1F1F',
      })
      canvas.value.setDimensions(
        { width: '100%', height: '100%' },
        { cssOnly: true },
      )

      FabricImage.fromURL('./assets/img/hakutatsu.png').then((img) => {
        img.scaleToWidth(canvas.value!.width)
        img.scaleToHeight(canvas.value!.height!)
        canvas.value!.backgroundImage = img
        canvas.value!.renderAll()
      })

      addTextbox()
    })
    .finally(() => {
      loading.value = false
    })
}
// 註銷畫布
const destroyCanvas = () => {
  canvas.value?.dispose()
  canvas.value = null
}

// 加入文字
const addTextbox = () => {
  counter.value++
  const content = t('placeholders.inputText', { number: counter.value })
  const textbox = new Textbox(content, {
    id: new Date().getTime(),
    left: width * 0.5,
    top: height * 0.97,
    lineHeight: 1,
    originX: 'center',
    originY: 'bottom',
    fontSize: 72,
    fontFamily,
    textAlign: 'center',
    fill: '#ffffff',
    paintFirst: 'stroke',
    stroke: '#000000',
    strokeWidth: 8,
    editable: false,
    cornerColor: '#ffffff', // 控制點的填充顏色
    cornerStrokeColor: '#616161', // 控制點的邊框顏色
    transparentCorners: false, // 是否顯示透明控制點
    borderColor: '#616161', // 邊框顏色
  })
  // 自定義控制點
  textbox.setControlsVisibility({
    mt: false, // 禁用上中控制點
    mb: false, // 禁用下中控制點
    ml: false, // 啟用左中控制點
    mr: false, // 啟用右中控制點
    tl: false, // 禁用左上控制點
    tr: false, // 禁用右上控制點
    bl: false, // 禁用左下控制點
    br: false, // 禁用右下控制點
  })

  canvas.value?.add(textbox)
  canvas.value?.setActiveObject(textbox)

  textboxes.push(textbox)
}
// 移除文字
const removeTextbox = (index: number) => {
  const removed = textboxes.splice(index, 1)
  removed.forEach((textbox) => {
    canvas.value?.remove(textbox)
  })
  canvas.value?.renderAll()
}

// 匯出圖片
const handleDownload = () => {
  if (!canvas.value) return
  const dataURL = canvas.value.toDataURL()
  downloadFile(dataURL, 'download.png')
}
// 加入圖片到畫廊
const addToGallery = () => {
  if (!canvas.value) return
  const dataURL = canvas.value.toDataURL()
  store.addToGallery(dataURL)
}

onMounted(() => {
  initCanvas()
})

onBeforeMount(() => {
  destroyCanvas()
})

provide('canvas', canvas)
</script>

<template>
  <div>
    <div
      class="flex flex-col flex-nowrap gap-4 md:flex-row"
      :class="{ hidden: loading }"
    >
      <div class="shrink-0 self-center md:self-start">
        <div id="hakutatsu" class="w-full max-w-sm">
          <canvas ref="canvasRef" />
        </div>
      </div>
      <div class="@container grow space-y-4">
        <TextboxEditor
          v-for="(textbox, i) in textboxes"
          :key="textbox.id"
          :textbox="textbox"
          @remove="removeTextbox(i)"
        />

        <div class="flex flex-row flex-wrap gap-2">
          <button
            id="add-text-btn"
            class="btn btn-primary"
            @click="addTextbox()"
          >
            <i class="i-tabler-pencil-plus" />
            {{ t('buttons.addText') }}
          </button>
          <button
            id="add-to-gallery-btn"
            class="btn btn-secondary"
            @click="addToGallery()"
          >
            <i class="i-tabler-photo-plus" />
            {{ t('buttons.addToGallery') }}
          </button>
          <button
            id="download-img-btn"
            class="btn btn-accent"
            @click="handleDownload()"
          >
            <i class="i-tabler-download" />
            {{ t('buttons.downloadFile', { file: t('files.image') }) }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
