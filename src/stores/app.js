import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        Title: 'ini tittle', //state
        Data: 0

    }),
    actions: {
        async fetchData(){
            this.Data += 1 
        }
    }

});