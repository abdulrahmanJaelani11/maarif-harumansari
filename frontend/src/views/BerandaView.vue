<template>
    <SidebarBackendView />
    <div class="d-flex gap-3">
        <div class="row w-100">
            <div class="col-12">
                <h1>Hello World</h1>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import SidebarBackendView from '@/components/SidebarBackendView.vue'

export default {
    name: "BerandaView",
    components: {
        SidebarBackendView
    },
    data() {
        return {
            title: "Beranda"
        }
    }
}
</script>
