<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';
import { ChevronRightIcon, CircleStackIcon, Cog6ToothIcon, DocumentCheckIcon, HeartIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, ShoppingBagIcon, ShoppingCartIcon, TagIcon } from '@heroicons/vue/24/outline'
import UserHeader from './components/UserHeader.vue';

const route = useRoute();

// Získání názvu aktuální položky z parametrů
const currentPageName = computed(() => route.meta.title || ' ');


</script>

<template>
  <div class="bg-stone-50 md:px-6 md:py-4 p-3 lg:p-9 w-full h-full min-h-screen overflow-x-clip">
    <h1 class="mx-auto w-full max-w-[82rem] font-medium text-[2rem] text-neutral-900 leading-10 tracking-wider">{{ currentPageName }}</h1>
    <main class="flex md:flex-row flex-col gap-10 md:gap-8 mx-auto py-8 w-full max-w-[82rem] h-full">
      <header class="lg:top-8 lg:sticky flex-grow-0 flex-shrink md:gap-3 bg-white px-4 md:px-6 py-2 md:py-8 rounded-lg md:rounded-2xl md:min-w-[304px] h-fit">
        <UserHeader class="mb-6"/>
        <nav class="flex md:flex-col justify-between md:justify-start items-center md:items-stretch gap-[0.7rem] pr-5 md:pr-0 w-full overflow-auto md:overflow-visible"
          aria-label="Hlavní navigace">
          <RouterLink
            class="w-fit md:w-full nav x-button"
            to="/" aria-label="Moje objednávky">
            <ShoppingBagIcon class="size-5" />
            <span class="md:block hidden">Moje objednávky</span>
            <ChevronRightIcon class="md:block hidden ml-auto size-5" />
          </RouterLink>
          <RouterLink class="w-fit md:w-full nav x-button" to="/invoices" aria-label="Faktury">
            <DocumentCheckIcon class="size-5" />
            <span class="md:block hidden">Faktury</span>
            <ChevronRightIcon class="md:block hidden ml-auto size-5" />
          </RouterLink>
          <span class="w-fit md:w-full nav x-button">
            <HeartIcon class="size-5" />
            <span class="md:block hidden">Seznam přání</span>
            <ChevronRightIcon class="md:block hidden ml-auto size-5" />
          </span>
          <span class="w-fit md:w-full nav x-button">
            <CircleStackIcon class="size-5" />
            <span class="md:block hidden">Věrnostní program</span>
            <ChevronRightIcon class="md:block hidden ml-auto size-5" />
          </span>
          <span class="w-fit md:w-full nav x-button">
            <TagIcon class="size-5" />
            <span class="md:block hidden">Slevové kódy</span>
            <ChevronRightIcon class="md:block hidden ml-auto size-5" />
          </span>
          <span class="w-fit md:w-full nav x-button">
            <MagnifyingGlassIcon class="size-5" />
            <span class="md:block hidden">Hlídané zboží</span>
            <ChevronRightIcon class="md:block hidden ml-auto size-5" />
          </span>
          <RouterLink class="w-fit md:w-full nav x-button" to="/account-settings" aria-label="Nastavení účtu">
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
          
            <div class="flex-grow w-full"
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
