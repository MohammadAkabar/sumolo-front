import { defineStore } from 'pinia'
import axios from 'axios'

export const useAssetStore = defineStore('asset', {
  state: () => ({
    dataAsset: [],
    dataAssetById: {}
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

    async fetchAssetById(id) {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `http://localhost:3000/assets/${id}`, //url backend
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dataAssetById = data
        console.log(this.dataAssetById);
      } catch (error) {
        console.log(error);
      }
    }
  }
})
