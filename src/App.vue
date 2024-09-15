<script setup>
import { useRouter } from 'vue-router'
import { useProductsStore } from './stores/products'

const router = useRouter()
const store = useProductsStore()
</script>

<template>
  <header>
    <div class="cart-items" @click="router.push({ name: 'CartView' })">
      <p>Items in cart: {{ store.cart?.length || 0 }}</p>
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
