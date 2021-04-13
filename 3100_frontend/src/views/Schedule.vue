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
              <img
                src="img/brand/test.png"
                style="width: 300px;"
                class="img-fluid"
              />
              <p class="lead text-white mt-4 mb-5"></p>
              <div class="btn-wrapper">
                <base-button
                  tag="a"
                  href="http://localhost:8080/#/list"
                  class="mb-3 mb-sm-0"
                  type="white"
                  icon="ni ni-bullet-list-67"
                >
                  Task List
                </base-button>

                <base-button
                  tag="a"
                  href="http://localhost:8080/#/schedule"
                  class="mb-3 mb-sm-0"
                  type="primary"
                  icon="ni ni-calendar-grid-58"
                >
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
                  <!-- <base-button type="default" class=" mb-3" @click="modals.modal3 = true" icon="ni ni-chat-round">
                                        ADD Subtask
                                    </base-button> -->
                  <modal
                    :show.sync="modals.modal3"
                    :clickoutside="false"
                    body-classes="p-0"
                    modal-classes="modal-dialog-centered modal-sm"
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
                          <strong>NEW SUBTASK</strong>
                        </div>
                      </template>
                      <template>
                        <form role="form">
                          <base-input
                            alternative
                            class="mb-3"
                            v-model="tname"
                            placeholder="Subtask Name"
                            addon-left-icon="ni ni-map-big"
                          >
                          </base-input>
                          <div class="row">
                            <div class="col">
                              <badge type="primary">start date</badge>
                              <base-input
                                addon-left-icon="ni ni-calendar-grid-58"
                              >
                                <flat-picker
                                  slot-scope="{ focus, blur }"
                                  @on-open="focus"
                                  @on-close="blur"
                                  :config="{ allowInput: true }"
                                  class="form-control datepicker"
                                  v-model="dates.start"
                                >
                                </flat-picker>
                              </base-input>
                            </div>
                            <div class="col">
                              <badge type="primary">end date</badge>
                              <base-input
                                addon-left-icon="ni ni-calendar-grid-58"
                              >
                                <flat-picker
                                  slot-scope="{ focus, blur }"
                                  @on-open="focus"
                                  @on-close="blur"
                                  :config="{ allowInput: true }"
                                  class="form-control datepicker"
                                  v-model="dates.end"
                                >
                                </flat-picker>
                              </base-input>
                            </div>
                          </div>
                          <!-- <br/> -->
                          <badge type="primary">Details</badge>
                          <textarea
                            v-model="description"
                            class="Description form-control form-control-alternative mb-3"
                            placeholder="e.g Kill me Please!"
                          >
                          </textarea>
                          <base-alert v-if="!validsubmit" type="warning">
                            <!-- <span class="alert-inner--icon"><i class="ni ni-bulb-61"></i></span> -->
                            <span class="alert-inner--text"
                              >Please input the
                              <strong>SUBTASK NAME!</strong></span
                            >
                          </base-alert>
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
                            <div class="text-right col">
                              <base-button
                                type="primary"
                                outline
                                class="my-4"
                                @click="handleSubmit()"
                                >ADD</base-button
                              >
                            </div>
                          </div>
                        </form>
                      </template>
                    </card>
                  </modal>
                  <modal
                    :show.sync="modals.modal4"
                    body-classes="p-2"
                    modal-classes="modal-dialog-centered"
                  >
                    <h4 class="modal-title text-center">
                      Completed Task?
                    </h4>
                    <div class="row">
                      <div class="col-sm">
                        <span></span>
                      </div>
                      <div clas="col-md-auto">
                        <p class="lead text-white mt-3 mb-3"></p>
                        <base-button
                          size="sm"
                          @click="completedTask()"
                          type="primary"
                        >
                          Yes
                        </base-button>
                      </div>
                      <div class="col-md-auto">
                        <p class="lead text-white mt-3 mb-3"></p>
                        <base-button
                          size="sm"
                          type="default"
                          @click="modals.modal4 = false"
                          >No
                        </base-button>
                      </div>
                      <div class="col-sm">
                        <span></span>
                      </div>
                    </div>
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
                  <base-button
                    type="secondary"
                    class="text-default mb-3 btn-tooltip"
                    @click="modals.modal2 = true"
                    icon="ni ni-bell-55"
                    v-b-popover.hover.top="'Your friends are asking you!'"
                    title="Check Your Request"
                  >
                    <span>
                      Requests
                      <badge v-if="tasks_name.length === 0" type="success">
                        {{ tasks_name.length }}
                      </badge>
                      <badge v-else type="danger">
                        {{ tasks_name.length }}
                      </badge>
                    </span>
                  </base-button>
                  <modal
                    :show.sync="modals.modal2"
                    :clickoutside="true"
                    gradient="info"
                    modal-classes="modal-danger modal-dialog-centered"
                  >
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-notification"
                    >
                      Forming Group With Your Friends!
                    </h6>
                    <div class="py-3 text-center">
                      <i class="ni ni-bell-55 ni-3x"></i>
                      <strong
                        ><h4 class="heading mt-4">
                          There are {{ tasks_name.length }} requests!
                        </h4></strong
                      >
                    </div>
                    <div>
                      <ul class="list-unstyled">
                        <li v-for="(task, num) in tasks_name" :key="num">
                          <div class="row">
                            <div class="col-7 text-left">
                              <strong>
                                <!-- <i class="ni ni-planet text-primary"></i>  -->
                                {{ task["task"] }}
                                <badge type="primary">
                                  {{ task["type"] }}
                                </badge>
                              </strong>
                              <br />
                              <br />
                            </div>
                            <div class="col text-right">
                              <!-- <div class="row"> -->
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
                              <!-- </div> -->
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </modal>
                </div>
              </div>
            </div>
          </div>

          <div class="todo-wrap">
            <div class="caption">
              <span class="item" @click="handleToggleMonth('prev')">
                <i class="prev"></i>
              </span>
              <time class="time">{{ curYearMonth }}</time>
              <span class="item" @click="handleToggleMonth('next')">
                <i class="next"></i>
              </span>
            </div>
            <div class="container">
              <ul class="week list-unstyled">
                <li class="item" v-for="(item, index) in _week" :key="index">
                  {{ item }}
                </li>
              </ul>
              <ul class="data clear class list-unstyled">
                <li
                  class="item invalid"
                  v-for="(item, index) in startDay"
                  :key="index - startDay"
                >
                  <span class="lunar" v-if="isLunar">{{
                    handleLunar(
                      prevYear,
                      prevMonth,
                      prevMonthDays + 1 + index - startDay
                    )
                  }}</span>
                  <span class="text">{{
                    prevMonthDays + 1 + index - startDay
                  }}</span>
                </li>
                <li
                  class="item"
                  v-for="(item, index) in curMonthDays"
                  :key="index"
                >
                  <span class="lunar" v-if="isLunar">{{
                    handleLunar(curYear, curMonth, item.date)
                  }}</span>
                  <span class="text" :class="{ active: curDay == index + 1 }">{{
                    item.date
                  }}</span>
                  <template v-for="(_item, _index) in item.todo">
                    <p
                      class="todo"
                      :class="{
                        on: index == isItem.index && isIndex == _index,
                      }"
                      :key="_index"
                      @click="
                        handleToggleTodo(
                          item.todo[_index],
                          index,
                          _index,
                          $event
                        ),
                          getSubtask(_item.tid),
                          (checkboxes = [])
                      "
                      :title="_item.title"
                      v-if="_index < 2"
                    >
                      <strong v-if="_item.type === 'project'">{{
                        _item.title
                      }}</strong>
                      <strong v-else>{{
                        _item.title + " " + _item.type
                      }}</strong>
                    </p>
                  </template>
                  <div
                    class="todo-item"
                    :class="{ left: isShowLeft, top: isShowTop }"
                    v-if="index == isItem.index && isIndex == isItem._index"
                    :style="posTop"
                  >
                    <div class="author" v-if="isItem.desc.caption === ''">
                      <strong>{{ isItem.desc.caption }}</strong>
                    </div>
                    <div class="author" v-else>
                      <strong>{{ "Description：" }}</strong>
                      {{ isItem.desc.caption }}
                    </div>
                    <div class="author">
                      <strong>{{ "Due_date：" }}</strong> {{ isItem.desc.time }}
                    </div>
                    <p></p>
                    <div class="author">
                      <div class="row">
                        <div class="col">
                          <ul class="list-unstyled">
                            <li v-for="(item, index) in subtask" :key="index">
                              <base-checkbox
                                v-model="checkboxes[index].unchecked"
                                v-if="item.completed_timestamp === null"
                                @click.native="
                                  completeSubtask(index), (task_id = isItem.tid)
                                "
                              >
                                <div v-if="item.description === ''">
                                  {{ item.name }}
                                </div>
                                <div
                                  v-else
                                  v-b-popover.hover.right="item.description"
                                  title="Descirption"
                                >
                                  {{ item.name }}
                                </div>
                              </base-checkbox>
                              <base-checkbox
                                v-model="checkboxes[index].unchecked"
                                v-else
                                disabled
                              >
                                <div v-if="item.description === ''">
                                  {{ item.name }}
                                </div>
                                <div
                                  v-else
                                  v-b-popover.hover.right="item.description"
                                  title="Descirption"
                                >
                                  {{ item.name }}
                                </div>
                              </base-checkbox>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div v-if="progress >= 0" class="bar">
                      <base-progress
                        style="margin:0px"
                        v-if="progress <= 40"
                        type="danger"
                        :value="progress"
                        label="SubTask progress"
                      ></base-progress>
                      <base-progress
                        style="margin:0px"
                        v-else-if="progress >= 70"
                        type="success"
                        :value="progress"
                        label="SubTask progress"
                      ></base-progress>
                      <base-progress
                        style="margin:0px"
                        v-else
                        type="primary"
                        :value="progress"
                        label="SubTask progress"
                      ></base-progress>
                    </div>
                    <div class="link-box">
                      <base-button
                        type="primary"
                        class="mb-3"
                        @click="
                          (modals.modal3 = true),
                            (task_id = isItem.tid),
                            (dates.end = isItem.desc.time)
                        "
                        size="sm"
                      >
                        Add Subtask
                      </base-button>
                      <base-button
                        type="info"
                        class="mb-3"
                        @click="(modals.modal4 = true), (task_id = isItem.tid)"
                        size="sm"
                      >
                        Complete Task
                      </base-button>
                    </div>
                  </div>
                </li>
                <li
                  class="item invalid"
                  v-for="(item, index) in endDay"
                  :key="curMonthDays + index + 1"
                >
                  <span class="lunar" v-if="isLunar">{{
                    handleLunar(nextYear, nextMonth, item)
                  }}</span>
                  <span class="text">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </card>
      </div>
    </section>
    <!-- <Fullcalendar :plugins="calendarPlugin" /> -->
  </div>
