<script>
import { mapActions, mapWritableState } from 'pinia'
import { useAuthStore } from '../stores/auth'

export default {
  computed: {
    ...mapWritableState(useAuthStore, ['token', 'role'])
  },
  data() {
    return {
      role: ''
    }
  },

  mounted() {
    if (localStorage.role) {
      this.role = localStorage.role
    } else {
      this.role = null
    }
  },
  watch: {
    role(newRole) {
      localStorage.role = newRole
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['logout'])
  }
}
</script>

<template>
  <header id="header" class="header d-flex align-items-center">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <h1>Sumolo<span>.</span></h1>
      </a>
      <nav id="navbar" class="navbar">
        <ul>
          <router-link to="/"><li>Home</li></router-link>
          <li class="dropdown">
            <a href=""
              ><span>Services</span><i class="bi bi-chevron-down dropdown-indicator"></i
            ></a>
            <ul>
              <li><a href="#">Asset</a></li>
              <li><a href="#">Wakaf</a></li>
              <li><a href="#">Pembayaran</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </li>

          <li>
            <router-link to="/Login"> <a href="" v-if="!token">Login</a> </router-link>
            <a href="" v-if="token" @click.prevent="logout">Logout</a>
          </li>
          <li>
            <a href="#contact" v-if="role === 'User'" @click.prevent="logout">User Menu</a>
          </li>
        </ul>
      </nav>
      <!-- .navbar -->

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
    </div>
  </header>
  <!-- End Header -->
  <!-- End Header -->
</template>
