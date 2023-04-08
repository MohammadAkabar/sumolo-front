<script>
import LandingPage from './views/LandingPage.vue'
import Hero from './components/Home/Hero.vue'
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    LandingPage,
    Hero
  }
}
</script>

<template>
  <LandingPage />
  <Hero />
  <RouterView />
</template>
