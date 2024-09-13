import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: []
  }),

  actions: {
    async fetchProductsFromDB() {
      try {
        const res = await fetch('https://dummyjson.com/products')
        const json = await res.json()
        this.products = json.products
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
  }
})
