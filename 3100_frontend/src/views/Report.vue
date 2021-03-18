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
                   <card shadow class="card-createTask mt--300" no-body>
                      <div class="col-lg-12 pt-lg">
                        <h2 class="mb-5 text-center">
                            <!-- <h1 class="btn btn-link text-success"><span class="font-weight-light">Progress Report</span></h1> -->
                            <div class="h1 font-weight-300">Progress Report</div>
                            <h2 class="mb-5">
                                <span>You have finished {{finishTask}} tasks! </span>
                                <i class="ni ni-like-2"></i>
                            </h2>
                        </h2>
                   </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import { service } from "@/plugins/request_service.js";
import store from "@/store";

export default {
    data: () =>({
        finishTask:""
    }),
    mounted (){
        this.report();
    },
    methods: {
        report(){
            console.log("report")
            service.get(`/tasks/report/${store.getters["getUserId"]}`).then(res=>{
                console.log(res.data.data);})
                
        }
    }
}

</script>
