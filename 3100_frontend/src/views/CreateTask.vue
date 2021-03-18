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
                        <div>
                            <!-- Radio buttons -->
                            <div class="mb-3">
                                <p class="btn btn-link text-default">Type</p>
                            </div>                        
                            <base-radio v-model="radio.radio1"
                                        name="radio0" 
                                        class="mb-3" >
                                Assignment
                            </base-radio>
                            <base-radio v-model="radio.radio1" 
                                        name="radio1" 
                                        class="mb-3" >
                               Project
                            </base-radio>
                            <base-radio v-model="radio.radio1" 
                                        name="radio2" 
                                        class="mb-3">
                                Midterm-Exam
                            </base-radio>
                            <base-radio v-model="radio.radio1"
                                        name="radio3" 
                                        class="mb-3" >
                               Final-Exam
                            </base-radio>
                        </div>
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
                    <div class= "col-lg-12 pt-lg text-center">
                        <base-button class="btn-1" outline type="primary" @click="handleSubmit()">Submit</base-button>
                    </div>
                </card>
            </div>
        </section>
        <!-- <ul>
            <todo-item 
            v-for="(item, index) of list"
            v-bind:content="item"
            :key="index"
            :index="index"
            @delete="handleDelete"
            ></todo-item>
        </ul> -->
    </div>
</template>


<script>
/* eslint-disable */
import { uuid } from 'vue-uuid'; 
import { service } from "@/plugins/request_service.js";
const DatePickers = () => import("./components/JavascriptComponents/DatePickers");

export default {
    components:{
        DatePickers
    },
    data: () =>({
        tname:"",
        radio: {
            radio1: ""
        },
        DueDate: "",
        partnerEmail: "",
        description: "",
        switches: {
            off: false,
            on: true
        }
    }),
    methods:{
        handleSubmit(){
            console.log("clicked");
            console.log(this.name);

            service.post("/task/createTask", {
                task_id: uuid.v1(),
                name: this.tname,
                type: this.radio1,
                DueDate: this.DueDate,
                partnerEmail: this.partnerEmail,
                description: this.description

            }).then(res => {
                if (res.data.success) {
                    console.log("Update to database success!");
                    this.$router.push("/showTask");
                } else {
                    console.log("Update to database failed!");
                }
            })
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
