<template>
    <div class="CreateTask-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary">
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
                        <div class="text-center">
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
                                <p class="lead text-white mt-4 mb-5"></p>
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
                        <h2 class="text-center">
                            <strong>
                                <i class="ni ni-map-big"></i>
                                SUBTASK
                            </strong>
                        </h2>
                        <p class="lead text-white mt-4 mb-5"></p>
                        <h4><span class="btn btn-link text-primary"> Subtask Name </span></h4>
                        <div class="container ct-example-row">
                            <div class="row">
                                <div class="col">
                                    <base-input v-model="tname" 
                                                alternative class="taskName col-"  
                                                placeholder="e.g 3100_project">
                                    </base-input>
                                </div>
                                <div class="col">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        
                        <p class="btn btn-link text-primary"> Start Date </p>
                        <div class="row">
                            <div class="col-sm">
                                <div class="col">
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
                            </div>
                            <div class="col-sm">
                                <div class="col">
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
                            </div>
                            <div class="col-sm">
                                <span></span>
                            </div>
                        </div>
                        <p class="btn btn-link text-primary"> Description </p>
                        <div class="col">
                            <textarea v-model="description"
                                    class=" Description form-control form-control-alternative" 
                                    placeholder="e.g Kill me Please!">
                            </textarea>
                        </div>
                    </div>
                    <div v-if="!validsubmit" class="col-lg-12 pt-lg">
                        <base-alert type="warning" icon="ni ni-bell-55" dismissible>
                            <span slot="text"><strong>Warning!</strong> Please check whether your task name and date are input or not!</span>
                        </base-alert>
                    </div>
                    <div class= "col-lg-12 pt-lg text-center">
                        <base-button class="btn-1" outline type="success" @click="handleSubmit()">Submit</base-button>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>


<script>
/* eslint-disable */
import { uuid } from 'vue-uuid'; 
import { service } from "@/plugins/request_service.js";
import store from "@/store";
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import TabsSection from "./components/JavascriptComponents/TabsSection";
import Badge from '../components/Badge.vue';

export default {
    components:{
        flatPicker,
        TabPane,
        Tabs,
        TabsSection,
        Badge,
    },
    data: () =>({
        user_id: store.getters["getUserId"],
        task_id: store.getters["getTaskId"],
        subtask_id:'',
        tname:"",
        dates: {
            start: "2021-04-01",
            end: '2021-04-30'
        },
        description: "",
        validsubmit: true,
    }),
    methods:{
                
        handleSubmit(){
            console.log("clicked");
            
            this.subtask_id = uuid.v1();
            service.post("/tasks/createSubtask", {
                subtask_id: this.subtask_id,
                task_id: this.task_id,
                name: this.tname,
                start_date: this.dates.start,
                end_date: this.dates.end,
                description: this.description

            }).then(res => {
                if (res.data.success) {
                    console.log("Update to task database success!");
                    service.get(`/tasks/updategroup/${this.task_id}/${this.user_id}/${this.subtask_id}`)
                        .then(res => {
                            console.log(res.data);
                        }).catch((err)=>{
                            console.log("err:", err);
                            this.validsubmit = false;
                        });
                    this.$router.push("/list");
                } else {
                    console.log("Update to subtask database failed!");
                }
            }).catch((err)=>{
                console.log("err:", err);
                this.validsubmit = false;
            });
        }
    }
};
</script>
<style scoped>

#app{
  text-align:center;
}
base-input{
    width:230px;
    height:40px;
    border: radius 20px;
    padding: 0.4em 0.35em;
    border:3px solid #CFCFCF;
    font-size: 1.55em;
}



</style>
