<!-- GoogleMap.vue -->
<template>
  <div>
    <GmapMap
      :center="{ lat: latitude, lng: longitude }"
      :zoom="15"
      style="width: 100%; height: 400px"
    >
      <GmapMarker
        :position="{ lat: latitude, lng: longitude }"
        :clickable="true"
        @click="markerClicked"
      />
    </GmapMap>
  </div>
</template>

<script>
import { gmapApi } from 'vue2-google-maps/src/main'

export default {
  data() {
    return {
      latitude: 0,
      longitude: 0
    }
  },
  methods: {
    markerClicked(marker) {
      console.log('Marker clicked:', marker)
    },
    async getCurrentLocation() {
      // Mendapatkan lokasi pengguna
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.latitude = position.coords.latitude
            this.longitude = position.coords.longitude
          },
          (error) => {
            console.error('Error getting location:', error)
          }
        )
      } else {
        console.error('Geolocation is not supported by this browser.')
      }
    }
  },
  mounted() {
    this.getCurrentLocation()
  }
}
</script>

<style>
/* Sesuaikan gaya sesuai kebutuhan Anda */
</style>
