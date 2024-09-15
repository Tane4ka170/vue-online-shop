<script setup>
import { useRouter } from 'vue-router'
import { useProductsStore } from './stores/products'

const router = useRouter()
const store = useProductsStore()

const handleCartClick = () => {
  if (router) {
    router.push({ name: 'CartView' })
  }
}
</script>

<template>
  <header>
    <div class="cart-items" @click="handleCartClick">
      <p>Items in cart: {{ store.cart?.length }}</p>
    </div>
  </header>
  <main><RouterView /></main>
</template>

<style scoped>
.cart-items {
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
}
</style>
