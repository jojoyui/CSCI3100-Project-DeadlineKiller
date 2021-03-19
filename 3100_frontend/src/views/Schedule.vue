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
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    schedule
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

// import Fullcalendar from '@fullcalendar/vue'
// import DayGridPlugin from '@fullcalendar/vue'
// import TimeGridPlugin from '@fullcalendar/vue'
// import InteractionPlugin from '@fullcalendar/vue'
// import ListPlugin from '@fullcalendar/vue'

export default {
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
