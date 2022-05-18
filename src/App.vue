<template>
  <ProductListOne />
  <ProductListTwo />
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'

export default {
  name: 'App',
  components: {
    ProductListOne,
    ProductListTwo
  },
  data() {
    return {

    }
  }
}
</script>

<style>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
