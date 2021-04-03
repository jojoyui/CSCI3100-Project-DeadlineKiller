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
                                            type="primary"
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
                <card shadow class="card-profile mt--300" no-body>
                    <div>
                        <div class="col-lg pt-lg-3">
                            <div class="row">
                                <div class="col">
                                  <!-- <base-button type="default" class=" mb-3" @click="modals.modal3 = true" icon="ni ni-chat-round">NOTES</base-button>
                                    <modal :show.sync="modals.modal3"
                                        body-classes="p-0"
                                        modal-classes="modal-dialog-centered modal-sm">
                                        <card type="secondary" shadow
                                            header-classes="bg-white pb-5"
                                            body-classes="px-lg-5 py-lg-5"
                                            class="border-0">
                                            <template>
                                                <div class="text-muted text-center mb-3">
                                                    <small>Sign in with</small>
                                                </div>
                                                <div class="btn-wrapper text-center">
                                                    <base-button type="neutral">
                                                        <img slot="icon" src="img/icons/common/github.svg">
                                                        Github
                                                    </base-button>

                                                    <base-button type="neutral">
                                                        <img slot="icon" src="img/icons/common/google.svg">
                                                        Google
                                                    </base-button>
                                                </div>
                                            </template>
                                            <template>
                                                <div class="text-center text-muted mb-4">
                                                    <small>Or sign in with credentials</small>
                                                </div>
                                                <form role="form">
                                                    <base-input alternative
                                                                class="mb-3"
                                                                placeholder="Email"
                                                                addon-left-icon="ni ni-email-83">
                                                    </base-input>
                                                    <base-input alternative
                                                                type="password"
                                                                placeholder="Password"
                                                                addon-left-icon="ni ni-lock-circle-open">
                                                    </base-input>
                                                    <base-checkbox>
                                                        Remember me
                                                    </base-checkbox>
                                                    <div class="text-center">
                                                        <base-button type="primary" class="my-4">Sign In</base-button>
                                                    </div>
                                                </form>
                                            </template>
                                        </card>
                                    </modal> -->
                                    
                                </div>
                                <div class="col">
                                  <span></span>
                                </div>
                                <div class="col">
                                    <span></span>
                                </div>
                                <div class="col">
                                    <span></span>
                                </div>
                                <div class="col text-right">
                                    <base-button type="secondary" class="text-info mb-3" @click="modals.modal2 = true" icon="ni ni-bell-55">
                                        <span>
                                            <badge v-if="tasks_name.length === 0" type="success"> {{tasks_name.length}} </badge>
                                            <badge v-else type="danger"> {{tasks_name.length}} </badge>
                                        </span>   
                                    </base-button>
                                    <modal :show.sync="modals.modal2"
                                        gradient="success"
                                        modal-classes="modal-danger modal-dialog-centered">
                                        <h6 slot="header" class="modal-title" id="modal-title-notification">Forming Group With Your Friends!</h6>
                                        <div class="py-3 text-center">
                                              <i class="ni ni-bell-55 ni-3x"></i>
                                            <strong ><h4 class="heading mt-4">There are {{tasks_name.length}} requests!</h4></strong>
                                        </div>
                                        <div>
                                          <ul class="list-unstyled">
                                              <li v-for = "(task, num) in tasks_name" :key="num">
                                                  <div class="row">
                                                      <div class="col text-left">
                                                        
                                                          <strong>
                                                              <i class="ni ni-planet text-primary"></i> 
                                                              {{ task["task"] }}
                                                              <badge type="primary"> {{ task["type"] }} </badge>
                                                          </strong>
                                                          <br/>
                                                          <br/>
                                                        
                                                      </div>
                                                      
                                                      <div class="col text-right">
                                                        <!-- <div class="row"> -->
                                                          <base-button size="sm" type="success" @click="handleAccept(num)">Accept</base-button>
                                                          <base-button size="sm" type="danger" @click="handleDecline(num)">Decline</base-button>
                                                        <!-- </div> -->
                                                      </div>
                                                  </div>
                                              </li>
                                          </ul>
                                        </div>
                                    </modal>
                                    
                                </div>
                            </div>
                        

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
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import { service } from "@/plugins/request_service.js";
import store from "@/store";
import Modal from "../components/Modal.vue";
import Tabs from "../components/Tabs/Tabs";
import TabPane from "../components/Tabs/TabPane";
import PillsLayout from "../components/Tabs/PillsLayout";
import TabsLayout from "../components/Tabs/TabsLayout";
import Badge from '../components/Badge.vue';

//import  VueWindowModal  from  'vue-window-modal'
//Vue.use(VueWindowModal)

export default {
        //el : '#app',
        components: {
            Modal,
            TabPane,
            Tabs,
            PillsLayout,
            TabsLayout,
            Badge
            
        },

        data: () => ({
            task:[ 
            {
                description: "",
                due_date: "",
                name: "",
                type: "",             
            }],
            modals: {
                modal1: false,
                modal2: false,
                modal3: false
            },
            tasks_name: []
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
       this.noti();
    },
    methods: {
        // demo(){
        //     console.log("clicked")
        //     service.get("/users/testing").then(res => {
        //         console.log(res.data.data[0].name);
        //         this.temp = res.data.data[0].name;

        //     })
            
        // },
        Addsubtask(task_id){
            store.commit("setTaskId", task_id);
            this.$router.push("/create_subtask");
        },
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
        },
        noti(){
            console.log("requests");
            service.get(`/users/notification/${store.getters["getUserId"]}`).then(res=>{
                console.log(res.data);
                this.tasks_name = res.data.data;
            });
            
        },
        handleAccept(i){
            console.log("handleAccept");
            console.log(this.tasks_name[i]["tid"]);
            service.get(`/users/accept/${this.tasks_name[i]["tid"]}`).then(res =>{
                console.log(res.data);
            });
            this.tasks_name.splice(i,1);
        },
        handleDecline(i){
            console.log("handleDecline");
            console.log(this.tasks_name[i]["tid"]);
            service.get(`/users/decline/${this.tasks_name[i]["tid"]}`).then(res =>{
                console.log(res.data);
            });
            this.tasks_name.splice(i,1);
        },

        
    }


};
</script>
<style>
</style>