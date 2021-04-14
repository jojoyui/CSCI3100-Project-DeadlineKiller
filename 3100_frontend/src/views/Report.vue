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
                            <p class="lead text-white mt-4 mb-5"></p >
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
        <modal
                    :show.sync="modals.modal1"
                    :clickoutside="false"
                    body-classes="p-0"
                    modal-classes="modal-dialog-centered"
                  >
                    <card
                      gradient="secondary"
                      shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0"
                    >
                      <template>
                        <div class="text-center text-primary mb-3">
                          <strong>Completed Task</strong>
                        </div>
                      </template>
                       <template>
                        <ul class="list-unstyled">
                            <li v-for="(item) in CompletedTask" :key = "item.id"> 
                                        <strong> {{item.name}} </strong>
                                        <div v-if="item.type === 'assignment'">
                                            <span class="badge badge-primary"><strong>{{item.type}}</strong></span> <br><br> 
                                        </div>
                                        <div v-else-if="item.type === 'present'">
                                            <span class="badge badge-info"><strong>{{item.type}}</strong></span> <br><br> 
                                        </div>
                                        <div v-else-if="item.type === 'project'">
                                            <span class="badge badge-success"><strong>{{item.type}}</strong></span> <br><br> 
                                        </div>
                                        <div v-else-if="item.type === 'midterm'">
                                            <span class="badge badge-warning"><strong>{{item.type}}</strong></span> <br><br> 
                                        </div>
                                        <div v-else>
                                            <span class="badge badge-danger"><strong>{{item.type}}</strong></span> <br><br> 
                                        </div>
                                        <div class="author"><strong>Completed Date: </strong> {{item.completed_timestamp}}</div> <br>
                                        <div class="author"  v-if="item.description === ''">{{item.description}}</div>
                                        <div class="author"  v-else><strong>Description: </strong>{{item.description}}</div>
                                        <hr>
                            </li>
                        </ul>
                      </template>
                      <template>
                        <form role="form">
                          <div class="row">
                            <div class="text-left col">
                              <base-button
                                type="link"
                                text-color="default"
                                class="my-4"
                                @click="
                                  (modals.modal1 = false), (validsubmit = true)
                                "
                              >
                                Close
                              </base-button>
                            </div>
                          </div>
                        </form>
                      </template>
                    </card>
        </modal>
        <modal
                    :show.sync="modals.modal2"
                    :clickoutside="false"
                    body-classes="p-0"
                    modal-classes="modal-dialog-centered"
                  >
                    <card
                      gradient="secondary"
                      shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0"
                    >
                      <template>
                        <div class="text-center text-primary mb-3">
                          <strong>Incompleted Task</strong>
                          <br>
                        </div>
                      </template>
                       <template>
                        <ul class="list-unstyled">
                            <li v-for="(item) in InCompletedTask" :key = "item.id"> 
                                        <strong> {{item.name}} </strong>
                                        <div v-if="item.type === 'assignment'">
                                            <span class="badge badge-primary"><strong>{{item.type}}</strong></span> <br><br> 
                                        </div>
                                        <div v-else-if="item.type === 'present'">
                                            <span class="badge badge-info"><strong>{{item.type}}</strong></span> <br><br> 
                                        </div>
                                        <div v-else-if="item.type === 'project'">
                                            <span class="badge badge-success"><strong>{{item.type}}</strong></span> <br><br> 
                                        </div>
                                        <div v-else-if="item.type === 'midterm'">
                                            <span class="badge badge-warning"><strong>{{item.type}}</strong></span> <br><br> 
                                        </div>
                                        <div v-else>
                                            <span class="badge badge-danger"><strong>{{item.type}}</strong></span> <br><br> 
                                        </div>
                                        <div class="author"><strong>Due Date: </strong> {{item.due_date}}</div> <br>
                                        <div class="author"  v-if="item.description === ''">{{item.description}}</div>
                                        <div class="author"  v-else><strong>Description: </strong>{{item.description}}</div>
                                        <hr>
                            </li>
                        </ul>
                      </template>
                      <template>
                        <form role="form">
                          <div class="row">
                            <div class="text-left col">
                              <base-button
                                type="link"
                                text-color="default"
                                class="my-4"
                                @click="
                                  (modals.modal2 = false), (validsubmit = true)
                                "
                              >
                                Close
                              </base-button>
                            </div>
                          </div>
                        </form>
                      </template>
                    </card>
        </modal>
        <modal
                    :show.sync="modals.modal3"
                    :clickoutside="false"
                    body-classes="p-0"
                    modal-classes="modal-dialog-centered"
                  >
                    <card
                      gradient="secondary"
                      shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0"
                    >
                      <template>
                        <div class="text-center text-primary mb-3">
                          <strong>Overdued Task</strong>
                          <br>
                        </div>
                      </template>
                       <template>
                        <ul class="list-unstyled">
                            <li v-for="(item) in OverduedTask" :key = "item.id"> 
                                        <strong> {{item.name}} </strong>
                                        <div v-if="item.type === 'assignment'">
                                            <span class="badge badge-primary"><strong>{{item.type}}</strong></span> <br><br> 
                                        </div>
                                        <div v-else-if="item.type === 'present'">
                                            <span class="badge badge-info"><strong>{{item.type}}</strong></span> <br><br> 
                                        </div>
                                        <div v-else-if="item.type === 'project'">
                                            <span class="badge badge-success"><strong>{{item.type}}</strong></span> <br><br> 
                                        </div>
                                        <div v-else-if="item.type === 'midterm'">
                                            <span class="badge badge-warning"><strong>{{item.type}}</strong></span> <br><br> 
                                        </div>
                                        <div v-else>
                                            <span class="badge badge-danger"><strong>{{item.type}}</strong></span> <br><br> 
                                        </div>
                                        <div class="author"><strong>Due Date: </strong> {{item.due_date}}</div> <br>
                                        <div class="author"  v-if="item.description === ''">{{item.description}}</div>
                                        <div class="author"  v-else><strong>Description: </strong>{{item.description}}</div>
                                        <hr>
                            </li>
                        </ul>
                      </template>
                      <template>
                        <form role="form">
                          <div class="row">
                            <div class="text-left col">
                              <base-button
                                type="link"
                                text-color="default"
                                class="my-4"
                                @click="
                                  (modals.modal3 = false), (validsubmit = true)
                                "
                              >
                                Close
                              </base-button>
                            </div>
                          </div>
                        </form>
                      </template>
                    </card>
        </modal>
        <modal
            :show.sync="modals.modal4"
            :clickoutside="true"
            gradient="default"
            modal-classes="modal-danger modal-dialog-centered"
            >
            <!-- <h6
                slot="header"
                class="modal-title"
                id="modal-title-notification"
            >
                Look up which month is <strong>BUSY</strong> month <br/> <strong>References</strong> that help you manage your time <strong>better</strong>!
            </h6> -->
            <div class="py-3 text-center">
                <i class="ni ni-sound-wave ni-5x"></i>
                <strong
                ><h3 class="text-white mt-4">
                    Monthly Tasks
                    
                </h3></strong
                >
            </div>
            <div class="table-responsive">
                <div>
                <table class="table align-items-center">
                    <thead class="thead text-center">
                    <tr>
                        <th scope="col-sm-8" data-sort="task.name">Month</th>
                        <th
                        scope="col-sm-2"
                        class="sort"
                        data-sort="task.due_date"
                        >
                        Tasks
                        </th>
                        <th
                        scope="col-sm-2"
                        class="sort"
                        data-sort="completion"
                        >
                        %
                        </th>
                    </tr>
                    </thead>
                    <tbody class="month text-center">
                         
                        <tr v-for="(item,num) in monthIndex" :key="num">
                            <th>
                                <div class='author-box'>
                                    {{ item }}
                                </div>
                            </th>
                            <td class="tasks text-center">
                                <div v-if="item === 'Jan'">{{ Month.Jan }}</div>
                                <div v-if="item === 'Feb'">{{ Month.Feb }}</div>
                                <div v-if="item === 'Mar'">{{ Month.Mar }}</div>
                                <div v-if="item === 'Apr'">{{ Month.Apr }}</div>
                                <div v-if="item === 'May'">{{ Month.May }}</div>
                                <div v-if="item === 'Jun'">{{ Month.Jun }}</div>
                                <div v-if="item === 'Jul'">{{ Month.Jul }}</div>
                                <div v-if="item === 'Aug'">{{ Month.Aug }}</div>
                                <div v-if="item === 'Sept'">{{ Month.Sep }}</div>
                                <div v-if="item === 'Oct'">{{ Month.Oct }}</div>
                                <div v-if="item === 'Nov'">{{ Month.Nov }}</div>
                                <div v-if="item === 'Dec'">{{ Month.Dec }}</div>


                            </td>
                            <td class="percentage text-center">
                                <div v-if="item === 'Jan'">{{ Math.round(Month.Jan/totalTask*100) + "%" }}</div>
                                <div v-if="item === 'Feb'">{{ Math.round(Month.Feb/totalTask*100) + "%" }}</div>
                                <div v-if="item === 'Mar'">{{ Math.round(Month.Mar/totalTask*100) + "%" }}</div>
                                <div v-if="item === 'Apr'">{{ Math.round(Month.Apr/totalTask*100) + "%" }}</div>
                                <div v-if="item === 'May'">{{ Math.round(Month.May/totalTask*100) + "%" }}</div>
                                <div v-if="item === 'Jun'">{{ Math.round(Month.Jun/totalTask*100) + "%" }}</div>
                                <div v-if="item === 'Jul'">{{ Math.round(Month.Jul/totalTask*100) + "%" }}</div>
                                <div v-if="item === 'Aug'">{{ Math.round(Month.Aug/totalTask*100) + "%" }}</div>
                                <div v-if="item === 'Sept'">{{ Math.round(Month.Sep/totalTask*100) + "%" }}</div>
                                <div v-if="item === 'Oct'">{{ Math.round(Month.Oct/totalTask*100) + "%" }}</div>
                                <div v-if="item === 'Nov'">{{ Math.round(Month.Nov/totalTask*100) + "%" }}</div>
                                <div v-if="item === 'Dec'">{{ Math.round(Month.Dec/totalTask*100) + "%" }}</div>
                            </td>
                        </tr>
                         
                    </tbody>
                    
                          
                </table>
                </div>
            </div>
            <!-- <div>
                <ul class="list-unstyled">
                <li>
                    <div class="row">
                        <div class="col-7 text-left">
                        
                            <i class="ni ni-planet text-primary"></i> 
                        
                            <badge type="primary">
                                {{ month.Jan }}
                            </badge>
                        
                            <br />
                            <br />
                        </div>
                        <div class="col text-right">
                            <div class="row">
                                <base-button
                                size="sm"
                                type="success"
                                @click="handleAccept(num)"
                                >Accept</base-button
                                >
                                <base-button
                                size="sm"
                                type="danger"
                                @click="handleDecline(num)"
                                >Decline</base-button
                                >
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="col-7 text-left">
                        
                            <i class="ni ni-planet text-primary"></i> 
                        
                            <badge type="primary">
                                {{ month.Feb }}
                            </badge>
                        
                            <br />
                            <br />
                        </div>
                        <div class="col text-right">
                            <div class="row">
                                <base-button
                                size="sm"
                                type="success"
                                @click="handleAccept(num)"
                                >Accept</base-button
                                >
                                <base-button
                                size="sm"
                                type="danger"
                                @click="handleDecline(num)"
                                >Decline</base-button
                                >
                            </div>
                        </div>
                    </div>
                </li>
                </ul>
            </div> -->
        </modal>
        <section class="section section-skew">
            <div class="container">
                   <card shadow class="card-createTask mt--300" no-body>
                        <div>
                            <div>
                                <blockquote class="blockquote">
                                    <!-- <p class="mb-0">Please select your date range:</p > -->
                                </blockquote>
                            </div>
                            <div class="col-lg ">
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
                                        <base-input addon-left-icon="ni ni-calendar-grid-58" @change="valid=true">
                                            <flat-picker slot-scope="{focus, blur}"
                                                        @on-open="focus"
                                                        @on-close="blur"
                                                        :config="{allowInput: true}"
                                                        class="form-control datepicker"
                                                        v-model="dates.end">
                                            </flat-picker>
                                        </base-input>
                                    </div>
                                    <div class="col">
                                        <p class="lead text-white mt-3 mb-3"></p >
                                        <div>
                                            <p class="lead text-white mt-3 mb-3"></p >
                                            <span><base-button type="secondary" rounded size="lg" class="ni ni-send" @click="handlego()"></base-button></span>
                                        </div>
                                    </div>
                                    <div class="col text-right">
                                        <br/>
                                        <base-button
                                        type="secondary"
                                        class="text-primary mb-3"
                                        @click="modals.modal4 = true, countTask()"
                                        icon="ni ni-cloud-download-95"
                                        v-b-popover.hover.top="'Total Tasks Monthly Analysis'"
                                        title="Last Year Report"
                                        >
                                        <span>
                                            History
                                        </span>
                                    </base-button>
                                    </div>
                                        <div>
                                            <br/>
                                            <base-button class="icon icon-shape rounded-circle shadow mb-0" type="secondary">
                                                <i class="ni ni-settings-gear-65"></i>
                                            </base-button>
                                            
                                        </div>
                                    

                                </div>
                                
                                <badge v-if="!valid" type="danger">
                                    <span class="alert-inner--text"><strong>The end date should be after the start date</strong></span>
                                    <i class="ni ni-fat-remove text-default"
                                            size="sm"
                                            @click="valid=true">
                                    </i>
                                </badge>
                                <br/>
                                <br/>
                                <h2 class="mb-5 text-center">
                                        <strong>Progress Report</strong>
                                </h2>
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-md-auto">
                                        <div style="width: 17rem;">
                                            <div class="card card-stats">
                                                <!-- Card body -->
                                                <div class="card-body">  
                                                    <div class="row">
                                                        <div class="col">
                                                            <span class="h1 text-success font-weight-bold mb-0">{{finishTask}}</span>
                                                            <h5 class="card-title text-uppercase text-muted mb-0">Completed Tasks</h5>
                                                        </div>
                                                        <div class="col-auto">
                                                            <div class="icon icon-shape bg-green text-white rounded-circle shadow" size="lg">
                                                                <i class="ni ni-like-2"></i>
                                                            </div>
                                                        </div>
                                                        <div class="mt-3 mb-0 text-sm"> 
                                                            <p v-if="finishTask === 0"></p>
                                                            <p v-else>
                                                                <base-button
                                                                    type="secondary"
                                                                    class="mb-3"
                                                                    @click="modals.modal1 = true"
                                                                    size="sm"
                                                                >   
                                                                    Show the tasks
                                                                </base-button>
                                                            </p>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-auto">
                                        
                                        <div style="width: 17rem;">
                                            <div class="card card-stats" data-placement="left">
                                                <!-- Card body -->
                                                <div class="card-body">  
                                                    <div class="row">
                                                        <div class="col">
                                                            <span class="h1 text-primary font-weight-bold mb-0">{{unfinishTask}}</span>
                                                            <h5 class="card-title text-uppercase text-muted mb-0">Incompleted Tasks</h5>
                                                        </div>
                                                        <div class="col-auto">
                                                            <div class="icon icon-shape bg-blue text-white rounded-circle shadow">
                                                                <i class="ni ni-spaceship"></i>
                                                            </div>
                                                        </div>
                                                        <div class="mt-3 mb-0 text-sm">
                                                            <p v-if="unfinishTask === 0"></p>
                                                            <p v-else>
                                                                <base-button
                                                                    type="secondary"
                                                                    class="mb-3"
                                                                    @click="modals.modal2 = true"
                                                                    size="sm"
                                                                >   
                                                                    Show the tasks
                                                                </base-button>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                <!-- </div> -->
                                <!-- <br/> -->
                                <!-- <div class="row justify-content-center align-items-center"> -->

                                    <div class="col-md-auto">
                                        
                                        <div style="width: 17rem;">
                                            <div class="card card-stats" data-placement="left">
                                                <!-- Card body -->
                                                <div class="card-body">  
                                                    <div class="row">
                                                        <div class="col">
                                                            <span class="h1 text-warning font-weight-bold mb-0">{{DueTask}}</span>
                                                            <h5 class="card-title text-uppercase text-muted mb-0">Overdue Tasks</h5>
                                                        </div>
                                                        <div class="col-auto">
                                                            <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
                                                                <i class="ni ni-time-alarm"></i>
                                                            </div>
                                                        </div>
                                                        <div class="mt-3 mb-0 text-sm">
                                                            <p v-if="DueTask === 0"></p>
                                                            <p v-else>
                                                                <base-button
                                                                    type="secondary"
                                                                    class="mb-3"
                                                                    @click="modals.modal3 = true"
                                                                    size="sm"
                                                                >   
                                                                    Show the tasks
                                                                </base-button>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>

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
import DatePickers from './components/JavascriptComponents/DatePickers.vue';
import Badge from '../components/Badge.vue';
import Modal from "../components/Modal.vue";
import { VBTooltip } from "bootstrap-vue/esm/directives/tooltip/tooltip";
import { VBPopover } from "bootstrap-vue/esm/directives/popover/popover";
import BaseButton from '../components/BaseButton.vue';


