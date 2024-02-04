import { defineStore } from 'pinia'
import axios from 'axios'
const URL_BACK_END = import.meta.env.VITE_BACK_END_URL

export const useAssetStore = defineStore('asset', {
  state: () => ({
    dataAsset: [],
    dataAssetById: {},
    dataUserAssets: []
  }),

  actions: {
    async fetchDataAsset() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${URL_BACK_END}/assets`, //url backend
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dataAsset = data.datas
      } catch (error) {
        console.log(error)
      }
    },

    async fetchUserAsset() {
      try {
        const id = localStorage.getItem('id')
        const { data } = await axios({
          method: 'GET',
          url: `${URL_BACK_END}/assets/user/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dataUserAssets = data.datas
      } catch (error) {
        console.log(error.mesasge)
      }
    },

    async fetchAssetById(id) {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${URL_BACK_END}/assets/${id}`, //url backend
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dataAssetById = data.datas
      } catch (error) {
        console.log(error)
      }
    },

    async requestAsset(id) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${URL_BACK_END}/assets/request/${id}`, //url backend
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dataRequestAsset = data.datas
        this.router.push(`/DetailAsset/${id}`)
        swal.fire({
          icon: 'success',
          text: 'Request Success, wait for response'
        })
      } catch (error) {
        swal.fire({
          icon: 'success',
          text: 'Request Success, wait for response'
        })
        console.log(error)
      }
    },
    async updateAsset() {},
    async registerAsset(form) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${URL_BACK_END}/assets`,
          data: form,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dataRegisterAsset = data.datas
        this.router.push('/')
        swal.fire({
          icon: 'success',
          text: 'Register Success'
        })
      } catch (error) {
        swal.fire({
          icon: 'error',
          text: `Register failed, ${error.message}`
        })
        console.error(error)
      }
    },
    async acceptedAsset(id) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${URL_BACK_END}/assets/admin/accept/`,
          data: { id },
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.acceptedAsset = data.datas
        this.router.push(`/admin/users`)
        swal.fire({
          icon: 'success',
          text: 'accepted Success, wait for response'
        })
      } catch {}
    },

    async deleteAsset(id) {
      try {
        const { data } = await axios({
          method: 'DELETE',
          url: `${URL_BACK_END}/assets/admin/delete`,
          data: { id }, //assets
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dataDeleteAsset = data.datas
        this.router.push('/admin/assets')
        swal.fire({
          icon: 'success',
          text: 'Delete Success'
        })
      } catch (error) {
        swal.fire({
          icon: 'error',
          text: `Delete failed, ${error.message}`
        })
        console.error(error)
      }
    },

    // wakaf
    // async registerWakaf(form) {
    //   try {
    //     const { data } = await axios({
    //       method: 'POST',
    //       url: `${URL_BACK_END}/wakaf`,
    //       data: form,
    //       headers: {
    //         access_token: localStorage.getItem('access_token')
    //       }
    //     })
    //     this.dataRegisterWakaf = data.datas
    //     this.router.push('/')
    //     swal.fire({
    //       icon: 'success',
    //       text: 'Register Success'
    //     })
    //   } catch (error) {
    //     swal.fire({
    //       icon: 'error',
    //       text: 'Register failed'
    //     })
    //   }
    // },

    async fetchAllWakaf(year) {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${URL_BACK_END}/admin/distributions/${year}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dataAllWakaf = data.datas
      } catch (error) {
        console.log(error)
      }
    }
  }
})
