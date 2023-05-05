import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: [],
    role: []
  }),

  actions: {
    async login(form) {
      try {
        console.log(form)

        const { data } = await axios({
          method: 'POST',
          url: 'http://localhost:3000/auth/login', //url backend
          data: form //req.body
        })
        console.log(data.datas.role, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')

        localStorage.setItem('access_token', data.datas.access_token)
        localStorage.setItem('role', data.datas.role)
        localStorage.setItem('id', data.datas.user_id)
        this.token = localStorage.getItem('access_token')
        this.role = localStorage.getItem('role')
        this.id = localStorage.getItem('id')
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
    }
  }
})
