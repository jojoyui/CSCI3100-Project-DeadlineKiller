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
                                <small>Register</small>
                            </div>
                            <form role="form">
                                <base-input v-model="name"
                                            alternative
                                            class="mb-3"
                                            placeholder="User name"
                                            addon-left-icon="ni ni-badge">
                                </base-input>
                                <base-input v-model="email"
                                            alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input v-model="password"
                                            alternative
                                            class="mb-3"
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <base-input v-model="password_reminder"
                                            alternative
                                            class="mb-3"
                                            type="password_reminder"
                                            placeholder="Password Reminder"
                                            addon-left-icon="ni ni-air-baloon">
                                </base-input>
                                <!-- <div class="text-muted font-italic">
                                    <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small>
                                </div>
                                <base-checkbox>
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox> -->
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" @click="register()">Create account</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { uuid } from 'vue-uuid'; 
import { service } from "@/plugins/request_service.js";

export default {
    data: () =>({
        name: "",
        email:"",
        password: "",
        password_reminder: ""
    
    }),
    methods: {
        register(){
            console.log("clicked");
            console.log(this.name);
            // service.post("/users/register").then(res => {
            //     console.log(res.data.data[0].name);
            //     this.temp = res.data.data[0].name;
            // })
            
            service.post("/users/register", {
                user_id: uuid.v1(),
                name: this.name,
                password: this.password,
                email: this.email,
                password_reminder: this.password_reminder
            }).then(res => {
                //action for successful connection
                if (res.data.success) {
                    console.log("Update to database success!");
                    //this.finished = true;
                    this.$router.push("/login");
                } else {
                //action for unsuccessful connection
                    console.log("Update to database failed!");
                }
            })
        }
    }
};
</script>
<style>
</style>
