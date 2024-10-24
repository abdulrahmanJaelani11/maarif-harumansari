<template>
    <!-- Topbar Start -->
    <div class="container-fluid bg-success text-white d-none d-lg-flex">
        <div class="container py-3">
            <div class="d-flex align-items-center">
                <router-link to="/" class="d-flex align-items-center">
                    <img :src="situs.file" width="60px" alt="">
                    <h2 class="text-white fw-bold m-0 d-inline ms-2">{{ situs.nama_situs }}</h2>
                </router-link>
                <div class="ms-auto d-flex align-items-center">
                    <small class="ms-4"><i class="fa fa-map-marker-alt me-3"></i>{{ situs.alamat }}</small>
                    <small class="ms-4"><i class="fa fa-envelope me-3"></i>{{ situs.email }}</small>
                    <small class="ms-4"><i class="fa fa-phone-alt me-3"></i>{{ situs.telepon }}</small>
                    <div class="ms-3 d-flex">
                        <a class="btn btn-sm-square btn-light text-success rounded-circle ms-2" href=""><i
                                class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-sm-square btn-light text-success rounded-circle ms-2" href=""><i
                                class="fab fa-twitter"></i></a>
                        <a class="btn btn-sm-square btn-light text-success rounded-circle ms-2" href=""><i
                                class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->
     
     <!-- Navbar Start -->
    <div class="container-fluid bg-white sticky-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
                <a href="index.html" class="navbar-brand d-lg-none">
                    <h1 class="fw-bold m-0">{{ situs.nama_situs }}</h1>
                </a>
                <button type="button" class="navbar-toggler me-0" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
                      <router-link to="/" class="nav-item nav-link active">Beranda</router-link>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Profil</a>
                            <div class="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                <router-link to="/sejarah" class="dropdown-item">Sejarah Singkat</router-link>
                                <router-link to="/visi-misi" class="dropdown-item">Visi & Misi</router-link>
                            </div>
                        </div>
                        <router-link to="/berita" class="nav-item nav-link">Berita</router-link>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Tentang Kami</a>
                            <div class="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                <router-link to="/staf" class="dropdown-item">Pendidik & Kependidikan</router-link>
                                <router-link to="/fasilitas" class="dropdown-item">Fasilitas Sekolah</router-link>
                                <router-link to="/kegiatan" class="dropdown-item">Kegiatan Sekolah</router-link>
                                <router-link to="/kontak" class="dropdown-item">Ekstrakulikuler</router-link>
                            </div>
                        </div>
                        <router-link to="/kontak" class="nav-item nav-link">Kontak</router-link>
                    </div>
                    <div class="ms-auto d-none d-lg-block">
                        <router-link to="/login" class="btn btn-success rounded-pill py-2 px-3">Login</router-link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <!-- Navbar End -->
</template>

<script>
import axios from 'axios';

export default {
  name: 'SidebarView',  
  data() {
    return {
      // data
      situs : {}
    }
  },
  mounted() {
    this.getSite();
  },
  methods: {
    // methods
    async getSite(){
      try {
        const response = await axios.get(this.$api + 'get-situs');
        this.situs = response.data.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>