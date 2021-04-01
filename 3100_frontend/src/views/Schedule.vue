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
                                            type="primary"
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
                <card shadow class="card-profile mt--300" no-body>

                    Schedule
                    
                </card>
                
            </div>
        </section>
        <!-- <Fullcalendar :plugins="calendarPlugin" /> -->
    </div>
</template>
<script>
//  require('@fullcalendar/core/main.min.css')
//  require('@fullcalendar/daygrid/main.min.css')
//  require('@fullcalendar/timegrid/main.min.css')

import { service } from "@/plugins/request_service.js";
import store from "@/store";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import TabsSection from "./components/JavascriptComponents/TabsSection";

// import Fullcalendar from '@fullcalendar/vue'
// import DayGridPlugin from '@fullcalendar/vue'
// import TimeGridPlugin from '@fullcalendar/vue'
// import InteractionPlugin from '@fullcalendar/vue'
// import ListPlugin from '@fullcalendar/vue'

export default {
    components: {
        TabPane,
        Tabs,
        TabsSection,
        
    },
    data: () => ({
        temp: "original",
        task: "A",
        // calendarPlugins: [
        //     DayGridPlugin,
        //     TimeGridPlugin,
        //     InteractionPlugin,
        //    ListPlugin
        // ] 
    }),
    mounted (){
        this.fetchTask();
    },
    methods: {
        demo(){
            console.log("clicked")
            service.get("/users/testing").then(res => {
                console.log(res.data.data[0].name);
                this.temp = res.data.data[0].name;
            })
            
        },
        fetchTask(){
            service.get(`/tasks/getTasks/${store.getters["getUserId"]}`).then(function(res){
                console.log(res.data.data);
            });
        }
    }


};
</script>
<style>
</style>
