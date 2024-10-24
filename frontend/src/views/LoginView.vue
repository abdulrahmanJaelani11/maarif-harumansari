<template>
    <div class="container">
        <div class="row justify-content-center align-items-center" style="height: 100vh;">
            <div class="col-md-5">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h3 class="card-title text-center">Login</h3>
                        <form action="" @submit.prevent="login()">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" v-model="email" placeholder="Masukkan email Anda">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" v-model="password" placeholder="Masukkan password Anda">
                            </div>
                            <div class="mb-3">
                                <button type="submit" class="btn btn-primary w-100">Login</button>
                            </div>
                            <div class="text-center">
                                <p>Tidak punya akun? <a href="#">Daftar</a></p>
                                <p>Lupa password? <a href="#">Reset password</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            // Perform login logic here
            // You can use axios to make a POST request to your login API endpoint
            axios.post(this.$api + 'login', {
                email: this.email,
                password: this.password
            })
            .then(response => {
                // Handle successful login
                console.log(response.data)
            })
            .catch(error => {
                // Handle login error
                console.error(error)
            })
        }
    }
}
</script>
