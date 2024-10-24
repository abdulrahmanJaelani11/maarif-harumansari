<template>
  <SidebarView />
  
  <TitleView :title="title" />  
  
  <!-- Project Start -->
  <div class="container-xxl pt-5">
        <div class="container">
            <div class="text-center text-md-start pb-5 pb-md-0 wow fadeInUp"
                style="max-width: 500px;">
                <p class="fs-5 fw-medium text-primary">FASILITAS SEKOLAH</p>
                <h1 class="display-5 mb-5"></h1>
            </div>
            <div class="row wow fadeInUp">
              <div class="col-lg-4" v-for="(row, index) in fasilitas">
                <div class="card">
                  <img :src="row.file" alt="">
                  <div class="card-body">
                    <a class="d-block h5" href="">{{ row.judul }}</a>
                    <p>{{ row.deskripsi }}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    <!-- Project End -->
  
  <FooterView />
</template>

<script>
import TitleView from "@/components/TitleView.vue"
import SidebarView from "@/components/SidebarView.vue"
import FooterView from "@/components/FooterView.vue"
import axios from "axios"

export default {
  name : "BeritaView",
  components : {
    SidebarView,
    FooterView,
    TitleView,
  },
  data(){
    return {
      title : "FASILITAS SEKOLAH",
      fasilitas : []
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    // methods
    async getData(){
      try {
        const response = await axios.get(this.$api + 'fasilitas');
        this.fasilitas = response.data.data;
        console.log(this.fasilitas)
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>