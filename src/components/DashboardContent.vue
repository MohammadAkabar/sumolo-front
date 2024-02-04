<script>
import Sidebar from '../components/Items/Sidebar.vue'
import { mapActions, mapWritableState } from 'pinia'
import { useAssetStore } from '../stores/assets'

export default {
  components: {
    Sidebar
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  props: {
    isAssetsManagementPage: Boolean
  },
  computed: {
    ...mapWritableState(useAssetStore, ['dataAsset']),
    filteredData() {
      return this.dataAsset.filter((request) => {
        const searchData = this.searchQuery.toLowerCase()
        const matchesName = request.name.toLowerCase().includes(searchData)
        const matchesUserName = request.User.name.toLowerCase().includes(searchData)
        const matchesAddress = request.address.toLowerCase().includes(searchData)

        if (request.Recipes && request.Recipes.length > 0) {
          // Jika Recipes ada dan tidak kosong
          const recipe = request.Recipes[0]
          const isWaiting = recipe.is_active && recipe.is_active.toLowerCase() === 'waiting'
          const isTrue = recipe.is_active && recipe.is_active.toLowerCase() === 'true'

          return (
            matchesName ||
            matchesUserName ||
            matchesAddress ||
            (isWaiting && 'menunggu'.includes(searchData)) ||
            (isTrue && 'sudah'.includes(searchData))
          )
        } else {
          // Jika Recipes tidak ada atau kosong
          return matchesName || matchesUserName || matchesAddress || 'belum'.includes(searchData) // Tambahkan ini agar data yang belum divalidasi tetap muncul
        }
      })
    }
  },
  methods: {
    ...mapActions(useAssetStore, ['fetchDataAsset', 'acceptedAsset', 'deleteAsset']),
    async doAccepted(id) {
      try {
        console.log(id, 'id')
        await this.acceptedAsset(id)
      } catch (error) {
        console.error(error)
      }
    },

    // del asset
    async doDelete(id) {
      try {
        console.log(id, 'assetid')
        await this.deleteAsset(id)
      } catch (error) {
        console.error(error)
      }
    }
  },
  created() {
    this.fetchDataAsset()
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
                <th>id</th>
                <th>Nama Aset</th>
                <th>Nama Pemilik</th>
                <th>Alamat Aset</th>
                <th>Harga</th>
                <th>Nomor Hp</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <!-- Loop melalui dataAsset -->
              <tr v-for="(request, index) in filteredData" :key="index">
                <td>{{ request.id }}</td>
                <td>{{ request.name }}</td>
                <td>{{ request.User.name }}</td>
                <td>{{ request.address }}</td>
                <td>{{ request.price }}</td>
                <td>{{ request.User.phone_number }}</td>
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
