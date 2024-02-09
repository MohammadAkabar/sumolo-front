<script>
import { mapActions } from 'pinia'
import { useAuthStore } from '../stores/auth'
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        // image: null, // Change to null to indicate no file selected initially
        address: '',
        phoneNumber: '',
        role: 'user',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['register']),
    doRegister() {
      this.register(this.form)
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
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
              <form @submit.prevent="doRegister" enctype="multipart/form-data">
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        type="text"
                        v-model="form.name"
                        id="name"
                        class="form-control form-control-lg"
                        required
                      />
                      <label class="form-label" for="name">Nama Lengkap</label>
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        type="email"
                        v-model="form.email"
                        id="email"
                        class="form-control form-control-lg"
                        required
                      />
                      <label class="form-label" for="email">email</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4 d-flex align-items-center">
                    <div class="form-outline datepicker w-100">
                      <input
                        type="text"
                        v-model="form.address"
                        class="form-control form-control-lg"
                        id="address"
                        required
                      />
                      <label for="address" class="form-label">Alamat</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline datepicker w-100">
                      <input
                        type="file"
                        @change="handleImageUpload"
                        class="form-control form-control-lg"
                        id="image"
                      />
                      <label for="image" class="form-label">Image</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4 pb-2">
                    <div class="form-outline">
                      <input
                        type="text"
                        v-model="form.phoneNumber"
                        id="phoneNumber"
                        class="form-control form-control-lg"
                        required
                      />
                      <label class="form-label" for="phoneNumber">Nomor HP</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="form-outline">
                    <input type="password" id="password" class="form-control form-control-lg" />
                    <label class="form-label" for="password">Masukkan Password</label>
                  </div>
                </div>

                <div class="row">
                  <div class="form-outline">
                    <input
                      type="password"
                      v-model="form.password"
                      id="password-check"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="password-check">Konfirmasi Password</label>
                  </div>
                </div>

                <div class="mt-4 pt-2">
                  <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
