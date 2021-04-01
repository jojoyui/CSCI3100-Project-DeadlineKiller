<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container shape-container d-flex align-items-center">
                <div class="col px-0">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-7 text-center pt-lg">
                            <img src="img/brand/test.png" style="width: 300px;" class="img-fluid">
                            <p class="lead text-white mt-4 mb-5"></p>
                            <div class="btn-wrapper">
                                <base-button tag="a"
                                            href="http://localhost:8080/#/list"
                                            class="mb-3 mb-sm-0"
                                            type="white"
                                            icon="ni ni-bullet-list-67">
                                    Task List
                                </base-button>
                                <base-button tag="a"
                                            href="http://localhost:8080/#/schedule"
                                            class="mb-3 mb-sm-0"
                                            type="white"
                                            icon="ni ni-calendar-grid-58">
                                    Schedule
                                </base-button>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-around stars-and-coded">
                        <div class="row">
                            <div class="col">
                                <!-- <base-button tag="a"
                                                href="https://demos.creative-tim.com/vue-argon-design-system/documentation"
                                                class="mb-3 mb-sm-0"
                                                type="info"
                                                icon="fa fa-code">
                                        Create Task
                                </base-button> -->
                            </div>
                            <div class="col">
                                <span></span>
                            </div>
                            <div class="col">
                                <span></span>
                            </div>
                            <div class="col">
                                <div class="col-sm-4 mt-4 mt-sm-0 text-right">
                                    <!-- <base-button tag="a"
                                                href="https://www.creative-tim.com/product/vue-argon-design-system"
                                                class="mb-3 mb-sm-0"
                                                type="white"
                                                icon="ni ni-cloud-download-95">
                                        schedule
                                    </base-button> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="mt--300" no-body>
                    <div class="container shape-container d-flex align-items-center">
                        <div class="col px-0">
                            <div class="row justify-content-center align-items-center">
                                <h3 class="col-lg-7 text-center pt-lg text-default text-center">
                                    <strong>
                                        <i class="ni ni-bell-55 mr-2"></i>
                                        There are {{tasks_name.length}} requests!
                                    </strong>
                                </h3>
                            </div>
                            <div>
                                <ul class="list-unstyled">
                                    <li v-for = "(task, num) in tasks_name" :key="num">
                                        <div class="row">
                                            <div class="col-sm">
                                                <h5 type="primary">
                                                    <i class="ni ni-single-copy-04"></i> 
                                                    {{ task["task"] }}
                                                </h5>
                                            </div>
                                            <div class="col-sm">
                                                <badge type="primary">Type: {{ task["type"] }}</badge>
                                            </div>
                                            <div class="col-sm">
                                                <base-button size="sm" outline type="success" @click="handleAccept(num)">Accept</base-button>
                                                <base-button size="sm" outline type="danger" @click="handleDecline(num)">Decline</base-button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import { service } from "@/plugins/request_service.js";
import store from "@/store";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import TabsSection from "./components/JavascriptComponents/TabsSection";
import Badge from '../components/Badge.vue';

export default {
    components: {
        TabPane,
        Tabs,
        TabsSection,
        Badge,
    },
    
    data: () =>({
        tasks_name: []
    }),
    mounted (){
        this.noti();
    },
    methods: {
        noti(){
            console.log("requests");
            service.get(`/users/notification/${store.getters["getUserId"]}`).then(res=>{
                console.log(res.data);
                this.tasks_name = res.data.data;
            });
            
        },
        handleAccept(i){
            console.log("handleAccept");
            console.log(this.tasks_name[i]["tid"]);
            service.get(`/users/accept/${this.tasks_name[i]["tid"]}`).then(res =>{
                console.log(res.data);
            });
            this.tasks_name.splice(i,1);
        },
        handleDecline(i){
            console.log("handleDecline");
            console.log(this.tasks_name[i]["tid"]);
            service.get(`/users/decline/${this.tasks_name[i]["tid"]}`).then(res =>{
                console.log(res.data);
            });
            this.tasks_name.splice(i,1);
        },

    }

};
</script>
<style>
</style>
