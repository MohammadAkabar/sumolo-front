<script>
import Hero from '../components/Home/HeroItems.vue'
import AssetItems from '../components/AssetItems.vue'
import AboutSection from '../components/AboutSection.vue'

export default {
  components: {
    //addComponents
    Hero,
    AboutSection,
    AssetItems
  }
}
</script>

<template>
  <!-- hero section -->
  <Hero />
  <!-- end hero section -->
  <AboutSection />
  <!-- asset items section -->
  <main id="main">
    <AssetItems :isAll="false" />
  </main>
  <!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer" class="footer">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-info">
          <a href="index.html" class="logo d-flex align-items-center">
            <span>Penambahan Sumolo</span>
          </a>
          <p>
            Kami adalah yayasan yang berdedikasi untuk meningkatkan kesejahteraan masyarakat melalui
            program-program wakaf yang berkelanjutan. Dengan bantuan dari para dermawan dan donatur,
            kami terus berupaya memberikan kontribusi positif bagi komunitas Sumenep dan sekitarnya.
          </p>
          <div class="social-links d-flex mt-4">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Bagaimana Anda Dapat Berkontribusi</h4>
          <p>
            Dengan berwakaf atau menyumbangkan dana, Anda turut berpartisipasi dalam memajukan
            kesejahteraan masyarakat.
          </p>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Program Wakaf</h4>
          <ul>
            <li><a href="#">Penyaluran bantuan wakaf</a></li>
            <li><a href="#">Penyewaan aset yayasan</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Hubungi Kami</h4>
          <p>
            Kota Sumenep <br />
            Kabupaten Sumenep,69415<br />
            Jawa Timur <br /><br />
            <strong>Phone:</strong> +62 85 555 555<br />
            <strong>Email:</strong> info@sumolo.com<br />
          </p>
        </div>
      </div>
    </div>

    <div class="container mt-4">
      <div class="copyright">
        &copy; Copyright <strong><span>Penambahan Sumolo</span></strong
        >. All Rights Reserved
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>
