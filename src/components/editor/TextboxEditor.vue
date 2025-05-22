<script setup lang="ts">
import { Canvas, Textbox } from 'fabric'

const props = defineProps<{
  textbox: Textbox
}>()

const emit = defineEmits<{
  (e: 'remove'): void
}>()

const { t } = useI18n()

// 接收注入的 canvas
const canvas = inject<ShallowRef<Canvas | null>>('canvas', shallowRef(null))

const originalLeft = ref<number>(props.textbox.get('left'))
const originalTop = ref<number>(props.textbox.get('top'))
const originalTextSize = ref<number>(props.textbox.get('fontSize'))

// 設置文字
const onInput = (e: Event) => {
  const text = (e.target as HTMLTextAreaElement).value
  setText(text)
}
const setText = (text: string) => {
  props.textbox.set('text', text)
  canvas.value?.renderAll()
}
// 設置文字旋轉角度
const setTextRotate = (angle: number) => {
  props.textbox.rotate(angle)
  props.textbox.setCoords()
  canvas.value?.renderAll()
}
// 設置文字位置
const setTextPosition = (left: number, top: number) => {
  props.textbox.set({ left, top })
  props.textbox.setCoords()
  canvas.value?.renderAll()
}
// 設置文字大小
const setTextSize = (size: number) => {
  props.textbox.set('fontSize', size)
  props.textbox.set('width', 0)
  canvas.value?.renderAll()
}
const adjustTextSize = (delta: number) => {
  const currentSize = props.textbox.get('fontSize')
  const newSize = Math.max(8, currentSize + delta) // 限制最小字體大小
  setTextSize(newSize)
}
</script>

<template>
  <div class="textbox-editor space-y-1">
    <div class="flex flex-wrap space-y-1 space-x-4">
      <div class="join">
        <div class="tooltip" :data-tip="t('buttons.decreaseFontSize')">
          <button
            :aria-label="t('buttons.decreaseFontSize')"
            class="btn join-item btn-square btn-sm"
            @click="adjustTextSize(-8)"
          >
            <i class="i-tabler-text-decrease" />
          </button>
        </div>
        <div class="tooltip" :data-tip="t('buttons.increaseFontSize')">
          <button
            :aria-label="t('buttons.increaseFontSize')"
            class="btn join-item btn-square btn-sm"
            @click="adjustTextSize(8)"
          >
            <i class="i-tabler-text-increase" />
          </button>
        </div>
        <div class="tooltip" :data-tip="t('buttons.resetFontSize')">
          <button
            :aria-label="t('buttons.resetFontSize')"
            class="btn join-item btn-square btn-sm"
            @click="setTextSize(originalTextSize)"
          >
            <i class="i-tabler-text-recognition" />
          </button>
        </div>
        <div class="tooltip" :data-tip="t('buttons.resetRotate')">
          <button
            :aria-label="t('buttons.resetRotate')"
            class="btn join-item btn-square btn-sm"
            @click="setTextRotate(0)"
          >
            <i class="i-tabler-rotate-dot" />
          </button>
        </div>
        <div class="tooltip" :data-tip="t('buttons.resetPosition')">
          <button
            :aria-label="t('buttons.resetPosition')"
            class="btn join-item btn-square btn-sm"
            @click="setTextPosition(originalLeft, originalTop)"
          >
            <i class="i-tabler-crosshair" />
          </button>
        </div>
        <div class="tooltip" :data-tip="t('buttons.removeText')">
          <button
            :aria-label="t('buttons.removeText')"
            class="btn join-item btn-square btn-sm"
            @click="emit('remove')"
          >
            <i class="i-tabler-trash text-error" />
          </button>
        </div>
      </div>
    </div>
    <textarea
      class="textarea w-full textarea-lg"
      :value="textbox.text"
      @input="onInput($event)"
    />
  </div>
</template>
