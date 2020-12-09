<template>
  <div>
    <h1>Welcome to the {{ storeName }} inventory manager!</h1>
    <ol>
      <li v-for="product in products" :key="product.id">
        <span>Name: {{ product.name }}</span>
        <input v-model.number="product.stock">
        <button v-on:click="addStock(product)">Add Stock</button>
        <button v-on:click="removeStock(product)">Remove Stock</button>
        <strong v-if="product.stock <= 0"> *** OUT OF STOCK</strong>
      </li>
    </ol>
    <p>Total Items in Stock: {{ getTotalItemsInStock }}</p>
  </div>
</template>

<script>
export default {
  name: 'InventoryManager',
  props: {
    storeName: String
  },
  data: function () {
    return {
      products: [
        { id: 1, name: 'Boots', stock: 0 },
        { id: 2, name: 'Pants', stock: 1 },
        { id: 3, name: 'Shirts', stock: 5 }
      ]
    }
  },
  methods: {
    addStock: function (product) {
      product.stock++;
    },
    removeStock: function (product) {
      product.stock--;
    }
  },
  computed: {
    getTotalItemsInStock: function () {
      return this.products.map(p => p.stock).reduce(function (a, b) {
        return a + b;
      }, 0)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
