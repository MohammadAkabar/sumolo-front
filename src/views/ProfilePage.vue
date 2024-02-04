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
            <div class="mb-3">
              <label class="form-label labels">Name</label>
              <input
                v-model="form.name"
                type="text"
                class="form-control"
                :placeholder="dataUserById.name"
              />
            </div>
            <div class="mb-3">
              <label class="form-label labels">Email</label>
              <input
                v-model="dataUserById.email"
                type="text"
                class="form-control"
                :placeholder="dataUserById.email"
                disabled
              />
            </div>
            <div class="mb-3">
              <label class="form-label labels">Mobile Number</label>
              <input
                v-model="form.phoneNumber"
                type="text"
                class="form-control"
                :placeholder="dataUserById.phone_number"
              />
            </div>
            <div class="mb-3">
              <label class="form-label labels">Address</label>
              <input
                v-model="form.address"
                type="text"
                class="form-control"
                :placeholder="dataUserById.address"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-4">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #f8f9fa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.col-md-3 {
  border-right: 1px solid #dee2e6;
}

.card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.labels {
  font-weight: bold;
}

.form-label {
  color: #007bff;
}

.form-control {
  border: 1px solid #ced4da;
  border-radius: 5px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>
