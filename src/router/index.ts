import { createRouter, createWebHistory } from 'vue-router'
import InvoicesView from '@/views/InvoicesView.vue'
import FavoritesView from '@/views/OrdersView.vue'
import AccountSettingsView from '@/views/AccountSettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'orders',
      meta: {title:'Moje objednávky'},
      component: FavoritesView,
    },
    {
      path: '/invoices',
      name: 'invoices',
      meta: {title:'Faktury'},
      component: InvoicesView,
    },
    {
      path: '/account-settings',
      name: 'account-settings',
      meta: {title:'Nastavení účtu'},
      component: AccountSettingsView,
    },
  ],
  linkActiveClass: 'active',
})

export default router
