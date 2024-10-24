<template>
    <SidebarBackendView />
    <div class="row p-3">
        <div class="col-12">
            <h3>Daftar Berita</h3>
            <router-link to="/backend-berita/tambah" class="btn btn-primary mb-2">Tambah Berita</router-link>

            <div class="card my-3" v-for="berita in listBerita" :key="berita.id">
                <div class="card-body">
                    <div class="row">
                        <div class="col-2">
                            <img :src="berita.file" alt="tes" width="100%" height="170px">
                        </div>
                        <div class="col-3">
                            <p style="font-size: 17px; font-weight: 700;">
                                {{ berita.judul }}
                            </p>
                        </div>
                        <div class="col-6">
                            <p>{{ berita.deskripsi }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import SidebarBackendView from '@/components/SidebarBackendView.vue'
import router from '@/router';

export default {
    name: "Berita",
    components: {
        SidebarBackendView,
    },
    data() {
        return {
            listBerita: [],
        }
    },
    mounted() {
        this.getBerita()
    },
    methods: {
        getBerita() {
            axios.get(this.$api + 'berita')
                .then(response => {
                    this.listBerita = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}

</script>
