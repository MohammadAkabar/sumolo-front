<script>
export default {}
</script>

<template>
  <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
    <div class="position-sticky">
      <ul class="nav flex-column pt-5 mt-5">
        <li class="nav-item">
          <a class="nav-link active" href="#"> Dashboard </a>
        </li>
        <li class="nav-item">
          <router-link to="/admin/users">
            <a class="nav-link" href="#"> Requests </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/wakafs">
            <a class="nav-link" href="#"> Wakaf Management </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/assets">
            <a class="nav-link" href="#"> Asets Management </a>
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> User Profiles </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
