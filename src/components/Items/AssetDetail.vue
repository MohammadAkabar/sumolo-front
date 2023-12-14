<script>
import { mapActions, mapWritableState } from 'pinia'
import { useAssetStore } from '../../stores/assets'
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
  <!-- Page Content -->
  <div class="container">
    <!-- Portfolio Item Heading -->
    <h1 class="my-4">
      {{ dataAssetById.name }}
    </h1>

    <!-- Portfolio Item Row -->
    <div class="row">
      <div class="col-md-8">
        <img class="img-fluid" :src="dataAssetById.image" alt="" />
      </div>

      <div class="col-md-4">
        <h3 class="my-3">{{ dataAssetById.name }}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida
          pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec
          metus. Mauris ultricies, justo eu convallis placerat, felis enim.
        </p>
        <h2 class="my-3">{{ dataAssetById.address }}</h2>
        <h3 class="my-3">Rp. {{ dataAssetById.price }}</h3>
      </div>
    </div>
    <!-- /.row -->

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
