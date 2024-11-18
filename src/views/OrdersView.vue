<script setup lang="ts">
import { onMounted, ref } from 'vue';
import OrderCard from '@/components/OrderCard.vue';

export type Order = {
  id: number;
  orderNumer: number;
  date: Date;
  price: number;
}
export type Orders = Order[];
const orders = ref([] as Orders);
onMounted(() => {
  for (let index = 0 as number; index < 5; index++) {
    const randomNumber = Math.floor(Math.random() * 10000 + index) + index as number;
    const today = new Date();
    const newOrder = {
      id: index,
      orderNumer: 2200245834 + randomNumber,
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - index),
      price: randomNumber,
    } as Order;
    orders.value.push(newOrder);
  }
  console.log(orders.value);
})
</script>
<template>
  <div class="gap-[2rem] grid">    
    <order-card v-for="item in orders" :order="item" />
  </div>

</template>


<style></style>
