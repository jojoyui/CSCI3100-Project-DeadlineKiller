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
                                  <modal :show.sync="modals.modal3"
                                        :clickoutside="false"
                                        body-classes="p-0"
                                        modal-classes="modal-dialog-centered modal-sm">
                                        <card gradient="secondary" shadow
                                            header-classes="bg-white pb-5"
                                            body-classes="px-lg-5 py-lg-5"
                                            class="border-0">
                                            <template>
                                                <div class="text-center text-primary mb-3">
                                                    <strong>NEW SUBTASK</strong>
                                                </div>
                                            </template>
                                            <template>
                                                
                                                <form role="form">
                                                    <base-input alternative
                                                                class="mb-3"
                                                                v-model="tname"
                                                                placeholder="Subtask Name"
                                                                addon-left-icon="ni ni-map-big">
                                                    </base-input>
                                                    <div class="row">
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
                                                    <!-- <br/> -->
                                                    <badge type="primary">Details</badge>
                                                    <textarea v-model="description"
                                                                class="Description form-control form-control-alternative mb-3"
                                                                placeholder="e.g Kill me Please!">
                                                                
                                                    </textarea>
                                                    <base-alert v-if="!validsubmit" type="warning">
                                                        <!-- <span class="alert-inner--icon"><i class="ni ni-bulb-61"></i></span> -->
                                                        <span class="alert-inner--text">Please input the <strong>SUBTASK NAME!</strong></span>
                                                    </base-alert>
                                                    <div class="row">
                                                      <div class="text-left col">
                                                        <base-button type="link"
                                                                      text-color = "default"
                                                                      class="my-4"
                                                                      @click="modals.modal3 = false, validsubmit = true">
                                                              Close
                                                        </base-button>
                                                      </div>
                                                      <div class="text-right col">
                                                          <base-button type="primary" outline class="my-4" @click="handleSubmit()">ADD</base-button>
                                                          
                                                      </div>
                                                    </div>
                                                    
                                                </form>
                                            </template>
                                        </card>
                                    </modal>
                                    
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
                                    <base-button type="secondary" class="text-default mb-3" @click="modals.modal2 = true" icon="ni ni-bell-55" v-b-popover.hover.top="'Your friends are asking you!'"
                                                title="Check Your Request">
                                        <span>
                                            Requests
                                            <badge v-if="tasks_name.length === 0" type="success"> {{tasks_name.length}} </badge>
                                            <badge v-else type="danger"> {{tasks_name.length}} </badge>
                                        </span>   
                                    </base-button>
                                    <modal :show.sync="modals.modal2"
                                        gradient="info"
                                        :clickoutside="true"
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
                                                      <div class="col-7 text-left">
                                                        
                                                          <strong>
                                                              <!-- <i class="ni ni-planet text-primary"></i>  -->
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
                        

                            <h1 class="font-weight-light text-center">
                                <strong>Task List</strong>
                            </h1>                    
                            <h4 class="font-weight-light">
                            <!-- <span>  Name: {{name}} <br> Type: {{type}} <br> Deadline: {{due_date}} <br><br> Description: <br> {{description}}
                                <hr> Name: {{name_2}} <br> Type: {{type_2}} <br> Deadline: {{due_date_2}} <br><br> Description: <br> {{description_2}} </span>
                                -->
                                <ul class="list-unstyled">
                                    <li v-for="(item) in task" :key = "item.id"> 
                                        Name: {{item.name}} <br> Type: {{item.type}} <br> Deadline: {{item.due_date}} <br><br> Description: <br> {{item.description}} 
                                        <br/>
                                        <br/>
                                        <base-button type="info" class="mb-3" @click="modals.modal3 = true" size="sm">
                                            Add Subtask
                                        </base-button>
                                        <hr>
                                    </li>
                                    
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
import { uuid } from 'vue-uuid'; 
import store from "@/store";
import Modal from "../components/Modal.vue";
import Tabs from "../components/Tabs/Tabs";
import TabPane from "../components/Tabs/TabPane";
import PillsLayout from "../components/Tabs/PillsLayout";
import TabsLayout from "../components/Tabs/TabsLayout";
import Badge from '../components/Badge.vue';
import tooltip from './components/JavascriptComponents/Tooltips';
import { VBTooltip } from "bootstrap-vue/esm/directives/tooltip/tooltip";
import { VBPopover } from "bootstrap-vue/esm/directives/popover/popover";
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

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
            Badge,
            flatPicker,
            tooltip
            
        },
        directives: {
            BTooltip: VBTooltip,
            BPopover: VBPopover
        },

        data: () => ({
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
        handleSubmit(){
          console.log("clicked");
          
          this.subtask_id = uuid.v1();
          if (this.tname == ''){
              this.validsubmit = false;
          }
          else{
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
        },
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