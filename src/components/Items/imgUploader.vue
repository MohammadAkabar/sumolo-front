<script>
import { storage } from '../../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export default {
  data() {
    return {
      selectedFile: null,
      storagePath: null
    }
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0]
    },
    async uploadImage() {
      if (!this.selectedFile) {
        console.error('No file selected.')
        return
      }

      const storageRef = ref(storage, 'images/' + this.selectedFile.name)

      try {
        // Upload file ke Firebase Storage
        const snapshot = await uploadBytes(storageRef, this.selectedFile)

        // Dapatkan URL download
        this.storagePath = await getDownloadURL(snapshot.ref)

        // Kirim storagePath ke server
        this.sendStoragePathToServer()
      } catch (error) {
        console.error('Error uploading image:', error)
      }
    },
    sendStoragePathToServer() {
      // Kirim this.storagePath ke server Anda (misalnya, melalui HTTP request)
      // ...
    }
  }
}
</script>

<template>
  <div>
    <input type="file" @change="handleFileUpload" />
    <button @click="uploadImage">Upload Image</button>
  </div>
</template>
