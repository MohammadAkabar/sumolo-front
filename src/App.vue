<script>
import Navbar from './components/NavbarItems.vue'
import { RouterView } from 'vue-router'

export default {
  components: {
    Navbar,
    RouterView
  }
}
</script>

<template>
  <Navbar />
  <RouterView />
</template>
