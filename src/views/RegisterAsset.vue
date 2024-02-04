<script>
import { mapActions } from 'pinia'
import { useAssetStore } from '../stores/assets'
export default {
  data() {
    return {
      form: {
        name: '',
        address: '',
        price: ''
      }
    }
  },

  methods: {
    ...mapActions(useAssetStore, ['registerAsset']),
    doRegisterAsset() {
      this.registerAsset(this.form)
    }
  }
}
</script>
<template>
  <section class="py-5">
    <div class="container h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
          <div class="card card-registration shadow-lg" style="border-radius: 15px">
            <div class="card-body p-4 p-md-5">
              <!-- Header -->
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 text-center text-primary">Registrasi Aset</h3>

              <!-- Form -->
              <form @submit.prevent="doRegisterAsset" enctype="multipart/form-data">
                <!-- Nama Aset -->
                <div class="mb-4">
                  <label class="form-label" for="name">Nama Aset</label>
                  <input
                    type="text"
                    v-model="form.name"
                    id="name"
                    class="form-control form-control-lg"
                    placeholder="Contoh: Toko, Tanah, Rumah"
                    required
                  />
                </div>

                <!-- Alamat Aset -->
                <div class="row mb-4">
                  <div class="col-md-6">
                    <label class="form-label" for="address">Alamat Aset</label>
                    <input
                      type="text"
                      v-model="form.address"
                      class="form-control form-control-lg"
                      id="address"
                      placeholder="Contoh: Jl. Rumah Saya"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label" for="image">Foto Aset</label>
                    <input
                      type="file"
                      @change="handleImageUpload"
                      class="form-control form-control-lg"
                      id="image"
                    />
                  </div>
                </div>

                <!-- Harga Sewa Aset -->
                <div class="mb-4">
                  <label class="form-label" for="price">Harga Sewa Aset</label>
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon1">Rp</span>
                    <input
                      type="number"
                      v-model="form.price"
                      class="form-control form-control-lg"
                      id="price"
                      placeholder="Contoh: 1000000"
                      required
                    />
                  </div>
                </div>

                <!-- Persyaratan -->
                <div class="form-check mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="checkbox"
                    aria-label="Checkbox for following text input"
                    required
                  />
                  <label class="form-check-label" for="checkbox">
                    Saya setuju dengan persyaratan dalam menyewa aset.
                  </label>
                </div>

                <!-- Tombol Submit -->
                <div class="text-center">
                  <button class="btn btn-primary btn-lg" type="submit">Daftar Aset</button>
                </div>
              </form>
              <!-- End Form -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-registration {
  background-color: #fff;
  color: #333;
}

.card-registration h3 {
  color: #007bff;
}

.card-registration label {
  color: #555;
}

.card-registration input,
.card-registration textarea,
.card-registration select {
  border: 1px solid #ccc;
}

.card-registration input:focus,
.card-registration textarea:focus,
.card-registration select:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
}

.card-registration .input-group-text {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
}

.card-registration .form-check-input:checked {
  background-color: #007bff;
  border-color: #007bff;
}

.card-registration .btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.card-registration .btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>
