<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';
const route = useRoute();

// Získání názvu aktuální položky z parametrů
const currentPageName = computed(() => route.meta.title || 'Ahoj');


</script>

<template>
  <div class="w-full h-full  min-h-screen p-3  md:px-6 md:py-4 lg:p-9 bg-stone-200">
    <h1 class="text-2xl w-full mx-auto max-w-7xl">{{ currentPageName }}</h1>
    <main class="w-full mx-auto h-full max-w-7xl flex flex-col py-8 gap-3 xs:flex-row xs:gap-4 md:gap-8">
      <header class="h-fit w-full md:max-w-80 bg-white rounded-lg xs:rounded-2xl xs:max-w-52">
        <nav class="w-full flex gap-4 xs:gap-8 items-center justify-start px-4 py-2 xs:px-6 xs:py-8 xs:flex-col">
          <RouterLink class="transition-colors hover:text-blue-400" to="/">Home</RouterLink>
          <RouterLink
            class="transition-colors ease-out duration-500 hover:text-blue-400 hover:ease-in hover:duration-200"
            to="/about">About</RouterLink>
        </nav>
      </header>
      <RouterView class="w-full flex-grow min-h-50dvh px-4 py-2 xs:p-5 md:p-6 bg-white rounded-lg xs:rounded-2xl" />
    </main>
  </div>
</template>

<style scoped>
body {
  background: #FAFAFA;
}
</style>
