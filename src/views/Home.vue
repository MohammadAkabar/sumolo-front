<script>
import Table from '../components/Table.vue';
import Table2 from '../components/Table2.vue';
import { mapActions, mapWritableState } from 'pinia';
import {useAppStore} from '../stores/app.js';

export default {
    components: {
        Table,
        Table2
    },

    computed:{
        // ...mapState(useAppStore, ['Title'])
        ...mapWritableState(useAppStore, ['Title', 'Data','dataAsset'])
    },

    methods:{
        ...mapActions(useAppStore,['fetchDataAsset']),

    },

    created(){
        this.fetchDataAsset()
    }
}
</script>

<template>
  <div>
    
    <h1>Home</h1>
    <!-- <Table/> -->
    <Table2 />
    <button @click="fetchData">{{ Data }}</button>
  </div>
</template>
<style></style>
