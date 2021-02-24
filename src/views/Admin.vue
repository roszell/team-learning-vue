<template>
  <div>
    <inventory-manager store-name="Target"></inventory-manager>
  </div>
</template>

<script>
import InventoryManager from '@/components/InventoryManager.vue'

export default {
  name: 'Admin',
  components: {
    InventoryManager
  }
}
</script>
