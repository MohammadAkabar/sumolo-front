<script>

import { mapActions, mapWritableState } from 'pinia';
import { useAppStore } from '../stores/app.js';

export default {


    computed: {
        // ...mapState(useAppStore, ['Title'])
        ...mapWritableState(useAppStore, ['Title', 'Data', 'dataAsset'])
    },

    methods: {
        ...mapActions(useAppStore, ['fetchDataAsset']),

    },

    created() {
        this.fetchDataAsset()
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                        <th scope="col">Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data, index) in dataAsset" :key="index">
                        <th scope="row">1</th>
                        <td>{{ data.name }}</td>
                        <td>{{ data.Address }}</td>
                        <td>{{ data.price }}</td>
                        <td>{{ data.image }}</td>
                        <td>{{ data.rate }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style></style>