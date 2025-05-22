<route lang="yaml">
name: 'home'
meta:
  title: 'routes.home'
  icon: 'home'
  order: 1
</route>

<script setup lang="ts"></script>

<template>
  <AppHeader />

  <main class="min-h-[calc(100vh-3.5rem-300px)] bg-base-300">
    <div class="container pt-8 pb-24">
      <div class="card bg-base-100 shadow-sm">
        <div class="card-body pb-16">
          <ImageEditor class="mb-4" />
          <ImageGallery class="mb-8" />
          <div class="flex justify-center">
            <GifGenerator />
          </div>
        </div>
      </div>
    </div>
  </main>

  <AppFooter />
</template>
