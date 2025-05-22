<script setup lang="ts">
import { driver } from 'driver.js'

const { t } = useI18n()

const startDriver = () => {
  const driverInst = driver({
    popoverClass: 'driverjs-theme',
    showProgress: true,
    nextBtnText: t('driver.buttons.next'),
    prevBtnText: t('driver.buttons.prev'),
    doneBtnText: t('driver.buttons.done'),
    steps: [
      {
        element: '#hakutatsu',
        popover: {
          title: t('driver.steps.hakutatsu.title'),
          description: t('driver.steps.hakutatsu.description'),
        },
      },
      {
        element: '.textbox-editor',
        popover: {
          title: t('driver.steps.textboxEditor.title'),
          description: t('driver.steps.textboxEditor.description'),
        },
      },
      {
        element: '#add-text-btn',
        popover: {
          title: t('driver.steps.addText.title'),
          description: t('driver.steps.addText.description'),
        },
      },
      {
        element: '#download-img-btn',
        popover: {
          title: t('driver.steps.downloadImage.title'),
          description: t('driver.steps.downloadImage.description'),
        },
      },
      {
        element: '#add-to-gallery-btn',
        popover: {
          title: t('driver.steps.addToGallery.title'),
          description: t('driver.steps.addToGallery.description'),
        },
      },
      {
        element: '#gallery',
        popover: {
          title: t('driver.steps.gallery.title'),
          description: t('driver.steps.gallery.description'),
        },
      },
      {
        element: '#gif-generator-btn',
        popover: {
          title: t('driver.steps.gifGenerator.title'),
          description: t('driver.steps.gifGenerator.description'),
        },
      },
      {
        element: '#hakutatsu-social-media',
        popover: {
          title: t('driver.steps.hakutatsuSocialMedia.title'),
          description: t('driver.steps.hakutatsuSocialMedia.description'),
        },
      },
    ],
  })
  driverInst.drive()
}
</script>

<template>
  <button class="btn btn-primary max-sm:btn-sm" @click="startDriver()">
    <i class="i-tabler-question-circle" />
    {{ t('buttons.startDriver') }}
  </button>
</template>
