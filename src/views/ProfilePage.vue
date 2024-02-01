<script>
import { mapActions, mapWritableState } from 'pinia'
import { useUserStore } from '../stores/users'

export default {
  computed: {
    ...mapWritableState(useUserStore, ['dataUserById'])
  },
  methods: {
    ...mapActions(useUserStore, ['fetchDataUserById'])
  },
  created() {
    this.fetchDataUserById(this.$route.params.id)
  }
}
</script>
<template>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
      <div class="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
          <img class="rounded-circle mt-5" width="150px" :src="dataUserById.image" alt="" />
          <span class="font-weight-bold">{{ dataUserById.name }}</span
          ><span class="text-black-50">{{ dataUserById.email }}</span
          ><span> </span>
        </div>
      </div>
      <div class="col-md-5 border-right">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-right">Profile Settings</h4>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <label class="labels">Name</label
              ><input type="text" class="form-control" :placeholder="dataUserById.name" value="" />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <label class="labels">Mobile Number</label
              ><input
                type="text"
                class="form-control"
                :placeholder="dataUserById.phone_number"
                value=""
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Address</label
              ><input
                type="text"
                class="form-control"
                :placeholder="dataUserById.address"
                value=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
