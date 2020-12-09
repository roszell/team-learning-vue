<template>
  <div>
    <h1>Welcome to the Wal-Mart inventory manager!</h1>
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
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
