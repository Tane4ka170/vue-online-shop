<script setup>
import { computed } from 'vue'
import { useProductsStore } from '@/stores/products'
import { useRoute } from 'vue-router'

const store = useProductsStore()
const route = useRoute()

const selectedProduct = computed(() => {
  return store.products.find((item) => item.id === Number(route.params.id))
})
</script>

<template>
  <div class="product" v-if="selectedProduct">
    <div class="product-image">
      <img :src="selectedProduct.thumbnail" alt="Product Image" />
    </div>
    <div class="product-details">
      <p>Brand: {{ selectedProduct.brand }}</p>
      <p>Description: {{ selectedProduct.description }}</p>
      <h2>Price: ${{ selectedProduct.price }}</h2>
    </div>
  </div>
  <p v-else>Product not found.</p>
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
