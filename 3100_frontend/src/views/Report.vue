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
                   <card shadow class="card-createTask mt--300" no-body>
                      <div class="col-lg-12 pt-lg">
                        <h2 class="mb-5 text-center">
                            <!-- <h1 class="btn btn-link text-success"><span class="font-weight-light">Progress Report</span></h1> -->
                            <div class="h1 font-weight-300">Progress Report</div>
                            <h2 class="mb-5">
                                <span>You have finished <span class="h4 text-success front-weight-bold mb-4">{{finishTask}}</span> tasks! </span>
                                <i class="ni ni-like-2"></i>
                            </h2>
                            <h2 class="mb-5">
                                <span>You have <span class="h4 text-warning front-weight-bold mb-4">{{unfinishTask}}</span> tasks left! Keep it up! </span>
                            </h2>
                            <h3 class="h1 font-weight-300">Progress Bars</h3>
                                <div class="progress-wrapper">
                                    <div class="progress-primary">
                                                <div class="progress-label">
                                                     <span>Task Completed</span>
                                                </div>
                                        <div class="progress-percentage">
                                           <span>{{Math.round(percent)}}%</span>
                                        </div>
                                    </div>
                                    <div class="progress" style="height:8px;">
                                        <div class="progress-bar progress-bar-success progress-bar-striped active" :style="{ width: parseFloat(percent) +'%' }" ></div>
                                    </div>
                                </div>
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
        finishTask:"",
        unfinishTask:"",
        percentage:"",
    }),
    computed:{
         percent(){
             return (this.finishTask/(this.finishTask+this.unfinishTask))*100
         }
     },
    mounted (){
        this.report();
    },
    methods: {
        report(){
            console.log("report")
           
            service.get(`/tasks/countTask/${store.getters["getUserId"]}`).then(res=>{
                console.log(res.data.data[0].number);
                this.finishTask=res.data.data[0].number;
            })
            service.get(`/tasks/countTask2/${store.getters["getUserId"]}`).then(res=>{
                console.log(res.data.data[0].number);
                this.unfinishTask=res.data.data[0].number;
            })
        }
    }
}

</script>
