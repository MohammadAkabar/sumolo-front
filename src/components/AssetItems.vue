<script>
import { mapActions, mapWritableState } from 'pinia'
import { useAssetStore } from '../stores/assets'

export default {
  data() {
    return {
      id: localStorage.id
    }
  },
  methods: {
    ...mapActions(useAssetStore, ['fetchDataAsset', 'fetchAssetById', 'fetchUserAsset']),

    // format rupiah
    formatRupiah(number) {
      if (!number) return 'Rp 0'

      const numberString = number.toString()
      const split = numberString.split(',')
      const sisa = split[0].length % 3
      let rupiah = split[0].substr(0, sisa)
      const ribuan = split[0].substr(sisa).match(/\d{3}/g)

      if (ribuan) {
        const separator = sisa ? '.' : ''
        rupiah += separator + ribuan.join('.')
      }

      rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah

      return 'Rp ' + rupiah
    }
  },
  computed: {
    // ...mapState(useAssetStore, ['Title'])
    ...mapWritableState(useAssetStore, ['dataAsset', 'dataUserAssets']),
    formattedDataAsset() {
      return this.dataAsset.map((item) => {
        return {
          ...item,
          formattedPrice: this.formatRupiah(item.price)
        }
      })
    },
    formattedDataAssetUsers() {
      return this.dataUserAssets.map((item) => {
        return {
          ...item,
          formattedPrice: this.formatRupiah(item.price)
        }
      })
    }
  },
  props: {
    isAll: Boolean,
    isUsersAssets: Boolean
  },

  created() {
    this.fetchDataAsset()
    this.fetchUserAsset()
  }
}
</script>
<template>
  <section id="recent-posts" class="recent-posts sections-bg mt-4">
    <div id="" class="container" data-aos="fade-up">
      <div class="section-header">
        <h2 class="section-title">Aset</h2>
        <p class="section-description">Merupakan Aset Yayasan Panembahan Sumolo</p>
      </div>

      <!-- Single asset card -->
      <div v-if="!isAll" class="row gy-4">
        <div
          v-for="(item, index) in formattedDataAsset.slice(0, 3)"
          :key="index"
          class="col-xl-4 col-md-6"
        >
          <article class="asset-card">
            <div class="card-img">
              <img src="../assets/img/user/default.jpg" alt="" class="img-fluid" />
            </div>
            <div class="card-body">
              <h2 class="card-title">
                <a href="">{{ item.name }}</a>
              </h2>
              <div class="card-info d-flex align-items-center">
                <img src="../assets/img/user/user.jpg" alt="" class="img-fluid author-img" />
                <div class="meta">
                  <p class="author">{{ item.User?.name }}</p>
                  <p class="address">{{ item.address }}</p>
                  <p class="price">
                    <time datetime="2022-01-01">{{ item.formattedPrice }}</time>
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <i class="bi bi-star-fill me-1"></i>
                <i class="bi bi-star-fill me-1"></i>
                <i class="bi bi-star-fill me-1"></i>
              </div>
              <div class="card-footer d-flex align-items-center">
                <button
                  @click.prevent="$router.push(`/DetailAsset/${item.id}`)"
                  class="btn btn-primary align-it"
                >
                  Lihat Detail Aset
                </button>
              </div>
            </div>
          </article>
        </div>
        <!-- Load more button for all assets -->
        <button
          v-if="!isUsersAssets"
          @click.prevent="$router.push(`/all-assets`)"
          class="btn btn-outline-primary"
        >
          More
        </button>
      </div>
      <!-- End Single asset card -->

      <!-- All assets -->
      <div v-if="isAll && !isUsersAssets" class="row gy-4">
        <div v-for="(item, index) in formattedDataAsset" :key="index" class="col-xl-4 col-md-6">
          <article class="asset-card">
            <div class="card-img">
              <img src="../assets/img/user/default.jpg" alt="" class="img-fluid" />
            </div>
            <div class="card-body">
              <h2 class="card-title">
                <a href="">{{ item.name }}</a>
              </h2>
              <div class="card-info d-flex justify-content-center">
                <img src="../assets/img/blog/blog-author.jpg" alt="" class="img-fluid author-img" />
                <div class="meta">
                  <p class="author">{{ item.User?.name }}</p>
                  <p class="address">{{ item.address }}</p>
                  <p class="price">
                    <time datetime="2022-01-01">{{ item.formattedPrice }}</time>
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <i class="bi bi-star-fill me-1"></i>
                <i class="bi bi-star-fill me-1"></i>
                <i class="bi bi-star-fill me-1"></i>
              </div>
              <div class="card-footer justify-content-center">
                <button
                  @click.prevent="$router.push(`/DetailAsset/${item.id}`)"
                  class="btn btn-primary"
                >
                  Lihat Detail Aset
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- User's assets -->
      <div v-if="isAll && isUsersAssets" class="row gy-4">
        <div
          v-for="(item, index) in formattedDataAssetUsers"
          :key="index"
          class="col-xl-4 col-md-6"
        >
          <article class="asset-card">
            <div class="card-img">
              <img src="../assets/img/user/default.jpg" alt="" class="img-fluid" />
            </div>
            <div class="card-body">
              <h2 class="card-title">
                <a href="">{{ item.name }}</a>
              </h2>
              <div class="card-info d-flex align-items-center">
                <img src="../assets/img/blog/blog-author.jpg" alt="" class="img-fluid author-img" />
                <div class="meta">
                  <p class="author">{{ item.User?.name }}</p>
                  <p class="address">{{ item.address }}</p>
                  <p class="price">
                    <time datetime="2022-01-01">{{ item.formattedPrice }}</time>
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <i class="bi bi-star-fill me-1"></i>
                <i class="bi bi-star-fill me-1"></i>
                <i class="bi bi-star-fill me-1"></i>
              </div>
              <div class="card-footer d-flex justify-content-center">
                <button
                  @click.prevent="$router.push(`/DetailAsset/${item.id}`)"
                  class="btn btn-primary"
                >
                  Lihat Detail Aset
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
      <!-- End asset cards -->
    </div>
  </section>
  <div v-if="!ataUserAssets">
    <h5 class="text-center">
      <router-link to="/"> Anda belum punya aset silahkan daftar </router-link>
    </h5>
  </div>
</template>

<style scoped>
/* Custom styles without changing the structure */
.asset-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.asset-card:hover {
  transform: translateY(-5px);
}

.card-img {
  position: relative;
  overflow: hidden;
}

.card-img img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
}

.asset-card:hover .card-img img {
  transform: scale(1.1);
}

.card-info {
  margin-top: 10px;
}

.author-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.card-content {
  padding: 15px;
  position: relative;
}

.card-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5));
  pointer-events: none;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
  /* Warna teks diubah agar sesuai dengan latar belakang transparan */
}

.card-body {
  padding: 15px;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
}

.additional-info {
  color: #ddd;
  /* Warna teks untuk informasi tambahan */
}
</style>
