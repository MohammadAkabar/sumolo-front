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
    //globalVariables sebede e store
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

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block">Log in</button>
    </form>
  </div>
</template>
