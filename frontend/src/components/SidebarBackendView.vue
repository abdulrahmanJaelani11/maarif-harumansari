<template>
  <header>
    <div class="px-3 py-2 bg-dark text-white">
      <div class="container-fluid">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            LP. Ma'arif NU Harumansari
          </a>

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li class="text-center">
              <router-link to="/beranda" class="nav-link text-secondary">
                <i style="margin: auto;" class="fa fa-home d-block mx-auto mb-1 fs-3"></i>
                Beranda
              </router-link>
            </li>
            <li class="text-center">
              <router-link to="/backend-berita" class="nav-link text-white">
                <i style="margin: auto;" class="fa fa-newspaper d-block mx-auto mb-1 fs-3"></i>
                Berita
              </router-link>
            </li>
            <li class="text-center">
              <router-link to="/backend-kegiatan" class="nav-link text-white">
                <i style="margin: auto;" class="fa fa-newspaper d-block mx-auto mb-1 fs-3"></i>
                Berita
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
