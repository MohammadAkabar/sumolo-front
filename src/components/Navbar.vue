<script>
import { mapActions, mapWritableState } from 'pinia'
import {useAppStore} from '../stores/app';

export default {
  computed: {
    ...mapWritableState(useAppStore, ['Title', 'Data', 'dataAsset','token'])
  },
  data(){
    return {
      role:''
    }
  },

  mounted() {
    if (localStorage.role) {
      this.role = localStorage.role;
    }else{
      this.role=null
    }
  },
  watch: {
    role(newRole) {
      localStorage.role = newRole;
    }
  },
  methods: {
    ...mapActions(useAppStore, ['logout'])
  }
}
</script>

<template>
  <header id="header" class="header d-flex align-items-center">

    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1>Sumolo<span>.</span></h1>
      </a>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <lza></lza>
          <li><a href="#services">Blog</a></li>
          <li><a href="blog.html">Services</a></li>
          <li class="dropdown"><a href="#"><span>Payment</span><i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Data Penerima wakaf</a></li>
              <li><a href="#"></a></li>
              <li><a href="#">Ranking penyewa</a></li>
              <li><a href="#" v-if="rolee==='admin'">Laporan Keuangan</a></li>
            </ul>
          </li>
          <li>
            <router-link to="/Login"> <a href="#contact" v-if="!token">Login</a> </router-link>
            <a href="#contact" v-if="token" @click.prevent="logout">Logout</a>

          </li>
          <li>
            <a href="#contact" v-if="role==='Admin'" @click.prevent="logout">Admin Menu</a>
            <a href="#contact" v-if="role==='User'" @click.prevent="logout">User Menu</a>

          </li>
        </ul>
      </nav><!-- .navbar -->

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header><!-- End Header -->
  <!-- End Header -->
</template>
<style></style>