<script setup lang="ts">
import type { Order } from '@/views/OrdersView.vue';
import { ArrowUturnLeftIcon, ArrowUturnUpIcon, PhotoIcon, XMarkIcon } from '@heroicons/vue/24/outline';

import type { PropType } from 'vue';
const props = defineProps({
    order: {
        required: true,
        type: Object as PropType<Order>,
    }
})
const getDateFormat = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear(); 

    return `${day}. ${month}. ${year}`;
}

const formatNumber = (amount: number, options: Intl.NumberFormatOptions = {}) => {
        const userLocale = navigator.language || 'en-US';  
        const defaultOptions: Intl.NumberFormatOptions = {
            style: 'currency',
            currency: 'CZK',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        };
        const formatOptions = { ...defaultOptions, ...options };
        let result = new Intl.NumberFormat(userLocale, formatOptions).format(amount);
       
        return result;
    }
</script>
<template>
    <main class="bg-white px-4 py-2 p-4 md:p-6 rounded-lg md:rounded-2xl w-full">
        <div class="flex flex-wrap justify-between gap-1 mb-5 md:mb-3 w-full">
            <h2 class="font-semibold text-lg">
                <span>Číslo objednávky: </span>
                <span class="tracking-wider">{{ order.orderNumer }}</span>
            </h2>
            <div class="x-badge">Zaplaceno</div>
        </div>
        <div class="flex flex-wrap gap-2 mb-6 w-full">
            <div class="bg-gray-200 p-[.875rem] rounded-lg">
                <PhotoIcon class="size-5" />
            </div>
            <div class="bg-gray-200 p-[.875rem] rounded-lg">
                <PhotoIcon class="size-5" />
            </div>
            <div class="bg-gray-200 p-[.875rem] rounded-lg">
                <PhotoIcon class="size-5" />
            </div>
        </div>
        <div class="flex flex-wrap md:flex-nowrap justify-between gap-4 mb-6">
            <div class="">
                <div class="text-main-main">Datum objednávky: <span class="text-main-tertiary">{{ getDateFormat(order.date) }}</span></div>
                <div class="text-main-main">Cena celkem: <span class="text-main-tertiary">{{ formatNumber(order.price) }}</span></div>
            </div>
            <div class="md:text-right">
                <div class="text-[0.875rem] text-main-primary">Potřebujete poradit?</div>
                <div class="font-semibold text-[0.875rem] text-main-main">314 004 540 (po-pá 8:00-16:00)</div>
            </div>
        </div>
        <div class="flex flex-wrap justify-between gap-3">
            <div class="">
                <a href="#" class="lg:w-36 x-button">Detail</a>
            </div>
            <div class="flex gap-6">         
                <a href="#" class="flex items-center gap-1 x-link" title="">Zopakovat <ArrowUturnLeftIcon class="size-5"/> </a>
                <a href="#" class="flex items-center gap-1 hover:text-red-500 x-link" title="">Stornovat <XMarkIcon class="size-5"/></a>
            </div>
        </div>
    </main>
</template>