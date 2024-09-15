import { createRouter, createWebHistory } from 'vue-router'
import CatalogShop from '@/views/CatalogShop.vue'
import ProductView from '@/views/ProductView.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: CatalogShop
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductView
    },
    {
      path: '/cart',
      name: 'CartView',
      component: CartView
    }
  ]
})

export default router
