<script setup lang="ts">
import { ArrowDownOnSquareStackIcon } from '@heroicons/vue/24/outline';
import { computed, ref } from 'vue';

// Props
interface DataItem {
    id: number;
    name: string;
}
const props = defineProps<{
    data: DataItem[];
    itemsPerPage?: number;
}>();

// Defaultní hodnota pro počet položek na stránku
const itemsPerPage = props.itemsPerPage || 9;

// Reaktivní data
const currentPage = ref(1);

// Počet stránek
const totalPages = computed(() =>
    Math.ceil(props.data.length / itemsPerPage)
);

// Data pro aktuální stránku
const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return props.data.slice(start, end);
});
</script>
<template>
    <div class="bg-white pt-6 min-w-min">

        <div v-for="item in paginatedData" class="items-center gap-4 grid grid-cols-[1fr,1fr,1fr,min-content] px-6 pb-[2.375rem] last:pb-4">
            <div class="font-normal text-base text-neutral-900">{{ 202400564114480 + item.id }}</div>
            <div class="font-normal text-base text-neutral-900">{{ 121548784515487 + item.id }}</div>
            <div class="font-normal text-base text-neutral-900">-1 500 Kč</div>
            <div class="flex">
                <a href="#"
                    class="flex items-center gap-1 ml-auto font-medium text-[12px] text-blue-500 leading-[20px] x-link"
                    title="">
                    <ArrowDownOnSquareStackIcon class="size-4" /> Stáhnout
                </a>

            </div>
        </div>
    </div>

    <div class="mx-auto mt-8 container">
        <!-- Paginace -->
        <div class="flex justify-between items-center space-x-2 mt-4">
            <div class="w-40"></div>
            <a href="#" title="" class="px-6 cursor-pointer x-button">Načíst další</a>

            <nav class="x-pagination" aria-label="pagination">

                <span v-for="page in totalPages" :key="page" @click="currentPage = page" :class="[
                    'x-button sm square rounded-sm cursor-pointer font-medium text-[.875rem]',
                    page === currentPage
                        ? 'bg-white text-blue-500 pointer-events-none'
                        : 'bg-white text-neutral-900',
                ]">
                    {{ page }}
                </span>
            </nav>


        </div>
    </div>
</template>



<style scoped>
.pagination span:hover {
    background-color: #3b82f6;
    /* Tailwind modrá */
    color: white;
}
</style>