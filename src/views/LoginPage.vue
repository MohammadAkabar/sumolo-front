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
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4" style="width: 400px; max-width: 100%">
      <h3 class="text-center mb-4">Login</h3>
      <form @submit.prevent="doLogin">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <div class="input-group">
            <span class="input-group-text"><i class="fas fa-envelope"></i></span>
            <input
              v-model="form.email"
              type="email"
              class="form-control"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <div class="input-group">
            <span class="input-group-text"><i class="fas fa-lock"></i></span>
            <input
              v-model="form.password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
            />
          </div>
        </div>

        <div class="mb-3">
          <router-link to="/Register" class="link-secondary">
            <a href="" class="link-secondary">Belum punya akun? Daftar sekarang!</a>
          </router-link>
        </div>

        <button type="submit" class="btn btn-primary btn-block">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.link-secondary {
  color: #6c757d;
}

.link-secondary:hover {
  color: #0056b3;
}

.card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.input-group {
  transition: all 0.3s;
}

.input-group:hover {
  transform: translateY(-3px);
}

.form-control {
  transition: box-shadow 0.3s;
}

.form-control:focus {
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.6);
}

.btn.btn-primary {
  background-color: #4285f4;
  border-color: #4285f4;
}

.btn.btn-primary:hover {
  background-color: #3367d6;
  border-color: #3367d6;
}
</style>
