<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';
import { ChevronRightIcon, Cog6ToothIcon, DocumentCheckIcon, ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/vue/24/outline'
import UserHeader from './components/UserHeader.vue';

const route = useRoute();

// Získání názvu aktuální položky z parametrů
const currentPageName = computed(() => route.meta.title || 'Ahoj');


</script>

<template>
  <div class="bg-stone-200 md:px-6 md:py-4 p-3 lg:p-9 w-full h-full min-h-screen">
    <h1 class="mx-auto w-full max-w-7xl font-semibold text-3xl text-neutral-900 leading-10">{{ currentPageName }}</h1>
    <main class="flex md:flex-row flex-col gap-3 md:gap-8 md:gap-4 mx-auto py-8 w-full max-w-7xl h-full">
      <header class="flex-grow-0 flex-shrink md:gap-3 bg-white px-4 md:px-6 py-2 md:py-8 rounded-lg md:rounded-2xl min-w-72 min-w-max h-fit">
        <UserHeader class="mb-6"/>
        <nav class="flex md:flex-col justify-between justify-start items-center items-center md:items-stretch gap-4 w-full"
          aria-label="Hlavní navigace">
          <RouterLink
            class="w-fit md:w-full x-button"
            to="/" aria-label="Moje objednávky">
            <ShoppingBagIcon class="size-5" />
            <span class="md:block hidden">Moje objednávky</span>
            <ChevronRightIcon class="md:block hidden ml-auto size-5" />
          </RouterLink>
          <RouterLink class="w-fit md:w-full x-button" to="/invoices" aria-label="Faktury">
            <DocumentCheckIcon class="size-5" />
            <span class="md:block hidden">Faktury</span>
            <ChevronRightIcon class="md:block hidden ml-auto size-5" />
          </RouterLink>
          <RouterLink class="w-fit md:w-full x-button" to="/account-settings" aria-label="Nastavení účtu">
            <Cog6ToothIcon class="size-5" />
            <span class="md:block hidden">Nastavení účtu</span>
            <ChevronRightIcon class="md:block hidden ml-auto size-5" />
          </RouterLink>

          <a href="#" class="bg-red-600/10 hover:bg-red-600/50 mt-2 font-normal text-base text-red-500 hover:text-white x-button">Odhlásit se</a>
        </nav>
      </header>
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <keep-alive>
          
            <div class="flex-grow bg-white px-4 py-2 md:p-6 md:p-5 rounded-lg md:rounded-2xl w-full min-h-50dvh"
              :key="$route.path">
              <component :is="Component" />
            </div>
          </keep-alive>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped></style>
