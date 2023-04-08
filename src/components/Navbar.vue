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
        <h1>Impact<span>.</span></h1>
      </a>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <lza></lza>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i
                class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i
                    class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
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