</template>
<script>
//  require('@fullcalendar/core/main.min.css')
//  require('@fullcalendar/daygrid/main.min.css')
//  require('@fullcalendar/timegrid/main.min.css')

import { service } from "@/plugins/request_service.js";
import { uuid } from "vue-uuid";
import store from "@/store";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import TabsSection from "./components/JavascriptComponents/TabsSection";
import calendar from "@/components/todo/js/calendar";
import Modal from "../components/Modal.vue";
import Badge from "../components/Badge.vue";
import tooltip from "./components/JavascriptComponents/Tooltips";
import { VBTooltip } from "bootstrap-vue/esm/directives/tooltip/tooltip";
import { VBPopover } from "bootstrap-vue/esm/directives/popover/popover";
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

// import Fullcalendar from '@fullcalendar/vue'
// import DayGridPlugin from '@fullcalendar/vue'
// import TimeGridPlugin from '@fullcalendar/vue'
// import InteractionPlugin from '@fullcalendar/vue'
// import ListPlugin from '@fullcalendar/vue'
var now = new Date();
var month = now.getMonth() + 1;
var day = now.getDate();
if (month < 10) {
  month = "0" + month;
}
if (day < 10) {
  day = "0" + day;
}
var current = now.getFullYear() + "-" + month + "-" + day;

