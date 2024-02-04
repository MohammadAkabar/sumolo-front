<script>
import { mapActions, mapWritableState } from 'pinia'
import { useAssetStore } from '../../stores/assets'
import { usePaymentStore } from '../../stores/payments'
export default {
  computed: {
    ...mapWritableState(useAssetStore, ['dataAssetById', 'dataRequestAsset']),
    ...mapWritableState(usePaymentStore, ['dataPayment'])
  },
  methods: {
    ...mapActions(useAssetStore, ['fetchAssetById', 'requestAsset']),
    ...mapActions(usePaymentStore, ['fetchDataPayment']),
    async doRequest() {
      await this.requestAsset(this.dataAssetById.id)
    },
    async doPayment() {
      try {
        await this.fetchDataPayment()
        if (this.dataPayment && this.dataPayment.token) {
          const snapToken = this.dataPayment.token

          window.snap.pay(snapToken, {
            onSuccess: this.onPaymentSuccess,
            onPending: this.onPaymentPending,
            onError: this.onPaymentError,
            onClose: this.onPaymentClose
          })
        } else {
          // Handle case when snapToken is not available
          console.error('Snap token is not available')
        }
      } catch (error) {
        console.error(error)
      }
    },
    onPaymentSuccess(result) {
      alert('Pembayaran berhasil!')
      console.log(result)
    },
    onPaymentPending(result) {
      alert('Menunggu pembayaran...')
      console.log(result)
    },
    onPaymentError(result) {
      alert('Pembayaran gagal!')
      console.log(result)
    },
    onPaymentClose() {
      alert('Anda menutup popup pembayaran.')
    }
  },
  created() {
    this.fetchAssetById(this.$route.params.id)
    // console.log(this.dataAssetById.Recipes)
  }
}
</script>

<template>
  <!-- Page Content -->
  <div class="container my-5 pt-3">
    <!-- Portfolio Item Heading -->
    <h1 class="my-4 mt-5">{{ dataAssetById.name }}</h1>

    <!-- Portfolio Item Row -->
    <div class="row">
      <div class="col-md-8">
        <img
          class="img-fluid rounded"
          src="https://via.placeholder.com/900x350"
          :alt="dataAssetById.name"
        />
      </div>

      <div class="col-md-4">
        <h3 class="my-3">Kategori: {{ dataAssetById.name }}</h3>
        <div class="d-flex align-items-center mb-3">
          <i class="bi bi-star-fill me-1"></i>
          <i class="bi bi-star-fill me-1"></i>
          <i class="bi bi-star-fill me-1"></i>
        </div>
        <p class="my-3">{{ dataAssetById.description }}</p>
        <div class="row mb-3">
          <div class="col-sm-6">
            <span class="fw-bold fs-6">Harga Sewa</span>
          </div>
          <div class="col-sm-6">
            <span class="fs-6">Rp. {{ dataAssetById.price }}</span>
          </div>
        </div>

        <!-- Validasi Aset Button -->
        <form @submit.prevent="doRequest">
          <button
            v-if="dataAssetById.Recipes && dataAssetById.Recipes.length > 0"
            :class="{
              'btn btn-success me-2': dataAssetById.Recipes[0].is_active === 'true',
              'btn btn-warning me-2': dataAssetById.Recipes[0].is_active === 'waiting',
              'btn btn-outline-success me-2':
                dataAssetById.Recipes[0].is_active !== 'true' &&
                dataAssetById.Recipes[0].is_active !== 'waiting'
            }"
            type="button"
          >
            {{
              dataAssetById.Recipes[0].is_active === 'true'
                ? 'Sudah Validasi'
                : dataAssetById.Recipes[0].is_active === 'waiting'
                ? 'Menunggu Validasi'
                : 'Validasi Aset'
            }}
          </button>

          <!-- Tombol Validasi Aset -->
          <button
            v-else="dataAssetById.Recipes === undefined"
            class="btn btn-outline-danger me-2"
            type="submit"
          >
            Validasi Aset
          </button>
        </form>

        <!-- Tombol Pembayaran -->
        <form @submit.prevent="doPayment">
          <div v-if="dataAssetById.Recipes && dataAssetById.Recipes.length > 0">
            <button
              v-if="dataAssetById.Recipes && dataAssetById.Recipes[0].is_active === 'true'"
              class="btn btn-primary mt-3"
              id="pay-button"
            >
              Pay!
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Informasi Pemilik Aset -->
    <div v-if="dataAssetById && dataAssetById.User" class="mt-4">
      <h3>Informasi Penyewa</h3>
      <div class="d-flex align-items-center mb-2">
        <span class="fw-bold me-2">Nama:</span>
        <span>{{ dataAssetById.User.name }}</span>
      </div>
      <div class="d-flex align-items-center mb-2">
        <span class="fw-bold me-2">Alamat:</span>
        <span>{{ dataAssetById.User.address }}</span>
      </div>
      <div class="d-flex align-items-center mb-2">
        <span class="fw-bold me-2">No. Telp:</span>
        <span>{{ dataAssetById.User.phone_number }}</span>
      </div>
    </div>

    <!-- Gambar Terkait -->
    <h3 class="my-4">Gambar Terkait</h3>
    <div class="row">
      <div
        v-for="(image, index) in dataAssetById.related_images"
        :key="index"
        class="col-md-3 col-sm-6 mb-4"
      >
        <img :src="image" class="img-fluid rounded" :alt="'Related Image ' + (index + 1)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Gaya khusus untuk komponen ini */
img {
  max-width: 100%;
  height: auto;
}

.btn {
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.btn-outline-success {
  color: #28a745;
  border-color: #28a745;
}

.btn-outline-success:hover {
  background-color: #28a745;
  color: #fff;
}

.btn-outline-warning {
  color: #ffc107;
  border-color: #ffc107;
}

.btn-outline-warning:hover {
  background-color: #ffc107;
  color: #000;
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:hover {
  background-color: #dc3545;
  color: #fff;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

/* Efek Hover pada Gambar Terkait */
.row img {
  transition: transform 0.3s;
}

.row img:hover {
  transform: scale(1.1);
}
</style>
