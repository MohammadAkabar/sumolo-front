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
    this.fetchDataAsset(), this.fetchUserAsset()
  }
}
</script>
<template>
  <section id="recent-posts" class="recent-posts sections-bg mt-4">
    <div id="" class="container" data-aos="fade-up">
      <div class="section-header">
        <h2>Aset</h2>
        <p>Merupakan Aset Yayasan Panembahan sumolo</p>
      </div>

      <div v-if="isAll === false" class="row gy-4">
        <div
          v-for="(item, index) in formattedDataAsset.slice(0, 3)"
          :key="index"
          class="col-xl-4 col-md-6"
        >
          <article>
            <div class="post-img">
              <img :src="item.image" alt="" class="img-fluid" />
            </div>
            <p class="post-category"></p>
            <h2 class="title">
              <a href="blog-details.html">{{ item.name }}</a>
            </h2>
            <div class="d-flex align-items-center">
              <img
                src="../assets/img/user/user.jpg"
                alt=""
                class="img-fluid post-author-img flex-shrink-0"
              />
              <div class="post-meta">
                <p class="post-author">{{ item.User?.name }}</p>
                <p class="post-address">{{ item.address }}</p>
                <p class="post-price">
                  <time datetime="2022-01-01">{{ item.formattedPrice }}</time>
                </p>
                <button
                  @click.prevent="this.$router.push(`/DetailAsset/${item.id}`)"
                  class="btn btn-primary"
                >
                  Detail
                </button>
              </div>
            </div>
          </article>
        </div>
        <button @click.prevent="this.$router.push(`/all-assets`)" class="btn btn-outline-primary">
          more
        </button>
      </div>

      <!-- showing all asset -->
      <div v-if="isAll === true && isUsersAssets === false" class="row gy-4">
        <div v-for="(item, index) in formattedDataAsset" :key="index" class="col-xl-4 col-md-6">
          <article>
            <div class="post-img">
              <img :src="item.image" alt="" class="img-fluid" />
            </div>
            <p class="post-category"></p>
            <h2 class="title">
              <a href="blog-details.html">{{ item.name }}</a>
            </h2>
            <div class="d-flex align-items-center">
              <img
                src="../assets/img/blog/blog-author.jpg"
                alt=""
                class="img-fluid post-author-img flex-shrink-0"
              />
              <div class="post-meta">
                <p class="post-author">{{ item.User?.name }}</p>
                <p class="post-address">{{ item.address }}</p>
                <p class="post-price">
                  <time datetime="2022-01-01">{{ item.formattedPrice }}</time>
                </p>
                <button
                  @click.prevent="this.$router.push(`/DetailAsset/${item.id}`)"
                  class="btn btn-primary"
                >
                  Detail {{ item.id }}
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- showing user asset -->
      <div v-if="isAll === true && isUsersAssets === true" class="row gy-4">
        <div
          v-for="(item, index) in formattedDataAssetUsers"
          :key="index"
          class="col-xl-4 col-md-6"
        >
          <article>
            <div class="post-img">
              <img :src="item.image" alt="" class="img-fluid" />
            </div>
            <p class="post-category"></p>
            <h2 class="title">
              <a href="blog-details.html">{{ item.name }}</a>
            </h2>
            <div class="d-flex align-items-center">
              <img
                src="../assets/img/blog/blog-author.jpg"
                alt=""
                class="img-fluid post-author-img flex-shrink-0"
              />
              <div class="post-meta">
                <p class="post-author">{{ item.User?.name }}</p>
                <p class="post-address">{{ item.address }}</p>
                <p class="post-price">
                  <time datetime="2022-01-01">{{ item.formattedPrice }}</time>
                </p>
                <button
                  @click.prevent="this.$router.push(`/DetailAsset/${item.id}`)"
                  class="btn btn-primary"
                >
                  Detail {{ item.id }}
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
      <!-- end showing -->
    </div>
  </section>
</template>
