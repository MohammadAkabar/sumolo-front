<script>
export default {}
</script>
<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero" class="hero">
    <div class="container mt-5">
      <div class="row gy-5" data-aos="fade-in">
        <div
          class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start"
        >
          <h2>Welcome to <span>Sumolo App</span></h2>
          <p>Pembayaran online penyewaan aset wakaf pada penambahan sumolo.</p>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <router-link to="/register-asset">
              <a href="" class="btn-get-started">Get Started</a>
            </router-link>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2">
          <img
            src="src/assets/img/hero-img.svg"
            class="img-fluid"
            alt=""
            data-aos="zoom-out"
            data-aos-delay="100"
          />
        </div>
      </div>
    </div>

    <div class="icon-boxes position-relative">
      <div class="container position-relative">
        <div class="row gy-4 mt-5">
          <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box custom-icon-box">
              <div class="icon"><i class="bi bi-building"></i></div>
              <h4 class="title">
                <router-link to="/register-asset"
                  ><a href="" class="stretched-link">Daftar Aset</a></router-link
                >
              </h4>
            </div>
          </div>
          <!--End Icon Box -->

          <div
            class="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
            @click="navigateToUserProfile"
          >
            <div class="icon-box custom-icon-box">
              <div class="icon"><i class="bi bi-gem"></i></div>

              <h4 class="title">
                <a href="/all-assets" class="stretched-link">Lihat Aset</a>
              </h4>
            </div>
          </div>

          <!--End Icon Box -->

          <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="icon-box custom-icon-box">
              <div class="icon"><i class="bi bi-geo-alt"></i></div>
              <h4 class="title">
                <a
                  href="https://www.google.com/maps/place/7%C2%B000'24.8%22S+113%C2%B051'54.0%22E/@-7.0068702,113.8624081,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.0068755!4d113.8649884?entry=ttu"
                  class="stretched-link"
                  >Lokasi</a
                >
              </h4>
            </div>
          </div>
          <!--End Icon Box -->

          <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div class="icon-box custom-icon-box">
              <div class="icon"><i class="bi bi-command"></i></div>
              <h4 class="title"><a href="#about" class="stretched-link">About us</a></h4>
            </div>
          </div>
          <!--End Icon Box -->
        </div>
      </div>
    </div>
  </section>
  <!-- End Hero Section -->
</template>

<style scoped>
.custom-icon-box {
  background-color: #1870cf; /* Warna biru asli yang telah disebutkan sebelumnya */
  color: #fff; /* Warna teks putih agar kontras */
  /* padding: 20px; Atur padding sesuai kebutuhan Anda */
  border-radius: 10px; /* Tambahkan border-radius untuk tampilan lebih lembut */
  text-align: center; /* Pusatkan teks */
  transition: background-color 0.3s ease; /* Efek transisi untuk perubahan warna latar belakang */
}

.custom-icon-box:hover {
  background-color: #2980b9; /* Warna biru saat dihover */
}
</style>
