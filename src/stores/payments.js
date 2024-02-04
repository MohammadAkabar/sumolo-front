import { defineStore } from 'pinia'
import axios from 'axios'
const URL_BACK_END = import.meta.env.VITE_BACK_END_URL

export const usePaymentStore = defineStore('payment', {
  state: () => ({
    dataPayment: []
  }),
  actions: {
    async fetchDataPayment() {
      try {
        const id = localStorage.getItem('id')
        const { data } = await axios({
          method: 'POST',
          url: `${URL_BACK_END}/payments`,
          data: { id },
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dataPayment = data.datas
      } catch (error) {
        console.log(error)
      }
    }
  }
})
