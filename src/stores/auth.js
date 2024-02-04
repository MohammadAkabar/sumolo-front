import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
const URL_BACK_END = import.meta.env.VITE_BACK_END_URL

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    role: null,
    id: null
  }),

  actions: {
    async login(form) {
      try {
        console.log(form)
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
        localStorage.setItem('access_token', this.token)
        localStorage.setItem('role', this.role)
        localStorage.setItem('id', this.id)

        if (localStorage.getItem('role') === 'admin') {
          this.router.push('/admin-dashboard')
          Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'Welcome back admin!',
            confirmButtonText: 'OK',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        } else {
          this.router.push('/')
          Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'Welcome back!',
            confirmButtonText: 'OK',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Wrong Email/Password ',
          footer: `${error.message}`
        })
        console.error(error)
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
      this.id = null
      this.router.push('/login')
    }
  }
})
