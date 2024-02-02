<script>
import { mapActions, mapWritableState } from 'pinia'
import { useUserStore } from '../stores/users'

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        image: '',
        address: '',
        phoneNumber: ''
      }
    }
  },
  computed: {
    ...mapWritableState(useUserStore, ['dataUserById', 'dataUpdatedUser'])
  },
  methods: {
    ...mapActions(useUserStore, ['fetchDataUserById', 'updateProfile']),
    doUpdatedUser() {
      this.updateProfile(this.form)
      this.dataUserById = { ...this.dataUserById, ...this.form }
    }
  },
  created() {
    this.fetchDataUserById(this.$route.params.id).then(() => {
      // Pastikan dataUserById sudah terisi sebelum mengakses propertinya
      this.form = {
        name: this.dataUserById.name || '',
        email: this.dataUserById.email || '',
        image: this.dataUserById.image || '',
        address: this.dataUserById.address || '',
        phoneNumber: this.dataUserById.phone_number || ''
      }
    })
  }
}
</script>
<template>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
      <div class="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
          <img
            class="rounded-circle mt-5"
            src="../assets/img/user/user.jpg"
            alt=""
            style="width: 150px"
          />
          <span class="font-weight-bold">{{ dataUserById.name }}</span
          ><span class="text-black-50">{{ dataUserById.email }}</span>
        </div>
      </div>
      <div class="col-md-5 border-right">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-right">Profile Settings</h4>
          </div>
          <form @submit.prevent="doUpdatedUser">
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">Name</label
                ><input
                  v-model="form.name"
                  type="text"
                  class="form-control"
                  :placeholder="dataUserById.name"
                />
              </div>
              <div class="col-md-7">
                <label class="labels">Email</label
                ><input
                  v-model="dataUserById.email"
                  type="text"
                  class="form-control"
                  :placeholder="dataUserById.email"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Mobile Number</label
                ><input
                  v-model="form.phoneNumber"
                  type="text"
                  class="form-control"
                  :placeholder="dataUserById.phone_number"
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Address</label
                ><input
                  v-model="form.address"
                  type="text"
                  class="form-control"
                  :placeholder="dataUserById.address"
                />
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-5">Update profile</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