export default {
  components: {
    TabPane,
    Tabs,
    TabsSection,
    Modal,
    Badge,
    flatPicker,
    tooltip,
  },
  directives: {
    BTooltip: VBTooltip,
    BPopover: VBPopover,
  },
  props: {
    isWest: {
      // 是否启用西方模式
      type: Boolean,
      default: true,
    },
    isLunar: {
      // 是否开启农历
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    getTask: [],
    progress: 70,
    checkboxes: [],
    temp: "original",
    task: "A",
    user_id: store.getters["getUserId"],
    task_id: "",
    subtask_id: "",
    tname: "",
    dates: {
      start: current,
      end: "2021-04-30",
    },
    description: "",
    validsubmit: true,
    prevMonthDays: 0,
    curMonthDays: [],
    nextMonthDays: 0,
    curYearMonth: "",
    startDay: 0,
    endDay: 0,
    curDay: 0,
    posTop: null,
    isItem: {},
    isIndex: -1,
    isShowLeft: false,
    isShowTop: false,
    curYear: 0,
    curMonth: 0,
    prevYear: 0,
    prevMonth: 0,
    nextYear: 0,
    nextMonth: 0,
    modals: {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
    },
    tasks_name: [],
    subtask: [],
    // calendarPlugins: [
    //     DayGridPlugin,
    //     TimeGridPlugin,
    //     InteractionPlugin,
    //    ListPlugin
    // ]
  }),
  computed: {
    _week() {
      let arr = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      if (this.isWest) {
        arr.unshift(arr.pop());
      }
      return arr;
    },
    // progress(){
    //   for(let i = 0; i < this.checkboxes.length; i++){
    //     this.checkboxes[i].unchecked
    //   }
    // }
  },

  mounted() {
    this.fetchTask();
    let date = new Date();
    this.curDay = date.getDate();
    this.handleFormatDate(date.getFullYear(), date.getMonth() + 1);
    this.noti();
  },
  methods: {
    fetchTask() {
      this.getTask.push(store.getters["getTask"]);
      console.log("fetchTask", this.getTask);
    },

    completedTask() {
      console.log("completed task");
      service.get(`/tasks/completeTask/${this.task_id}`).then((res) => {
        if (res.data.success) {
          console.log("Update to task database success!");
          for (let i = 0; i < this.subtask.length; i++) {
            this.completeSubtask(i);
          }
          service
            .get(`/tasks/getTasks/${store.getters["getUserId"]}`)
            .then((res1) => {
              store.commit("setTask", res1.data.data);
              console.log("fetch task");
            });
          this.modals.modal4 = false;
          this.$router.replace("/empty");
        } else {
          console.log("Update to task database failed!");
        }
      });
    },
    completeSubtask(index) {
      console.log("completed subtask");
      service
        .get(`/tasks/completeSubTask/${this.subtask[index].subtask_id}`)
        .then((res) => {
          if (res.data.success) {
            console.log("Update to task database success!");
            this.getSubtask(this.task_id);
          } else {
            console.log("Update to task database failed!");
          }
        });
    },
    handleSubmit() {
      console.log(this.task_id);
      this.subtask_id = uuid.v1();
      if (this.tname == "") {
        this.validsubmit = false;
      } else {
        service
          .post("/tasks/createSubtask", {
            subtask_id: this.subtask_id,
            task_id: this.task_id,
            name: this.tname,
            start_date: this.dates.start,
            end_date: this.dates.end,
            description: this.description,
          })
          .then((res) => {
            if (res.data.success) {
              console.log("Update to task database success!");
              service
                .get(
                  `/tasks/updategroup/${this.task_id}/${this.user_id}/${this.subtask_id}`
                )
                .then((res) => {
                  console.log(res.data);
                  service
                    .get(`/tasks/getTasks/${store.getters["getUserId"]}`)
                    .then((res1) => {
                      store.commit("setTask", res1.data.data);
                      console.log("fetch task");
                    });
                  this.getSubtask(this.task_id);
                })
                .catch((err) => {
                  console.log("err:", err);
                  this.validsubmit = false;
                });
            } else {
              console.log("Update to subtask database failed!");
            }
          })
          .catch((err) => {
            console.log("err:", err);
            this.validsubmit = false;
          });
        this.modals.modal3 = false;
        this.tname = "";
        this.description = "";
      }
    },
    handleLunar(year, month, date) {
      let { IMonthCn, IDayCn } = calendar.solar2lunar(year, month, date);
      return IMonthCn + IDayCn;
    },
    handleToggleTodo(item, index, _index, ev) {
      let parent = ev.target.parentNode.getBoundingClientRect();
      let top = ev.target.getBoundingClientRect().top - parent.top + "px";
      let right = parent.right + 330;
      let bottom = ev.target.getBoundingClientRect().top + 213;
      let todoEl = document.querySelector(".container").getBoundingClientRect();
      // 判断显示层应该是在左边还是右边
      this.isShowLeft = right > todoEl.right;
      // 判断显示层应该是在下边还是上边
      this.isShowTop = bottom > todoEl.bottom;
      if (this.isShowTop) {
        bottom =
          parent.bottom - ev.target.getBoundingClientRect().bottom + "px";
        this.posTop = { bottom };
      } else {
        this.posTop = { top };
      }
      if (this.isIndex === _index && this.isItem.index === index) {
        this.isIndex = -1;
      } else {
        this.isIndex = _index;
      }
      this.isItem = { ...item, index, _index };
    },
    getSubtask(tid) {
      //var tid = '9b400580-9ba7-11eb-afdf-7313663097dc';
      var subtask = [];
      var finished = 0;
      service.get(`/tasks/getSubTasks/${tid}`).then((res) => {
        console.log(res.data.data);
        subtask.push(res.data.data);
        console.log(subtask[0]);
        this.subtask = subtask[0];
        for (let i = 0; i < subtask[0].length; i++) {
          if (subtask[0][i].completed_timestamp == null) {
            this.checkboxes.push({ unchecked: false });
          } else {
            this.checkboxes.push({ unchecked: true });
            finished = finished + 1;
          }
        }
        if (subtask[0].length == 0) {
          this.progress = 0;
        } else {
          this.progress = Math.round((finished / subtask[0].length) * 100);
        }
        console.log(this.progress);
        return subtask[0];
      });
    },

    //show tasks name and info
    getCurMonthDaysTask(year, month, day) {
      var tempObj;
      var obj = [];
      this.getTask.forEach((task) => {
        // console.log("getCurMonthDaysTask")
        for (let i = 0; i < task.length; i++) {
          // console.log(task[i].name);
          var date = new Date(task[i].due_date);
          var tmonth = date.getMonth() + 1;
          if (tmonth < 10) {
            tmonth = "0" + tmonth;
          }
          var tday = date.getDate();
          if (tday < 10) {
            tday = "0" + tday;
          }
          var tdate = date.getFullYear() + "-" + tmonth + "-" + tday;
          if (date.getFullYear() == year && tmonth == month && tday == day) {
            //console.log(task[i].task_id);
            let subtasks = this.getSubtask(task[i].task_id);
            //console.log(subtasks);
            tempObj = {
              title: task[i].name,
              type: task[i].type,
              tid: task[i].task_id,
              desc: {
                caption: task[i].description,
                time: tdate,
                finish_date: task[i].completed_timestamp,
                subtask: subtasks,
                link: "http://localhost:8080/#/create_subtask",
              },
            };
            obj.push(tempObj);
          }
        }
      });
      return obj;
    },

    handleFormatDate(year, month) {
      if (month > 12) {
        ++year;
        month = 1;
      } else if (month < 1) {
        --year;
        month = 12;
      }
      this.curYear = year;
      this.curMonth = month;

      let prevDate = new Date(year, month);
      this.prevYear = prevDate.getFullYear();
      this.prevMonth = prevDate.getMonth() - 1;

      if (this.prevMonth === 0) {
        --this.prevYear;
        this.prevMonth = 12;
      } else if (this.prevMonth === -1) {
        --this.prevYear;
        this.prevMonth = 11;
      }

      let nextDate = new Date(year, month);
      this.nextYear = nextDate.getFullYear();
      this.nextMonth = nextDate.getMonth() + 1;

      // 输出年月
      this.curYearMonth = `${String(month).padStart(2, "0")}/${year}`;
      // 获取当前月总天数
      let allDays = this.handleMonthDays(year, month);
      this.curMonthDays = [];

      for (let i = 0; i < allDays; i++) {
        let item = { date: i + 1 };
        //show the tasks
        let obj = this.getCurMonthDaysTask(year, month, i + 1);
        if (obj.length == 1) {
          item.todo = [obj[0]];
        }
        if (obj.length > 1) {
          item.todo = [];
          for (let j = 0; j < obj.length; j++) {
            item.todo.push(obj[j]);
          }
          console.log(item.todo);
        }
        this.curMonthDays.push(item);
      }

      // 获取上月总天数
      this.prevMonthDays = this.handleMonthDays(year, month - 1);
      // 获取下月总天数
      this.nextMonthDays = this.handleMonthDays(year, month + 1);
      this.handleStartAndEndWeek(year, month, this.curMonthDays.length);
    },

    handleMonthDays(year, month) {
      return new Date(year, month, 0).getDate();
    },
    handleStartAndEndWeek(year, month, monthDays) {
      this.startDay = new Date(year, month - 1, 0).getDay();
      this.endDay =
        new Date(year, month, 0).getDay() &&
        7 - new Date(year, month, 0).getDay();
      if (this.isWest) {
        this.endDay = 7 - (new Date(year, month, 0).getDay() + 1);
        if (++this.startDay === 7) {
          this.startDay = 0;
        }
      }

      if (
        Math.ceil(monthDays / 7) < 6 &&
        Math.ceil((monthDays + this.startDay + this.endDay + 7) / 7) < 7
      ) {
        if (this.startDay === 0) {
          this.startDay += 7;
        } else {
          this.endDay += 7;
        }
      }
    },
    handleToggleMonth(str = "next") {
      this.isIndex = -1;
      let [month, year] = this.curYearMonth.match(/\d+/g);
      str === "next" ? ++month : --month;
      this.handleFormatDate(year, month);
    },

    //notification
    noti() {
      console.log("requests");
      service
        .get(`/users/notification/${store.getters["getUserId"]}`)
        .then((res) => {
          // console.log(res.data);
          this.tasks_name = res.data.data;
        });
    },
    handleAccept(i) {
      console.log("handleAccept");
      console.log(this.tasks_name[i]["tid"]);
      service.get(`/users/accept/${this.tasks_name[i]["tid"]}`).then((res) => {
        console.log(res.data);
      });
      this.tasks_name.splice(i, 1);
    },
    handleDecline(i) {
      console.log("handleDecline");
      console.log(this.tasks_name[i]["tid"]);
      service.get(`/users/decline/${this.tasks_name[i]["tid"]}`).then((res) => {
        console.log(res.data);
      });
      this.tasks_name.splice(i, 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.todo-wrap {
  font-size: 16px;
  min-width: 768px;
  max-width: 1024px;
  margin: 0 auto;
  .caption {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    color: #fff;
    background: linear-gradient(
      45deg,
      #85c4ff 0%,
      #1e90ff 17%,
      #7b68ee 46%,
      #7b68ee 46%,
      #7b68ee 56%,
      #8a2be2 82%,
      #ba55d3 100%
    );
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border: 1px solid #fff;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .prev,
    .next {
      position: relative;
      width: 12px;
      height: 12px;
      border-top: 1px solid #fff;
      border-left: 1px solid #fff;
    }
    .prev {
      right: -3px;
      transform: rotate(-45deg);
    }
    .next {
      right: 3px;
      transform: rotate(135deg);
    }
    .time {
      padding: 0 25px;
    }
  }
  .container {
    font-size: 14px;
    .item {
      flex: 0 0 calc(100% / 7);
      width: calc(100% / 7);
      color: #6f6f6f;
      box-sizing: border-box;
    }
    .week {
      display: flex;
      align-items: center;
      border-left: 1px solid #e8ecef;
      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        color: #333;
        border-right: 1px solid #fff;
        background: #e6e6fa;
        &:last-child {
          border-right: 0 none;
        }
      }
    }
    .data {
      border-left: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      .item {
        position: relative;
        float: left;
        border-top: 1px solid #e5e5e5;
        border-right: 1px solid #e5e5e5;
        &:before {
          content: "";
          float: left;
          padding-top: 100%;
        }
        &:after {
          content: "";
          display: block;
          clear: both;
        }
        &.invalid {
          color: #ccc;
        }
        .lunar {
          position: absolute;
          left: 10px;
          top: 10px;
          font-size: 12px;
        }
        .text {
          position: absolute;
          right: 10px;
          top: 10px;
        }
        .todo {
          line-height: 19px;
          margin: 6px 6px 0;
          padding: 5px 10px;
          font-size: 12px;
          color: rgb(0, 0, 0);
          cursor: pointer;
          border-radius: 2px;
          background: #f0f8ff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &:nth-of-type(1) {
            margin-top: 35px;
          }
          &.on {
            color: #eff7f4;
            background: #67a2f0;
          }
        }
        .finished {
          line-height: 19px;
          margin: 6px 6px 0;
          padding: 5px 10px;
          font-size: 12px;
          color: #666;
          cursor: pointer;
          border-radius: 2px;
          background: #8cf3ba;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &:nth-of-type(1) {
            margin-top: 35px;
          }
          &.on {
            color: #eff7f4;
            background: #67f072;
          }
        }
        .todo-item {
          position: absolute;
          left: 100%;
          top: 0;
          z-index: 9;
          width: 318px;
          height: 310px;
          padding: 22px 30px 26px;
          border: 1px solid #3c85da;
          transform: translateX(15px);
          background: #fff;
          box-shadow: 0 2px 10px #ccc;
          box-sizing: border-box;
          &:before {
            content: "";
            position: absolute;
            left: -8px;
            top: 4px;
            width: 14px;
            height: 14px;
            border-left: 1px solid #3c85da;
            border-top: 1px solid #3c85da;
            transform: rotate(-45deg);
            background: #fff;
          }
          &.left {
            left: initial;
            right: 100%;
            transform: translateX(-15px);
            &:before {
              left: initial;
              right: -8px;
              transform: rotate(135deg);
            }
          }
          &.top {
            top: initial;
            &:before {
              top: initial;
              bottom: 4px;
            }
          }
          .title {
            font-size: 16px;
            color: #333;
          }
          .time {
            margin-top: 12px;
            font-size: 12px;
            color: #666;
          }
          .author-box {
            line-height: 24px;
            margin-top: 17px;
            font-size: 14px;
            color: #666;
          }
          .link-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 25px;
            padding-top: 25px;
            //border-top: 1px dashed #bababa;
            .link {
              padding: 6px 16px;
              font-size: 16px;
              color: #fff;
              border-radius: 2px;
              background: #17b68c;
            }
            .view {
              font-size: 14px;
              color: #666;
            }
            .strong {
              font-weight: bold;
              color: #17b68c;
            }
          }
        }
      }
    }
  }
}
</style>
