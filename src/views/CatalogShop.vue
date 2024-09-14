<script setup>
import { onMounted } from 'vue'
import { useProductsStore } from '@/stores/products'
import { useRouter } from 'vue-router'

const store = useProductsStore()
const router = useRouter()

const goToProductPage = (id) => {
  router.push({ name: 'ProductDetail', params: { id } })
}

onMounted(() => {
  store.fetchProductsFromDB()
})
</script>

<template>
  <div class="product-list">
    <div
      class="product"
      v-for="product in store.products"
      :key="product.id"
      @click="goToProductPage(product.id)"
    >
      <img :src="product.thumbnail" alt="" />
      <h2>Brand: {{ product.brand }}</h2>
      <p>Description: {{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
    </div>
  </div>
</template>

<style scoped>
.product-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.product {
  flex-basis: 28%;
  margin: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.product img {
  width: 80%;
}
</style>
