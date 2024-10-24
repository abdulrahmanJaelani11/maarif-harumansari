<template>
  <SidebarView />
  
  <TitleView :title="title" />  
  <!-- Contact Start -->
  <div class="container-xxl py-5">
        <div class="container">
          <div class="card">
            <div class="card-body" style="text-align: justify;">
              <p>
                {{ situs.sejarah }}
              </p>
            </div>
          </div>
        </div>
    </div>
    <!-- Contact End -->
  
  <FooterView />
</template>

<script>
import TitleView from "@/components/TitleView.vue"
import SidebarView from "@/components/SidebarView.vue"
import FooterView from "@/components/FooterView.vue"
import axios from "axios"

export default {
  name : "SejarahView",
  components : {
    SidebarView,
    FooterView,
    TitleView,
  },
  data(){
    return {
      title : "SEJARAH",
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
        console.log(this.situs)
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>