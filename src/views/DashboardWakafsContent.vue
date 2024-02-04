<script>
//import sidebar
import Sidebar from '../components/Items/Sidebar.vue'
import { mapActions, mapWritableState } from 'pinia'
import { useAssetStore } from '../stores/assets'
export default {
  components: {
    Sidebar
  },
  computed: {
    ...mapWritableState(useAssetStore, ['dataAllWakaf'])
  },
  methods: {
    ...mapActions(useAssetStore, ['fetchAllWakaf'])
  },
  created() {
    // getthisyeartime
    this.fetchAllWakaf(2022)
    console.log(this.dataAllWakaf)
  }
}
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Sidebar -->
      <Sidebar />

      <!-- Content -->
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <!-- Page Header -->
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
        >
          <h1 class="h2">Request aset</h1>
        </div>

        <!-- Search Bar -->
        <div class="mb-3">
          <label for="search" class="form-label">Cari Aset:</label>
          <input
            type="text"
            class="form-control"
            id="search"
            v-model="searchQuery"
            placeholder="Masukkan kata kunci pencarian"
          />
        </div>

        <!-- Statistic Cards -->
        <div class="table-responsive">
          <table class="table table-striped table-hover">
            <caption></caption>
            <thead class="thead-dark">
              <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Jumlah Wakaf</th>
                <th>Status</th>
                <th>Tanggal Pendaftaran</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <!-- Loop melalui dataAsset -->
              <tr v-for="(penerima, index) in dataAllWakaf" :key="index">
                <td>{{ penerima.name }}</td>
                <td>{{ penerima.address }}</td>
                <td>{{ penerima.amount }}</td>
                <td>{{ penerima.is_active }}</td>
                <td>sdasdasd</td>
                <td></td>
                <td>
                  <div v-if="!isAssetsManagementPage">
                    <!-- Tombol untuk menerima request -->
                    <button
                      v-if="request.Recipes && request.Recipes.length > 0"
                      :class="{
                        'btn btn-success me-2': request.Recipes[0].is_active === 'true',
                        'btn btn-warning me-2': request.Recipes[0].is_active === 'waiting'
                      }"
                      type="button"
                      @click="
                        request.Recipes[0].is_active === 'waiting' ? doAccepted(request.id) : null
                      "
                    >
                      {{
                        request.Recipes[0].is_active === 'true'
                          ? 'Sudah Validasi'
                          : request.Recipes[0].is_active === 'waiting'
                          ? 'Menunggu Validasi'
                          : 'Validasi Aset'
                      }}
                    </button>

                    <!-- Tombol Validasi Aset -->
                    <button
                      v-else="request.Recipes === undefined"
                      class="btn btn-danger me-2"
                      type="submit"
                    >
                      Belum Validasi
                    </button>
                  </div>

                  <div v-if="isAssetsManagementPage">
                    <button class="btn btn-primary me-2">Edit</button>
                    <button class="btn btn-danger" @click="doDelete(request.id)">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles go here */

/* Adjusting sidebar width */
#sidebar {
  min-width: 200px;
  max-width: 250px;
  background-color: #343a40;
  color: #fff;
  transition: all 0.3s;
  height: 100vh;
  position: fixed;
}

/* Styling the Page Header */
.border-bottom {
  border-bottom: 1px solid #dee2e6;
}
</style>
