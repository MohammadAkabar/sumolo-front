<script>
import { mapActions, mapWritableState } from 'pinia'
import { useAssetStore } from '../stores/assets'

export default {
  methods: {
    ...mapActions(useAssetStore, ['fetchDataAsset', 'fetchAssetById']),
    detail(id) {
      this.fetchAssetById(id)
    }
  },
  computed: {
    // ...mapState(useAssetStore, ['Title'])
    ...mapWritableState(useAssetStore, ['dataAsset'])
  },
  props: {
    isAll: Boolean
  },

  created() {
    this.fetchDataAsset()
  }
}
</script>
<template>
  <section id="recent-posts" class="recent-posts sections-bg mt-4">
    <div class="container" data-aos="fade-up">
      <div class="section-header">
        <h2>Assets</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim aut dignissimos quos
          temporibus mollitia in quam amet nulla maiores fugit! Soluta temporibus quidem maiores ad
          excepturi nemo rem non eveniet!
        </p>
      </div>

      <div v-if="isAll === false" class="row gy-4">
        <div v-for="(item, index) in dataAsset.slice(0, 3)" :key="index" class="col-xl-4 col-md-6">
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
                  <time datetime="2022-01-01">{{ item.price }}</time>
                </p>
                <button
                  @click.prevent="this.$router.push(`/DetailAsset/${item.id}`)"
                  class="btn btn-primary"
                >
                  Detail {{ item.id }}
                </button>
                >
              </div>
            </div>
          </article>
        </div>
        <button @click.prevent="this.$router.push(`/all-assets`)" class="btn btn-outline-primary">
          more
        </button>
      </div>

      <!-- showing all asset -->
      <div v-if="isAll === true" class="row gy-4">
        <div v-for="(item, index) in dataAsset" :key="index" class="col-xl-4 col-md-6">
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
                  <time datetime="2022-01-01">{{ item.price }}</time>
                </p>
                <button
                  @click.prevent="this.$router.push(`/DetailAsset/${item.id}`)"
                  class="btn btn-primary"
                >
                  Detail {{ item.id }}
                </button>
                >
              </div>
            </div>
          </article>
        </div>
      </div>
      <!-- end showing -->

      <!-- End post list item -->
      <!-- End recent posts list -->
    </div>
  </section>
</template>
