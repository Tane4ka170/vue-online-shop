<script setup>
import { computed } from 'vue'

const selectedProduct = computed(getter: () => {
    return store.products.find((item)=>item.id===id)
})
</script>

<template>
  <h1>Product Details</h1>
</template>
