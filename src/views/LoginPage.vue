<script>
import { mapActions } from 'pinia'
import { useAuthStore } from '../stores/auth'

export default {
  data() {
    // local variables
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    //globalVariables yang ada e store
  },
  methods: {
    ...mapActions(useAuthStore, ['login']),
    doLogin() {
      this.login(this.form)
    }
  }
}
</script>
<template>
  <div class="container d-flex justify-content-center" style="margin-top: 10%">
    <div class="mt-5">
      <h3 class="mb-4">Login</h3>
      <form @submit.prevent="doLogin">
        <!-- Email input -->
        <div class="form-outline mb-4">
          <input v-model="form.email" type="email" id="form1Example1" class="form-control" />
          <label class="form-label" for="form1Example1">Email address</label>
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4">
          <input v-model="form.password" type="password" id="form1Example2" class="form-control" />
          <label class="form-label" for="form1Example2">Password</label>
        </div>
        <router-link to="/Register"><a href="">Daftarkan akun</a><br /></router-link>

        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mt-2">Log in</button>
      </form>
    </div>
  </div>
</template>
