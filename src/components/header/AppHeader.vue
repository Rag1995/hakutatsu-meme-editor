<script setup lang="ts"></script>

<template>
  <header class="sticky top-0 right-0 left-0 bg-base-100 shadow-sm">
    <div class="container flex items-center py-2">
      <div class="flex">
        <h1>App Title</h1>
      </div>

      <div class="ml-auto flex items-center gap-1">
        <DarkToggler />
        <LanguageDropdown />
      </div>
    </div>
  </header>
</template>
