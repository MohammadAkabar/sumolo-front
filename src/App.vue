<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Home/Hero.vue'
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    Navbar,
    Hero
  }
}
</script>

<template>
  <Navbar />
  <RouterView />
</template>