var date = new Date();
var currentMonth=date.getMonth();
var nextMonth=++currentMonth;
var nextMonthFirstDay=new Date(date.getFullYear(),nextMonth,1);
var oneDay=1000*60*60*24;
var lastTime = new Date(nextMonthFirstDay-oneDay);
var month = parseInt(lastTime.getMonth()+1);
var day = lastTime.getDate();
if (month<10){
    month = '0'+ month
};
if (day<10){
    day = '0'+ day
};
var time1 = date.getFullYear() + "-" + month + "-" + "01";
var time2 = date.getFullYear() + "-" + month + "-" + day;


export default {
    components:{
        flatPicker,
        DatePickers,
        Badge,
        Modal,
        BaseButton
    },
    directives: {
    BTooltip: VBTooltip,
    BPopover: VBPopover,
    },
    data: () =>({
        finishTask:"0",
        unfinishTask:"0",
        totalTask:"0",
        DueTask:"0",
        percentage:"0",
        Month:{
            Jan: 0,
            Feb: 0,
            Mar: 0,
            Apr: 0,
            May: 0,
            Jun: 0,
            Jul: 0,
            Aug: 0,
            Sep: 0,
            Oct: 0,
            Nov: 0,
            Dec: 0
        },
        
        monthIndex:[
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec'
        ],
        dates: {
            start: time1,
            end: time2
        },
        valid: true,
        CompletedTask:[ 
            {
                description: "",
                completed_timestamp: "",
                name: "",
                type: "",             
            }],
        InCompletedTask:[ 
            {
                description: "",
                due_date: "",
                name: "",
                type: "",             
            }],
        OverduedTask:[ 
            {
                description: "",
                due_date: "",
                name: "",
                type: "",             
            }],
        modals: {
            modal1: false,
            modal2: false,
            modal3: false,
            modal4: false,
    },
    }),
    computed:{
         percent(){
             if((this.finishTask+this.unfinishTask) == 0){
                 return 0;
             }
             else{
                 return (this.finishTask/(this.finishTask+this.unfinishTask))*100;
             }
         }
     },
    mounted (){
        this.report();
    },
    methods: {
        handlego(){
            console.log(this.valid)
            var start_date = new Date(this.dates.start)
            var end_date = new Date(this.dates.end)
            if(end_date < start_date){
                console.log('error!!!!')
                this.valid = false;
            }
            else{
                console.log(this.dates.start, start_date)
                console.log(this.dates.end, end_date)
                this.report()
            }
        },
        report(){
            console.log("report")
            service.get(`/tasks/CountCompletedTask/${store.getters["getUserId"]}/${this.dates.start}/${this.dates.end}`).then(res=>{
                console.log(res.data.data[0]);
                this.finishTask=res.data.data[0].number;
            })
            service.get(`/tasks/CountIncompletedTask/${store.getters["getUserId"]}/${this.dates.start}/${this.dates.end}`).then(res=>{
                console.log(res.data.data[0].number);
                this.unfinishTask=res.data.data[0].number;
            })
            service.get(`/tasks/CountDueTask/${store.getters["getUserId"]}`).then(res=>{
                console.log(res.data.data[0].number);
                console.log(res.data.data);
                this.DueTask=res.data.data[0].number;
            })
            service.get(`/tasks/CompletedTask/${store.getters["getUserId"]}/${this.dates.start}/${this.dates.end}`).then(res => {
                //console.log(res.data.data);
                //console.log(this.route);
                for(let i = 0; i<res.data.data.length; i++){
                    res.data.data[i].completed_timestamp = this.dateTostring(res.data.data[i].completed_timestamp)
                };
                // for(let i = 0; i<res.data.data.length; i++){
                //     var date = new Date(res.data.data[i].due_date)
                //     var month = date.getMonth()+1
                //     this.countMonthlyTask(month);
                // };
                this.CompletedTask = res.data.data;
            });
            service.get(`/tasks/InCompletedTask/${store.getters["getUserId"]}/${this.dates.start}/${this.dates.end}`).then(res => {
                console.log(res.data.data);
                for(let i = 0; i<res.data.data.length; i++){
                    res.data.data[i].due_date = this.dateTostring(res.data.data[i].due_date)
                };
                //console.log(this.route);
                this.InCompletedTask = res.data.data;
            });
            service.get(`/tasks/OverduedTask/${store.getters["getUserId"]}`).then(res => {
                //console.log(res.data.data);
                //console.log(this.route);
                for(let i = 0; i<res.data.data.length; i++){
                    res.data.data[i].due_date = this.dateTostring(res.data.data[i].due_date)
                };
                this.OverduedTask = res.data.data;
                //this.totalTask = this.finishTask + this.unfinishTask + this.DueTask;
            });
        },
        dateTostring(due_date){
            var date = new Date(due_date);
            var month = date.getMonth()+1
            var day = date.getDate();
            if (month<10){
                month = '0'+ month
            };
            if (day<10){
                day = '0'+ day
            };
            var current = date.getFullYear() + "-" + month + "-" + day;
            return current;

        },
        countTask(){
            this.Month = {
                            Jan: 0,
                            Feb: 0,
                            Mar: 0,
                            Apr: 0,
                            May: 0,
                            Jun: 0,
                            Jul: 0,
                            Aug: 0,
                            Sep: 0,
                            Oct: 0,
                            Nov: 0,
                            Dec: 0
                        },
            service.get(`/tasks/TotalTask/${store.getters["getUserId"]}`).then(res => {
                console.log(res.data.data.length);
                if(res.data.data.length == 0){
                    this.totalTask = 1;
                }
                else{
                    this.totalTask = res.data.data.length;
                }
                for(let i = 0; i<res.data.data.length; i++){
                    var date = new Date(res.data.data[i].due_date);
                    var month = date.getMonth()+1
                    if (month<10){
                        month = '0'+ month
                    };
                    //calculate monthly total task
                    if(month == '01'){
                        this.Month.Jan = this.Month.Jan + 1
                    }
                    else if(month == '02'){
                        this.Month.Feb = this.Month.Feb + 1
                    }
                    else if(month == '03'){
                        this.Month.Mar = this.Month.Mar + 1
                    }
                    else if(month == '04'){
                        this.Month.Apr = this.Month.Apr + 1
                    }
                    else if(month == '05'){
                        this.Month.May = this.Month.May + 1
                    }
                    else if(month == '06'){
                        this.Month.Jun = this.Month.Jun + 1
                    }
                    else if(month == '07'){
                        this.Month.Jul = this.Month.Jul + 1
                    }
                    else if(month == '08'){
                        this.Month.Aug = this.Month.Aug + 1
                    }
                    else if(month == '09'){
                        this.Month.Sep = this.Month.Sep + 1
                    }
                    else if(month == '10'){
                        this.Month.Oct = this.Month.Oct + 1
                    }
                    else if(month == '11'){
                        this.Month.Nov = this.Month.Nov + 1
                    }
                    else if(month == '12'){
                        this.Month.Dec = this.Month.Dec + 1
                    }
                };
                 conosle.log(this.Month);
                //this.totalTask = res.data.data.length;
                
            });
        }

    }
}

</script>
<style scoped>
.author-box {
    font-size: 14px;
}
</style>