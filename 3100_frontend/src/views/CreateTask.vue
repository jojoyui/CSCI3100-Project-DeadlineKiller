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
        </section>
        
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-createTask mt--300" no-body>
                    <div class="col-lg-12 pt-lg">
                        <h1 class="mb-5 text-center">
                            <span>Create Task</span>
                        </h1>
                        <span class="btn btn-link text-default"> Task Name </span>
                        <div class="col">
                            <base-input v-model="tname" 
                                        alternative class="taskName col-"  
                                        placeholder="e.g 3100_project">
                            </base-input>
                        </div>
                        <p class="btn btn-link text-default">Type</p>
                        <div class="col">
                            <ul class="list-unstyled">
                                <li v-for= "(item, index) in radioData" :key="index">
                                    <input
                                        type = "radio"
                                        v-model = "radioVal"
                                        :value = "item.value"
                                        @change = "getRadioVal(item.value)"
                                    />
                                {{ item.value }}
                                </li>
                            </ul>
                        </div>
                        <p class="btn btn-link text-default"> Due Date </p>
                        <div class="row">
                            <div class="col-sm">
                                <div class="col">
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
                            </div>
                            <div class="col-sm">
                                <span></span>
                            </div>
                            <div class="col-sm">
                                <span></span>
                            </div>
                        </div>




                        <!-- <date-pickers></date-pickers> -->
                        <p class="btn btn-link text-default"> Partner</p>
                        <div class="container ct-example-row">
                            <div class="row">
                                <div class="col">
                                    <base-input v-model="groupmates" 
                                                alternative class="Partner col-" 
                                                placeholder="e.g yourfriend@mail.com">
                                    </base-input>
                                </div>
                                <div class="col">
                                    <base-button class="btn-1" outline type="primary" @click="handleAdd()"> Add </base-button>
                                </div>
                            </div>
                        </div>
                        <ul class="list-unstyled">
                            <li v-for = "(mates, num) in partnerEmail" :key="num">
                                {{ mates }}
                            </li>
                        </ul>
                        <p class="btn btn-link text-default"> Description </p>
                        <div class="col">
                            <textarea v-model="description"
                                    class=" Description form-control form-control-alternative" 
                                    placeholder="e.g Kill me Please!">
                            </textarea>
                        </div>
                    </div>
                    <div v-if="!validsubmit" class="col-lg-12 pt-lg">
                        <base-alert type="warning" icon="ni ni-bell-55" dismissible>
                            <span slot="text"><strong>Warning!</strong> This is a warning alert—check it out!</span>
                        </base-alert>
                    </div>
                    <div class= "col-lg-12 pt-lg text-center">
                        <base-button class="btn-1" outline type="primary" @click="handleSubmit()">Submit</base-button>
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

export default {
    components:{
        flatPicker
    },
    data: () =>({
        task_id:'',
        tname:"",
        radioData: [
            { value: 'Assignment' },
            { value: 'Present' },
            { value: 'Midterm' },
            { value: 'Final' },
            { value: 'Project' }
        ],
        radioVal: 'Assignment',
        DueDate: {
            simple: "2018-07-17"
        },
        partnerEmail: [],
        groupmates: "xxx@link.cuhk.edu.hk",
        description: "",
        validsubmit: true,
    }),
    methods:{
        getRadioVal(val){
            this.radioVal =  val;
        },
                                    
        
        handleAdd(){
            console.log(this.groupmates);
            this.partnerEmail.push(this.groupmates);
            console.log(this.partnerEmail);
            
        },

        handleSubmit(){
            console.log("clicked");
            console.log(this.radioVal);
            this.task_id = uuid.v1();
            service.post("/tasks/createTask", {
                task_id: this.task_id,
                name: this.tname,
                type: this.radioVal,
                DueDate: this.DueDate.simple,
                description: this.description

            }).then(res => {
                if (res.data.success) {
                    console.log("Update to task database success!");
                    if(this.partnerEmail.size != 0){
                        console.log(this.partnerEmail);
                        for(let i of this.partnerEmail){
                            service.get(`/users/getUserId/${i}`).then(res=>{
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
                    } else {
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
                        }).catch((err)=>{
                            console.log("err:", err);
                            this.validsubmit = false;
                        });
                    }
                    this.$router.push("/List");
                } else {
                    console.log("Update to task database failed!");
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
