<script>
import Sidebar from '../components/Items/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>
<template>
  <div>

    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar -->
        <Sidebar />

        <!-- Content -->
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <!-- Page Header -->
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
          >
            <h1 class="h2">Dashboard</h1>
          </div>

          <!-- Statistic Cards -->
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card bg-primary text-white">
                <div class="card-body">
                  <h3>Total Aset</h3>
                  <p class="display-4">100</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card bg-success text-white">
                <div class="card-body">
                  <h3>Total Wakaf</h3>
                  <p class="display-4">50</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card bg-info text-white">
                <div class="card-body">
                  <h3>Another Statistic</h3>
                  <p class="display-4">75</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Activities -->
          <div class="card">
            <div class="card-header">Recent Activities</div>
            <div class="card-body">
              <!-- Your content goes here -->
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Your custom styles go here */

/* Adjusting sidebar width */
#sidebar {
  min-width: 200px;
  max-width: 250px;
  background-color: #343a40;
  color: #fff;
  transition: all 0.3s;
  height: 100vh;
  position: fixed;
}

/* Making statistic cards more visible */
.card {
  height: 150px;
}

/* Styling the Page Header */
.border-bottom {
  border-bottom: 1px solid #dee2e6;
}
</style>
