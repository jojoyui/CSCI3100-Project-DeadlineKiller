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
                <card shadow class="card-createTask mt--300" no-body gradient="secondary">
                    <div class="col-lg-12 pt-lg">
                        <h3 class="text-center text-default">
                            <strong>
                                <!-- <i class="ni ni-archive-2"></i> -->
                                NEW TASK
                            </strong>
                        </h3>
                        <br/>
                        <div class="row">
                            <div class="col text-right">
                                <br/>
                                <strong class="text-primary"> Task Name </strong>
                            </div>
                            <div class="col">
                                <p class="lead text-white mt-3 mb-3"></p>
                                <base-input v-model="tname" 
                                            alternative class="taskName col-"  
                                            placeholder="e.g 3100_project">
                                </base-input>
                            </div>
                            <div class="col">
                                <span></span>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class = "col text-right">
                                <br/>
                                <strong class="text-primary">Type</strong>
                            </div>
                            <div class="col">
                                <p class="lead text-white mt-3 mb-3"></p>
                                <base-dropdown tag="li" class="nav-item">
                                    <p class="lead text-white mt-3 mb-3"></p>
                                    
                                    <base-button slot="title" type="secondary" class="dropdown-toggle">
                                        {{radioVal}}
                                    </base-button>
                                    <ul class="list-unstyled">
                                        <li v-for= "(item, index) in radioData" :key="index">
                                            <tab class="dropdown-item" :value ="item.value"
                                                @click ="getRadioVal(item.value)">{{ item.value }}</tab>
                                        </li>
                                    </ul>
                                </base-dropdown>
                            </div>
                            <div class="col">
                                <span></span>
                            </div>
                        </div>
                        <!-- <div class="col">
                            <ul class="list-unstyled">
                                <li v-for= "(item, index) in radioData" :key="index">
                                    <input
                                        type = "radio"
                                        v-model = "radioVal"
                                        :value = "item.value"
                                        @change = "getRadioVal(item.value)"
                                    />
                                <span class="btn btn-link text-default">{{ item.value }}</span>
                                </li>
                            </ul>
                        </div> -->
                        <br/>
                        <div class="row">
                            <div class="col text-right">
                                <br/>
                                <strong class="text-primary"> Due Date </strong>
                            </div>
                            <div class="col">
                                <p class="lead text-white mt-3 mb-3"></p>
                                <base-input addon-left-icon="ni ni-calendar-grid-58">
                                    <flat-picker slot-scope="{focus, blur}"
                                                @on-open="focus"
                                                @on-close="blur"
                                                :config="{allowInput: true}"
                                                class="form-control datepicker"
                                                v-model="DueDate.simple">
                                    </flat-picker>
                                </base-input>
                            </div>
                            <div class="col">
                                <span></span>
                            </div>
                        </div>
                        
                        <div class="container ct-example-row">
                            <div class="row">
                                <div class="col text-right">
                                    <br/>
                                    <strong class="text-primary"> Partner</strong>
                                </div>
                                <div class="col">
                                    <p class="lead text-white mt-3 mb-3"></p>
                                    <base-input v-model="groupmates" 
                                                alternative class="Partner col-" 
                                                placeholder="e.g yourfriend@mail.com">
                                    </base-input>
                                </div>
                                <div class="col">
                                    
                                    <br/>
                                    <span><base-button class="ni ni-fat-add" size= "sm" type="primary" rounded @click="handleAdd()"> 
                                        <!-- <i class="ni ni-fat-add"></i> -->
                                    </base-button></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <span></span>
                            </div>
                            <div class="col text-center">
                                <badge v-if="!valid" type="danger" dismissible>
                                    <span class="alert-inner--text"><strong>Invalid Email!</strong></span>
                                    <i class="ni ni-fat-remove text-default"
                                            size="sm"
                                            @click="valid=true">
                                    </i>
                                </badge>
                                
                                <ul class="list-unstyled text-left">
                                    <li v-for = "(mates, num) in partnerEmail" :key="num">
                                        <badge type = "primary" class="text-muted">&emsp;{{ mates }}</badge>
                                        <i class="ni ni-fat-remove "
                                            size="sm"
                                            @click="handleDelete(num)">
                                        </i>
                                    </li>
                                </ul>
                            </div>
                            <div class="col">
                                <span></span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col text-right">
                                <br/>
                                <strong class="text-primary"> Description </strong>
                            </div>
                            <div class="col">
                                <p class="lead text-white mt-3 mb-3"></p>
                                <textarea v-model="description"
                                        class=" Description form-control form-control-alternative" 
                                        placeholder="e.g Kill me Please!">
                                </textarea>
                            </div>
                            <div class="col">
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div class= "text-center">
                        <base-button class="btn-1" outline type="success" @click="handleSubmit()">ADD</base-button>
                        <p class="lead text-white mt-3 mb-3"></p>
                    </div>
                    <br/>
                    
                    <div class="row">
                        <div class="col">
                            <span></span>
                        </div>
                        
                        <div class="col-5 text-center">
                            <base-alert v-if="!validsubmit" type="warning">
                                <span class="alert-inner--icon"><i class="ni ni-bulb-61"></i></span>
                                <span class="alert-inner--text">Please input your <strong>TASK NAME!</strong></span>
                                <!-- <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button> -->
                            </base-alert>
                        </div>
                        <div class="col">
                            <span></span>
                        </div>
                        
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
import Tabs from "../components/Tabs/Tabs";
import TabPane from "../components/Tabs/TabPane";
import TabsSection from "./components/JavascriptComponents/TabsSection";
import Badge from '../components/Badge.vue';
import BaseNav from "../components/BaseNav";
import BaseDropdown from "../components/BaseDropdown";

