import { defineStore } from 'pinia'
import axios from 'axios';
export const useAppStore = defineStore('app', {
    state: () => ({
        Title: 'ini tittle', //state
        Data: 0,
        dataAsset: []

    }),
    actions: {
        async fetchData(){
            this.Data += 1 
        },
        async login(form){
            try {
                console.log(form)
                
                const {data}= await axios({
                    method: 'POST',
                    url: 'http://localhost:3000/login', //url backend
                     data:form //req.body
                })

                localStorage.setItem('access_token', data.access_token)

            } catch (error) {
                console.log(error)
            }
        },
        async logout(){
            localStorage.removeItem('access_token')     
            this.router.push('/login');
        },

        async fetchDataAsset(){
            try {
                const {data}= await axios({
                    method: 'GET',
                    url: 'http://localhost:3000/assets', //url backend
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.dataAsset=data;
            } catch (error) {
                console.log(error)   
            }
        }
    }

});