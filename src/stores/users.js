import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    dataUser: [],
    dataUserById: {}
  }),
  actions: {
    async fetchDataUser() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: 'http://localhost:3000/users/', //url backend
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dataUser = data.datas
      } catch (error) {
        console.log(error)
      }
    },
    async fetchDataUserById(id) {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `http://localhost:3000/user/${id}`, //url backend
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dataUserById = data.datas
        console.log(this.dataUserById)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
