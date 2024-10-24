<template>
  <SidebarView />
  
  <TitleView :title="title" />  
  
  <!-- Project Start -->
  <div class="container-xxl pt-5">
        <div class="container">
            <div class="text-center text-md-start pb-5 pb-md-0 wow fadeInUp"
                style="max-width: 500px;">
                <p class="fs-5 fw-medium text-primary">Para Pengajar MI, MTS & SMA Ma'arif Harumansari</p>
            </div>
            <div class="row wow fadeInUp">
              <div class="col-lg-4" v-for="(row, index) in staf">
                <div class="card">
                  <img :src="row.file" alt="">
                  <div class="card-body">
                    <a class="d-block h5" href="">{{ row.nama }}</a>
                    <p>{{ row.alamat }}</p>
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
      title : "PENDIDIK & KEPENDIDIKAN",
      staf : []
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    // methods
    async getData(){
      try {
        const response = await axios.get(this.$api + 'staf');
        this.staf = response.data.data;
        console.log(this.staf)
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>