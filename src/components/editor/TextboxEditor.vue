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

<i18n lang="yaml">
zh-TW:
  decreaseFontSize: '文字變小'
  increaseFontSize: '文字變大'
  resetFontSize: '重置文字大小'
  resetRotate: '重置旋轉'
  resetPosition: '重置位置'
  deleteText: '刪除文字'
en:
  decreaseFontSize: 'Decrease font size'
  increaseFontSize: 'Increase font size'
  resetFontSize: 'Reset font size'
  resetRotate: 'Reset rotate'
  resetPosition: 'Reset position'
  deleteText: 'Delete text'
ja:
  decreaseFontSize: '文字縮小'
  increaseFontSize: '文字拡大'
  resetFontSize: 'サイズ初期化'
  resetRotate: '回転初期化'
  resetPosition: '位置初期化'
  deleteText: '文字削除'
</i18n>

<template>
  <div class="space-y-1">
    <div class="flex flex-wrap space-y-1 space-x-4">
      <div class="join">
        <div class="tooltip" :data-tip="t('decreaseFontSize')">
          <button
            :aria-label="t('decreaseFontSize')"
            class="btn join-item btn-square btn-sm"
            @click="adjustTextSize(-8)"
          >
            <i class="i-tabler-text-decrease" />
          </button>
        </div>
        <div class="tooltip" :data-tip="t('increaseFontSize')">
          <button
            :aria-label="t('increaseFontSize')"
            class="btn join-item btn-square btn-sm"
            @click="adjustTextSize(8)"
          >
            <i class="i-tabler-text-increase" />
          </button>
        </div>
        <div class="tooltip" :data-tip="t('resetFontSize')">
          <button
            :aria-label="t('resetFontSize')"
            class="btn join-item btn-square btn-sm"
            @click="setTextSize(originalTextSize)"
          >
            <i class="i-tabler-text-recognition" />
          </button>
        </div>
        <div class="tooltip" :data-tip="t('resetRotate')">
          <button
            :aria-label="t('resetRotate')"
            class="btn join-item btn-square btn-sm"
            @click="setTextRotate(0)"
          >
            <i class="i-tabler-rotate-dot" />
          </button>
        </div>
        <div class="tooltip" :data-tip="t('resetPosition')">
          <button
            :aria-label="t('resetPosition')"
            class="btn join-item btn-square btn-sm"
            @click="setTextPosition(originalLeft, originalTop)"
          >
            <i class="i-tabler-crosshair" />
          </button>
        </div>
        <div class="tooltip" :data-tip="t('deleteText')">
          <button
            :aria-label="t('deleteText')"
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
