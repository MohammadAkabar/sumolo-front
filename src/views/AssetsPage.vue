<script>
import AssetItems from '../components/AssetItems.vue'

export default {
  components: {
    AssetItems
  }
}
</script>
<template>
  <main class="main">
    <AssetItems :isAll="true" />
  </main>
</template>
