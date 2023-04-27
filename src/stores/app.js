import { defineStore } from 'pinia'
import axios from 'axios'
export const useAppStore = defineStore('app', {
  state: () => ({
    Title: 'ini tittle', //state
    Data: 0,
    dataAsset: [],
    token: [],
    role: []
  }),
  actions: {
    async fetchData() {
      this.Data += 1
    },
    async login(form) {
      try {
        console.log(form)
        
        const { data } = await axios({
          method: 'POST',
          url: 'http://localhost:3000/auth/login', //url backend
          data: form //req.body
        })
          console.log(data.datas.role,"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

        localStorage.setItem('access_token', data.datas.access_token)
        localStorage.setItem('role', data.datas.role)
        this.token = localStorage.getItem('access_token')
        this.role = localStorage.getItem('role')
        this.router.push('/')
        Swal.fire({
          icon: 'success',
          text: 'Loggin Success'
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Wrong Email/Password ',
          footer: '<a href="">Why do I have this issue?</a>'
        })
        console.log(error)
      }
    },

    async logout() {
      localStorage.clear()
      this.token = null
      this.role = null
      this.router.push('/Login')
    },

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
    }
  }
})
