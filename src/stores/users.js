import { defineStore } from 'pinia'
import axios from 'axios'
const URL_BACK_END = import.meta.env.VITE_BACK_END_URL

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
          url: `${URL_BACK_END}/users`, //url backend
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
          url: `${URL_BACK_END}/user/${id}`, //url backend
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dataUserById = data.datas
      } catch (error) {
        console.log(error)
      }
    },

    async updateProfile(form) {
      try {
        const id = localStorage.getItem('id')
        const { data } = await axios({
          method: 'PUT',
          url: `${URL_BACK_END}/user/${id}`,
          data: form,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dataUpdatedUser = data.datas
        this.router.push(`/profile/${id}`)
        Swal.fire({
          icon: 'success',
          text: 'Berhasil mengupdate profile'
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Gagal mengupdate profile',
          footer: '<a href="">Why do I have this issue?</a>'
        })
        console.log(error)
      }
    }
  }
})
