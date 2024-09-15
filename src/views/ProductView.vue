<script setup>
import { computed } from 'vue'
import { useProductsStore } from '@/stores/products'
import { useRoute, useRouter } from 'vue-router'

const store = useProductsStore()
const route = useRoute()
const router = useRouter()

const addToCart = () => {
  router.push({ name: 'CartView' })
}

const selectedProduct = computed(() => {
  return store.products.find((item) => item.id === Number(route.params.id))
})
</script>

<template>
  <button @click="router.push({ name: 'Catalog' })">Back to catalog</button>
  <div class="product" v-if="selectedProduct">
    <div class="product-image">
      <img :src="selectedProduct.thumbnail" alt="Product Image" />
    </div>
    <div class="product-details">
      <p>Brand: {{ selectedProduct.brand }}</p>
      <p>Description: {{ selectedProduct.description }}</p>
      <h2>Price: ${{ selectedProduct.price }}</h2>
      <button @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<style scoped>
.product {
  display: flex;
  margin-top: 50px;
}

.product-image {
  margin-right: 24px;
}
</style>
