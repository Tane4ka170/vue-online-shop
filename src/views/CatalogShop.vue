<script setup>
import { onMounted } from 'vue'
import { useProductsStore } from '@/stores/products'

const productStore = useProductsStore()

onMounted(() => {
  console.log('first')
  productStore.fetchProductsFromDB()
})
</script>

<template>
  <h1>Catalog</h1>
</template>
