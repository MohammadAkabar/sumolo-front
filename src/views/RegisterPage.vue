<script>
import { mapActions } from 'pinia'
import { useAuthStore } from '../stores/auth'
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs, numeric, helpers } from '@vuelidate/validators'

export default {
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({
    form: {
      name: '',
      email: '',
      // image: null, // Change to null to indicate no file selected initially
      address: '',
      phoneNumber: '',
      role: 'user',
      password: '',
      confirmPassword: ''
    }
  }),
  validations() {
    return {
      form: {
        name: {
          required: helpers.withMessage('Nama tidak boleh kosong', required)
        },
        email: {
          required: helpers.withMessage('Email tidak boleh kosong', required),
          email: helpers.withMessage('Format email salah', email)
        },
        address: {
          required: helpers.withMessage('Alamat tidak boleh kosong', required)
        },
        phoneNumber: {
          required: helpers.withMessage('Nomor Telepon tidak boleh kosong', required),
          numeric: helpers.withMessage('Nomor harus berupa angka..', numeric)
        },
        password: {
          required: helpers.withMessage('Password tidak boleh kosong', required)
        },
        confirmPassword: {
          required: helpers.withMessage('Konfirmasi Password tidak boleh kosong', required),
          sameAsPassword: helpers.withMessage(
            'Konfirmasi Password harus sama dengan Password',
            sameAs(this.form.password)
          )
        }
      }
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['register']),
    setTouched(field) {
      if (field == 'name' || field == 'all') {
        this.v$.form.name.$touch()
      }
      if (field == 'email' || field == 'all') {
        this.v$.form.email.$touch()
      }
      if (field == 'address' || field == 'all') {
        this.v$.form.address.$touch()
      }
      if (field == 'phoneNumber' || field == 'all') {
        this.v$.form.phoneNumber.$touch()
      }
      if (field == 'password' || field == 'all') {
        this.v$.form.password.$touch()
      }
      if (field == 'confirmPassword' || field == 'all') {
        this.v$.form.confirmPassword.$touch()
      }
    },
    async doRegister() {
      this.setTouched('all')
      if (!this.v$.$invalid) {
        await this.register(this.form)
      }
    },
    handleImageUpload(event) {
      this.form.image = event.target.files[0]
    }
  }
}
</script>
<template>
  <section class="">
    <div class="container py-5 h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
          <div class="card shadow-2-strong card-registration" style="border-radius: 15px">
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Pendaftaran Akun</h3>
              <form @submit.prevent="doRegister" enctype="multipart/form-data">
                <div class="row">
                  <!-- name -->
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <label class="form-label" for="name">Nama Lengkap</label>
                      <input
                        type="text"
                        v-model="form.name"
                        id="name"
                        class="form-control form-control-lg"
                        placeholder="Masukkan Nama Lengkap"
                      />
                    </div>
                    <span v-for="error of v$.form.name.$errors" class="text-danger">{{
                      error.$message
                    }}</span>
                  </div>

                  <!-- email -->
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <label class="form-label" for="email">Email</label>
                      <input
                        type="email"
                        v-model="form.email"
                        id="email"
                        class="form-control form-control-lg"
                        placeholder="Masukkan Email"
                      />
                    </div>
                    <span v-for="error of v$.form.email.$errors" class="text-danger">{{
                      error.$message
                    }}</span>
                  </div>
                </div>

                <!-- address and image -->
                <div class="row">
                  <!-- address -->
                  <div class="col-md-6 mb-4 d-flex align-items-center">
                    <div class="form-outline datepicker w-100">
                      <label for="address" class="form-label">Alamat</label>
                      <input
                        type="text"
                        v-model="form.address"
                        class="form-control form-control-lg"
                        id="address"
                        placeholder="Masukkan Alamat Lengkap"
                      />
                      <span v-for="error of v$.form.address.$errors" class="text-danger">{{
                        error.$message
                      }}</span>
                    </div>
                  </div>

                  <!-- image -->
                  <div class="col-md-6 mb-4">
                    <div class="form-outline datepicker w-100">
                      <label for="image" class="form-label">Gambar</label>
                      <input
                        type="file"
                        @change="handleImageUpload"
                        class="form-control form-control-lg"
                        id="image"
                      />
                    </div>
                  </div>
                </div>

                <!-- phone number -->

                <div class="row">
                  <div class="col-md-6 mb-4 pb-2">
                    <div class="form-outline">
                      <label class="form-label" for="phoneNumber">Nomor HP</label>
                      <div class="input-group mb">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="inputGroup-sizing-lg">+62</span>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.phoneNumber"
                          aria-label="Username"
                          aria-describedby="inputGroup-sizing-lg"
                          placeholder="89XXXXXXXX"
                        />
                      </div>
                      <span v-for="error of v$.form.phoneNumber.$errors" class="text-danger">{{
                        error.$message
                      }}</span>
                    </div>
                  </div>
                </div>

                <!-- password -->
                <div class="row mb-4">
                  <div class="form-outline">
                    <label class="form-label" for="password">Masukkan Password</label>
                    <input
                      type="password"
                      v-model="form.password"
                      id="password"
                      class="form-control form-control-lg"
                    />
                  </div>
                  <span v-for="error of v$.form.password.$errors" class="text-danger">{{
                    error.$message
                  }}</span>
                </div>

                <!-- confirm password -->
                <div class="row">
                  <div class="form-outline">
                    <label class="form-label" for="password-check">Konfirmasi Password</label>
                    <input
                      type="password"
                      v-model="form.confirmPassword"
                      id="password-check"
                      class="form-control form-control-lg"
                    />
                  </div>
                  <span v-for="error of v$.form.confirmPassword.$errors" class="text-danger">{{
                    error.$message
                  }}</span>
                </div>

                <div class="mt-4 pt-2 mb-3">
                  <input class="btn btn-primary btn-lg" type="submit" value="Daftar" />
                </div>
                <a class="" href="/login">Kembali ke halaman login</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
