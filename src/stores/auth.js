import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
const URL_BACK_END = import.meta.env.VITE_BACK_END_URL

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    role: null,
    id: null,
    datasLogin: null
  }),

  actions: {
    async login(form) {
      try {
        const { data } = await axios({
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          url: `${URL_BACK_END}/auth/login`,
          data: form
        })
        this.token = data.datas.access_token
        this.role = data.datas.role
        this.id = data.datas.user_id
        this.datasLogin = data.datas
        localStorage.setItem('access_token', this.token)
        localStorage.setItem('role', this.role)
        localStorage.setItem('id', this.id)

        if (localStorage.getItem('role') === 'admin') {
          this.router.push('/admin-dashboard')
          Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'Welcome back admin!',
            confirmButtonText: 'OK'
          })
        } else {
          this.router.push('/')
          Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'Welcome back!',
            confirmButtonText: 'OK'
          })
        }
      } catch (error) {
        if (error.response.data.message === 'Email and Password Required') {
          Swal.fire({
            icon: 'error',
            title: 'Gagal login',
            text: 'Email dan password tidak boleh kosong!'
          })
        } else if (error.response.data.message === 'Email not registered') {
          Swal.fire({
            icon: 'error',
            title: 'Gagal login',
            text: 'Email tidak terdaftar!'
          })
        } else if (error.response.data.message === 'Wrong Password') {
          Swal.fire({
            icon: 'error',
            title: 'Gagal login',
            text: 'Password salah!'
          })
        }
        console.error(error.response)
      }
    },

    async register(form) {
      try {
        const { data } = await axios({
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          url: `${URL_BACK_END}/auth/register`,
          data: JSON.stringify(form)
        })
        this.registerDatas = data.datas
        this.router.push('/login')
        Swal.fire({
          icon: 'success',
          text: 'Register Success, silahkan login'
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `${error.response.data.message}`,
          text: `Gagal Register`
        })
      }
    },

    async logout() {
      localStorage.clear()
      this.token = null
      this.role = null
      this.id = null
      this.router.push('/login')
    }
  }
})
