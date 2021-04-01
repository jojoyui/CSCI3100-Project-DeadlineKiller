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
                            <div>
                                <h1 class="mb-5 text-center">
                                     <div>Progress Report</div>
                                </h1>
                                <blockquote class="blockquote">
                                    <p class="mb-0">Please select your date range:</p>
                                </blockquote>

                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <badge type="primary">start date</badge>
                                    <base-input addon-left-icon="ni ni-calendar-grid-58">
                                        <flat-picker slot-scope="{focus, blur}"
                                                    @on-open="focus"
                                                    @on-close="blur"
                                                    :config="{allowInput: true}"
                                                    class="form-control datepicker"
                                                    v-model="dates.start">
                                        </flat-picker>
                                    </base-input>
                                </div>
                                <div class="col-sm">
                                    <badge type="primary">end date</badge>
                                    <base-input addon-left-icon="ni ni-calendar-grid-58">
                                        <flat-picker slot-scope="{focus, blur}"
                                                    @on-open="focus"
                                                    @on-close="blur"
                                                    :config="{allowInput: true}"
                                                    class="form-control datepicker"
                                                    v-model="dates.end">
                                        </flat-picker>
                                    </base-input>
                                </div>
                                <div class="col-sm">
                                    <!-- <div>
                                    <badge type="primary">search</badge>
                                    </div> -->
                                    <div>
                                    <span><base-button type="secondary" rounded size="lg" class="ni ni-send" @click="handlego()"></base-button></span>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <span></span>
                                </div>
                            </div> 
                            <div class="ct-example-row">
                                <div class="row">
                                    <div class="col"><h2 class="mb-5"></h2></div>
                                </div>
                            </div>
                        <!-- <h2 class="mb-5 text-center"> -->
                            <!-- <div class="h1 font-weight-300">Progress Report</div> -->
                            <h3>
                                <span>You have finished <span class="h4 text-success front-weight-bold mb-4">{{finishTask}}</span> tasks! </span>
                                <i class="ni ni-like-2"></i>
                            </h3>
                            <h3 class="mb-5">
                                <span>You have <span class="h4 text-warning front-weight-bold mb-4">{{unfinishTask}}</span> tasks left! Come on! </span>
                            </h3>
                            <h2>Progress Bars</h2>
                            <!-- </h2> -->
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
                        <!-- </h2> -->
                   </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import { service } from "@/plugins/request_service.js";
import store from "@/store";
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";


export default {
    components:{
        flatPicker
    },

    data: () =>({
        finishTask:"",
        unfinishTask:"",
        percentage:"",
        dates: {
            start: "2021-01-01",
            end:"2021-12-31"
          }
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
        handlego(){
            console.log(this.dates.start)
            console.log(this.dates.end)
            this.report()
        },
        report(){
            console.log("report")
            service.post
           
            service.get(`/tasks/countTask/${store.getters["getUserId"]}/${this.dates.start}/${this.dates.end}`).then(res=>{
                console.log(res.data.data[0].number);
                this.finishTask=res.data.data[0].number;
            })
            service.get(`/tasks/countTask2/${store.getters["getUserId"]}/${this.dates.start}/${this.dates.end}`).then(res=>{
                console.log(res.data.data[0].number);
                this.unfinishTask=res.data.data[0].number;
            })
        }
    }
}

</script>
