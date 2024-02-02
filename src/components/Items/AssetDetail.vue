<script>
import { mapActions, mapWritableState } from 'pinia'
import { useAssetStore } from '../../stores/assets'
export default {
  computed: {
    ...mapWritableState(useAssetStore, ['dataAssetById', 'dataRequestAsset'])
  },
  methods: {
    ...mapActions(useAssetStore, ['fetchAssetById', 'requestAsset']),
    async doRequest() {
      await this.requestAsset(this.dataAssetById.id)
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
  <div class="container">
    <!-- Portfolio Item Heading -->
    <h1 class="my-4">
      {{ dataAssetById.name }}
    </h1>

    <!-- Portfolio Item Row -->
    <div class="row">
      <div class="col-md-8">
        <img class="img-fluid" src="https://via.placeholder.com/900x350" alt="" />
      </div>

      <div class="col-md-4">
        <h3 class="my-3">Kategori :{{ dataAssetById.name }}</h3>
        <div class="flex">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </div>
        <p class="my-3">Lokasi aset ini berlokasi di {{ dataAssetById.address }}</p>
        <div class="row d-flex align-items-center">
          <span class="col-sm-6 fs-6">Harga disewakan</span>
          <h4 class="col-sm-6">Rp. {{ dataAssetById.price }}</h4>
        </div>
        <form @submit.prevent="doRequest">
          <button
            v-if="dataAssetById.Recipes && dataAssetById.Recipes.length > 0"
            :class="{
              'btn btn-outline-success mt-3': dataAssetById.Recipes[0].is_active === 'true',
              'btn btn-outline-warning mt-3': dataAssetById.Recipes[0].is_active === 'waiting'
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
          <button
            v-else="dataAssetById.Recipes === undefined"
            class="btn btn-outline-danger mt-3"
            type="submit"
          >
            Validasi Aset
          </button>
        </form>
      </div>
    </div>
    <!-- /.row -->

    <!-- Informasi pemilik aset -->
    <div v-if="dataAssetById && dataAssetById.User">
      <h3 class="my-4">Informasi Penyewa</h3>
      <div class="d-flex align-items-center">
        <h6>Nama :</h6>
        <h6 v-if="dataAssetById.User.name">{{ dataAssetById.User.name }}</h6>
      </div>
      <div class="d-flex align-items-center">
        <h6>Alamat :</h6>
        <h6>{{ dataAssetById.User.address }}</h6>
      </div>
      <div class="d-flex align-items-center">
        <h6>No. Telp :</h6>
        <h6>{{ dataAssetById.User.phone_number }}</h6>
      </div>
    </div>

    <!-- Related Projects Row -->
    <h3 class="my-4">Gambar</h3>

    <div class="row">
      <div class="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img class="img-fluid" src="https://via.placeholder.com/500x300" alt="" />
        </a>
      </div>

      <div class="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img class="img-fluid" src="https://via.placeholder.com/500x300" alt="" />
        </a>
      </div>

      <div class="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img class="img-fluid" src="https://via.placeholder.com/500x300" alt="" />
        </a>
      </div>

      <div class="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img class="img-fluid" src="https://via.placeholder.com/500x300" alt="" />
        </a>
      </div>
    </div>
    <!-- /.row -->
  </div>
  <!-- /.container -->
</template>
