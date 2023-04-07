<script>
import Table from '../components/Table.vue';
import { mapActions, mapWritableState } from 'pinia';
import {useAppStore} from '../stores/app.js';

export default {
    components: {
        Table
    },

    computed:{
        // ...mapState(useAppStore, ['Title'])
        ...mapWritableState(useAppStore, ['Title', 'Data'])
    },

    methods:{
        ...mapActions(useAppStore,['fetchData']),

    },
}
</script>

<template>
  <div>
    {{ Title }}
    
    <h1>Home</h1>
    <Table/>
    <button @click="fetchData">{{ Data }}</button>
  </div>
</template>
<style></style>
