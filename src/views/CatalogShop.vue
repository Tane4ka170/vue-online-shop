<script setup>
import { onMounted } from 'vue'
import { useProductsStore } from '@/stores/products'

const store = useProductsStore()

onMounted(() => {
  console.log('first')
  store.fetchProductsFromDB()
})
</script>

<template>
  <div class="product-list">
    <div class="product" v-for="product in store.products" :key="product.id">
      <img :src="product.thumbnail" alt="">
      <h2>Brand: {{ product.brand }}</h2>
      <p>Description: {{  product.description }}</p>
      <p>Price: ${{  product.price}}</p>
    </div>
  </div>
</template>

<style scoped>
.product-list{}
</style>