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
                                            href="http://localhost:8081/#/list"
                                            class="mb-3 mb-sm-0"
                                            type="primary"
                                            icon="ni ni-bullet-list-67">
                                    Task List
                                </base-button>
                                <base-button tag="a"
                                            href="http://localhost:8081/#/schedule"
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
                <card shadow class="card-profile mt--300" no-body>
                <h1 class="font-weight-light">
                    Task List:
                </h1>                    
                    <h4 class="font-weight-light">
                    <!-- <span>  Name: {{name}} <br> Type: {{type}} <br> Deadline: {{due_date}} <br><br> Description: <br> {{description}}
                        <hr> Name: {{name_2}} <br> Type: {{type_2}} <br> Deadline: {{due_date_2}} <br><br> Description: <br> {{description_2}} </span>
                         -->
                        <ul>
                            <li v-for="(item) in task" :key = "item.id"> 
                                Name: {{item.name}} <br> Type: {{item.type}} <br> Deadline: {{item.due_date}} <br><br> Description: <br> {{item.description}} <hr> </li>
                        </ul>
                    </h4>

                </card>
            </div>
        </section>
    </div>
</template>
<script>
import { service } from "@/plugins/request_service.js";
import store from "@/store";

//import  VueWindowModal  from  'vue-window-modal'
//Vue.use(VueWindowModal)

export default {
        //el : '#app',

        data: () => ({
            task:[ 
            {
                description: "",
                due_date: "",
                name: "",
                type: "",             
            }] 
        // temp: "original",
        // description: "",
        // due_date: "",
        // name: "",
        // request: "",
        // subtask_id: "",
        // task_id: "",
        // type: "",
        // user_id: "",
    }),
    mounted (){
        //this.demo();
       this.fetchTask();
    },
    methods: {
        // demo(){
        //     console.log("clicked")
        //     service.get("/users/testing").then(res => {
        //         console.log(res.data.data[0].name);
        //         this.temp = res.data.data[0].name;

        //     })
            
        // },
        fetchTask(){
            service.get(`/tasks/getTasks/${store.getters["getUserId"]}`).then(res => {
                console.log(res.data.data[0].name);
                console.log(res.data.data[0].task_id);
                console.log(this.route);
                //console.log(res.data.length);
                
                //this.name = res.data.data[0].name;
                // this.task_id = res.data.data[0].task_id;
                // this.description = res.data.data[0].description;
                // this.due_date = res.data.data[0].due_date;
                // this.name = res.data.data[0].name;
                // this.type = res.data.data[0].type;
                
                // var i;
                // this.description_2 = res.data.data[1].description;
                // this.due_date_2 = res.data.data[1].due_date;
                // this.name_2 = res.data.data[1].name;
                // this.type_2 = res.data.data[1].type;

                // for (i = 0;i < Object.keys(data).length; i++){
                //     this.description = res.data.data[i].description;
                //     this.due_date = res.data.data[i].due_date;
                //     this.name = res.data.data[i].name;
                //     this.type = res.data.data[i].type; 
                // }

                this.task = res.data.data;
            });
        }

        
    }


};
</script>
<style>
</style>