import { defineStore } from 'pinia'
import axios from 'axios'

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
          url: 'http://localhost:3000/assets', //url backend
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
          url: `http://localhost:3000/assets/user/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dataUserAssets = data.datas
      } catch (error) {
        console.log(error)
      }
    },

    async fetchAssetById(id) {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `http://localhost:3000/assets/${id}`, //url backend
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
          url: `http://localhost:3000/assets/request/${id}`, //url backend
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
    }
  }
})
