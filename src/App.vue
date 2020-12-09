<template>
  <div id="app">
    <inventory-manager store-name="Target"></inventory-manager>
  </div>
</template>

<script>
import InventoryManager from './components/InventoryManager.vue'

export default {
  name: 'App',
  components: {
    InventoryManager
  }
}
</script>

<style>
</style>
