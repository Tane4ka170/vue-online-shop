import { createRouter, createWebHistory } from 'vue-router'
import CatalogShop from '@/views/CatalogShop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: CatalogShop
    }
  ]
})

export default router
