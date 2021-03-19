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
                        <h2 class="mb-5 text-center">
                            <span>Create Task</span>
                        </h2>
                        <p class="btn btn-link text-default"> Task Name </p>
                        <base-input v-model="tname" 
                                    alternative class="taskName col-"  
                                    placeholder="e.g 3100_project">
                        </base-input>
                        <p class="btn btn-link text-default">Type</p>
                        <ul class="list-unstyled">
                            <li v-for= "(item, index) in radioData" :key="index">
                                <input
                                    type = "radio"
                                    v-model = "radioVal"
                                    :value = "item.value"
                                    @change = "getRadioVal"
                                />
                            {{ item.value }}
                            </li>
                        </ul>
                        <p class="btn btn-link text-default"> Due Date </p>
                        <base-input v-model="DueDate"
                                    alternative class="DueDate col-"  
                                    placeholder="e.g 20210319">
                        </base-input>
                        <!-- <date-pickers></date-pickers> -->
                        <p class="btn btn-link text-default"> Partner</p>
                        <base-input v-model="partnerEmail" 
                                    alternative class="Partner col-" 
                                    placeholder="e.g yourfriend@mail.com">
                        </base-input>
                        <p class="btn btn-link text-default"> Description </p>
                        <textarea v-model="description"
                                  class=" Description form-control form-control-alternative" 
                                  placeholder="e.g Kill me Please!">
                        </textarea>
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

const DatePickers = () => import("./components/JavascriptComponents/DatePickers");

export default {
    components:{
        DatePickers
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
        DueDate: "",
        partnerEmail: "",
        description: "",
        validsubmit: true
    }),
    methods:{
        handleSubmit(){
            console.log("clicked");
            console.log(this.radioVal);
            this.task_id = uuid.v1();
            service.post("/tasks/createTask", {
                task_id: this.task_id,
                name: this.tname,
                type: this.radioVal,
                DueDate: this.DueDate,
                partnerEmail: this.partnerEmail,
                description: this.description

            }).then(res => {
                if (res.data.success) {
                    console.log("Update to task database success!");
                    this.$router.push("/List");
                } else {
                    console.log("Update to task database failed!");
                }
            }).catch((err)=>{rs
                console.log("err:", err);
                this.validsubmit = false;
            });


            service.post("/tasks/createGroup", {
                task_id: this.task_id,
                user_id: store.getters["getUserId"]

            }).then(res => {
                if (res.data.success) {
                    console.log("Update to group database success!");
                    this.$router.push("/List");
                } else {
                    console.log("Update to group database failed!");
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
