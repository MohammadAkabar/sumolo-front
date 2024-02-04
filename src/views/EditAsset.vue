<script>
import { mapActions, mapWritableState } from 'pinia'
import { useAssetStore } from '../stores/assets'
export default {
  computed: {
    ...mapWritableState(useAssetStore, ['dataAssetById'])
  },
  methods: {
    ...mapActions(useAssetStore, ['fetchAssetById'])
  },
  created() {
    this.fetchAssetById(this.$route.params.id)
  }
}
</script>

<template>
  <div class="container">
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
  </div>
</template>
