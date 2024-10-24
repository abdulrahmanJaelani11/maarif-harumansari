<template>
    <SidebarBackendView />
    <div class="row p-3">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <form @submit.prevent="simpan()">
                        <div class="mb-3">
                            <label for="judul" class="form-label">Judul</label>
                            <input type="text" class="form-control" id="judul" v-model="judul">
                        </div>
                        <div class="mb-3">
                            <label for="konten" class="form-label">Konten</label>
                            <textarea class="form-control" id="konten" v-model="deskripsi"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="gambar" class="form-label">Gambar</label>
                            <input type="file" class="form-control" id="gambar" @change="handleFileUpload">
                        </div>
                        <button type="submit" class="btn btn-primary">Buat Berita</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import SidebarBackendView from '@/components/SidebarBackendView.vue'

export default {
    name: "Berita",
    components: {
        SidebarBackendView
    },
    data() {
        return {
            title: "Beranda",
            judul: "",
            deskripsi: "",
            file: null
        }
    },
    methods: {
        handleFileUpload(e) {
            this.file = e.target.files[0];
        },
        async simpan() {
            let formData = new FormData();
            formData.append('judul', this.judul);
            formData.append('deskripsi', this.deskripsi);
            formData.append('file', this.file);

            const response = await axios.post(this.$api + 'berita', formData)
            console.log(response.data)
            if(response.status == 200) {
                this.$router.push('/backend-berita')
            }else {
                console.log(response)
            }
        }
    }
}

</script>
