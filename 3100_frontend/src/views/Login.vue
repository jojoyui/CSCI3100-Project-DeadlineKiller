<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                       
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Sign In</small>
                            </div>
                            <div v-if="!validLogIn" class="invalid mb-4">Invalid email or password! Please try again.</div>
                            <form role="form">
                                <base-input 
                                            v-model="email"
                                            alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input v-model="password"
                                            alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <!-- <base-checkbox>
                                    Remember me
                                </base-checkbox> -->
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" @click="login()">Sign In</base-button>
                                    <base-button type="info" class="my-4">
                                        <router-link to="/register" class="my-4">Register</router-link>
                                    </base-button>
                                </div>
                                
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small>Forgot password?</small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <a href="#" class="text-light">
                                <small>Create new account</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { service } from "@/plugins/request_service.js";

export default {
    data: () =>({
        email:"",
        password: "",  
        validLogIn: true  
    }),
    methods: {
        login(){
            console.log("clicked");
            
            service.post("/users/login", {
                email: this.email,
                password: this.password
               
            }).then(res => {
                console.log("Login Sucess!");
                //this.finished = true;
                this.$router.push("/schedule");
               
            }).catch((err)=>{
                console.log("err:", err);
                this.validLogIn = false;
            });
        }
    }
};
</script>
<style>
.invalid{
    color: red
}
</style>