var now = new Date();
var month = now.getMonth()+1
var day = now.getDate();
if (month<10){
    month = '0'+ month
};
if (day<10){
    day = '0'+ day
};
var current = now.getFullYear() + "-" + month + "-" + day;

export default {
    components:{
        flatPicker,
        TabPane,
        Tabs,
        TabsSection,
        Badge,
        BaseNav,
        BaseDropdown
    },
    data: () =>({
        task_id:'',
        tname:"",
        radioData: [
            { value: 'Assignment' },
            { value: 'Present' },
            { value: 'Project' },
            { value: 'Midterm' },
            { value: 'Final' }
            
        ],
        radioVal: 'Assignment',
        DueDate: {
            simple: current
        },
        partnerEmail: [],
        groupmates: "xxx@link.cuhk.edu.hk",
        description: "",
        validsubmit: true,
        valid: true,
    }),
    methods:{
        getRadioVal(val){
            this.radioVal =  val;
            console.log(this.getRadioVal);
        },                     
        handleDelete(i){
            this.partnerEmail.splice(i,1);
        },
        handleAdd(){
            this.valid = true;
            console.log(this.groupmates);
            service.get(`/users/getUserId/${this.groupmates}`).then(res=>{
                if(res.data.data.length == 0){
                    this.valid = false;
                }
                else{
                    for(let i of this.partnerEmail){
                        if (this.groupmates == i){
                            this.valid = false;
                            break;
                        }
                    }
                    if(this.valid){
                        this.partnerEmail.push(this.groupmates);
                        console.log(this.partnerEmail);
                    }
                }
            })
        },
        handleSubmit(){
            console.log(this.validsubmit);
            console.log("clicked");
            console.log(this.partnerEmail.length);
            this.task_id = uuid.v1();
            if (this.tname == ''){
                this.validsubmit = false;
            }
            else{
                service.post("/tasks/createTask", {
                    task_id: this.task_id,
                    name: this.tname,
                    type: this.radioVal,
                    DueDate: this.DueDate.simple,
                    description: this.description

                }).then(res => {
                    if (res.data.success) {
                        console.log("Update to task database success!");
                        if(this.partnerEmail.length != 0){
                            //console.log(this.partnerEmail);
                            for(let i of this.partnerEmail){
                                service.get(`/users/getUserId/${i}`).then(res=>{
                                    console.log(res.data.data.length)
                                    service.post("/tasks/createGroup", {
                                    task_id: this.task_id,
                                    user_id: res.data.data[0].user_id,
                                    request: 'request'
                                    }).then(res => {
                                        if (res.data.success) {
                                            console.log("Update to group database success!");
                                            
                                        } else {
                                            console.log("Update to group database failed!");
                                        }
                                    }).catch((err)=>{
                                        console.log("err:", err);
                                        this.validsubmit = false;
                                    });
                                });
                            }    
                        }
                        service.post("/tasks/createGroup", {
                            task_id: this.task_id,
                            user_id: store.getters["getUserId"],
                            request: 'accept'
                            }).then(res => {
                                if (res.data.success) {
                                    console.log("Update to group database success!");
                                } else {
                                    console.log("Update to group database failed!");
                                }
                                service.get(`/tasks/getTasks/${store.getters["getUserId"]}`)
                                    .then((res1) => {
                                        store.commit("setTask", res1.data.data);
                                        console.log('fetch task');
                                    });
                            }).catch((err)=>{
                                console.log("err:", err);
                                this.validsubmit = false;
                            });
                        
                        this.$router.push("/schedule");
                    } else {
                        console.log("Update to task database failed!");
                    }
                }).catch((err)=>{
                    console.log("err:", err);
                    this.validsubmit = false;
                });
            }
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
