import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SejarahView from '../views/SejarahView.vue'
import VisiMisiView from '../views/VisiMisiView.vue'
import BeritaView from '../views/BeritaView.vue'
import StafView from '../views/StafView.vue'
import FasilitasView from '../views/FasilitasView.vue'
import KegiatanView from '../views/KegiatanView.vue'
import LoginView from '../views/LoginView.vue'
import BerandaView from '../views/BerandaView.vue'

import Berita from '../views/backend/Berita.vue'
import BeritaForm from '../views/backend/BeritaForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sejarah',
      name: 'sejarah',
      component: SejarahView
    },
    {
      path: '/visi-misi',
      name: 'visimisi',
      component: VisiMisiView
    },
    {
      path: '/berita',
      name: 'berita',
      component: BeritaView
    },
    {
      path: '/staf',
      name: 'staf',
      component: StafView
    },
    {
      path: '/fasilitas',
      name: 'fasilitas',
      component: FasilitasView
    },
    {
      path: '/kegiatan',
      name: 'kegiatan',
      component: KegiatanView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/beranda',
      name: 'beranda',
      component: BerandaView
    },
    {
      path: '/backend-berita',
      name: 'backend-berita',
      component: Berita
    },
    {
      path: '/backend-berita/tambah',
      name: 'form-berita',
      component: BeritaForm
    },
  ]
})

export default router
