<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="w-full flex flex-col gap-1 xs:flex-row:gap-4">
    <header class="w-full flex items-center mx-auto bg-slate-400">
        <nav class="w-full flex gap-2 items-center justify-start px-4 py-2">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>    
    <RouterView class="w-full h-full bg-orange-200"/>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}





/* nav a.router-link-exact-active {
  color: var(--color-text);
  color: red;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
} */



</style>
