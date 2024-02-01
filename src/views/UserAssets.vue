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
    <AssetItems :isUsersAssets="true" :isAll="true" />
  </main>
</template>
