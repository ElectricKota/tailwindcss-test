<script setup lang="ts">
import Invoice from '../components/Invoice.vue';

// Typ položky dat
interface DataItem {
  id: number;
  name: string;
}

// Generování náhodných dat
function generateSampleData(count: number): DataItem[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `${Math.floor(Math.random() * 100)}`,
  }));
}

// Vzorová data
const sampleData = generateSampleData(30);
</script>
<template>
  <!-- Hlavička -->
  <div class="pt-0 pb-3 w-full min-w-[40rem] overflow-x-auto">
    <div
      class="gap-8 border-[#dfe2e2] grid grid-cols-[1fr,1fr,1fr,min-content] bg-white py-4 pr-6 pl-4 border-b rounded rounded-b-none min-w-min font-semibold text-main text-sm">
      <div class="text-sm">Číslo faktury</div>
      <div>Číslo objednávky</div>
      <div>Cena celkem</div>
      <div class="place-self-end">Stažení</div>
    </div>

    <Invoice :data="sampleData" :itemsPerPage="9" />
  </div>
</template>