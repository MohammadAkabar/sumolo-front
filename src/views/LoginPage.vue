<script>
import { mapActions } from 'pinia'
import { useAuthStore } from '../stores/auth'
import useVuelidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: {} // Objek untuk menyimpan pesan kesalahan validasi
    }
  },

  validations() {
    return {
      form: {
        email: {
          required: helpers.withMessage('Email tidak boleh kosong', required),
          email: helpers.withMessage('Format email salah', email)
        },
        password: {
          required: helpers.withMessage('Password tidak boleh kosong', required)
        }
      }
    }
  },

  methods: {
    ...mapActions(useAuthStore, ['login']),
    setTouched(field) {
      if (field == 'email' || field == 'all') {
        this.v$.form.email.$touch()
      }
      if (field == 'password' || field == 'all') {
        this.v$.form.password.$touch()
      }
    },
    async doLogin() {
      this.setTouched('all')
      if (!this.v$.$invalid) {
        this.login(this.form)
      }
    }
  }
}
</script>

<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4" style="width: 400px; max-width: 100%">
      <h3 class="text-center mb-4">Login</h3>
      <form @submit.prevent="doLogin">
        <!-- email -->
        <div class="mb-3">
          <label for="email" class="form-label">Masukkan Email</label>
          <div class="input-group">
            <span class="input-group-text"><i class="fas fa-envelope"></i></span>
            <input
              v-model="form.email"
              type="text"
              :class="errors.emailMsg !== true ? 'form-control error-form' : 'form-control'"
              id="email"
              placeholder="nama@contoh.com"
            />
          </div>
          <span v-for="error of v$.form.email.$errors" class="text-danger">{{
            error.$message
          }}</span>
        </div>

        <!-- password -->
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <div class="input-group">
            <span class="input-group-text"><i class="fas fa-lock"></i></span>
            <input
              v-model="form.password"
              type="password"
              :class="errors.passwordMsg !== true ? 'form-control error-form' : 'form-control'"
              id="password"
              placeholder="Password"
            />
          </div>
          <span v-for="error of v$.form.password.$errors" class="text-danger">{{
            error.$message
          }}</span>
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

.error-form {
  transition: box-shadow 0.3s;
}
.error-form:focus {
  box-shadow: 0 0 10px rgba(255, 39, 60, 0.6);
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
