<script src="assets/vendor/list.js/dist/list.min.js"></script>
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
                  type="primary"
                  icon="ni ni-bullet-list-67"
                >
                  Task List
                </base-button>
                <base-button
                  tag="a"
                  href="http://localhost:8080/#/schedule"
                  class="mb-3 mb-sm-0"
                  type="white"
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
                  <modal
                    :show.sync="modals.modal3"
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
                                  (modals.modal3 = false),
                                    (validsubmit = true),
                                    (modals.modal1 = true)
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
                    class="text-default mb-3"
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
                      <div class="col-lg pt-lg-3">
                        <div class="row">
                          <div class="col text-right">
                            <base-button
                              type="secondary"
                              class="text-default mb-3"
                              @click="modals.modal2 = true"
                              icon="ni ni-bell-55"
                              v-b-popover.hover.top="
                                'Your friends are asking you!'
                              "
                              title="Check Your Request"
                            >
                              <span>
                                Requests
                                <badge
                                  v-if="tasks_name.length === 0"
                                  type="success"
                                >
                                  {{ tasks_name.length }}
                                </badge>
                                <badge v-else type="danger">
                                  {{ tasks_name.length }}
                                </badge>
                              </span>
                            </base-button>
                            <modal
                              :show.sync="modals.modal2"
                              gradient="info"
                              :clickoutside="true"
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
                                  <li
                                    v-for="(task, num) in tasks_name"
                                    :key="num"
                                  >
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
                    </div>
                  </modal>
                </div>
              </div>

              <!--<h4 class="font-weight-light">-->
              <div v-if="task.length == 0">
                <h1 class="font-weight-light text-center">
                  <strong>Start to kill your deadline</strong>
                  <br />by create a new task!
                </h1>
              </div>
              <div v-else>
                <!-- <h1 class="font-weight-light text-center">
                  <strong>Task List</strong>
                </h1> -->

                <div class="table-responsive">
                  <div>
                    <table class="table align-items-center">
                      <thead class="thead-light text-center">
                        <tr>
                          <th scope="col-sm-8" data-sort="task.name">Task</th>
                          <th
                            scope="col-sm-2"
                            class="sort"
                            data-sort="task.due_date"
                          >
                            Deadline
                          </th>
                          <th
                            scope="col-sm-2"
                            class="sort"
                            data-sort="completion"
                          >
                            Completion
                          </th>
                        </tr>
                      </thead>

                      <tbody class="list text-center">
                        <tr v-for="item in task" :key="item.id">
                          <!-- <div class="list-group">-->

                          <th>
                            <span> {{ item.name }} </span>
                            <br />
                            <br />
                            <div class="row">
                              <div class="col">
                                <span></span>
                              </div>
                              <div class="col">
                                <base-button
                                  block
                                  outline
                                  
                                  type="primary"
                                  class="text-center"
                                  @click="
                                    (modals.modal1 = true),
                                      (clicked = item),
                                      getSubtask(clicked.task_id)
                                  "
                                  size="sm"
                                  
                                >
                                  Task info
                                </base-button>
                              </div>
                              <div class="col">
                                <span></span>
                              </div>
                            </div>

                            <div class="col-sm-4">
                              <!-- <div class="row"> -->
                              <!-- <div class="container"> -->
                              <modal :show.sync="modals.modal1">
                                <h4
                                  slot="header"
                                  class="sm-3"
                                  id="modal-title-default"
                                >
                                  Task info
                                </h4>

                                <p>
                                  {{ clicked.key }}Name: {{ clicked.name }}
                                  <br />
                                  Type: {{ clicked.type }} <br />
                                  Deadline: {{ clicked.due_date }} <br /><br />
                                  Description: <br />
                                  {{ clicked.description }}
                                </p>

                                <div
                                  v-for="(item, index) in subtask"
                                  :key="index"
                                >
                                  <base-checkbox
                                    v-model="checkboxes[index].unchecked"
                                    v-if="item.completed_timestamp === null"
                                    @click.native="completeSubtask(index)"
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
                                </div>
                                <div class="progress-wrapper">
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
                                </div>

                                <template slot="footer">
                                  <div class="col-sm-2">
                                    <span>
                                      <base-button
                                        type="info"
                                        class="sm-3"
                                        @click="
                                          (modals.modal1 = false),
                                            (modals.modal3 = true)
                                        "
                                        size="sm-1"
                                      >
                                        Add Subtask
                                      </base-button>
                                    </span>
                                  </div>

                                  <base-button
                                    type="link"
                                    class="ml-auto"
                                    @click="modals.modal1 = false"
                                    >Close
                                  </base-button>
                                </template>
                              </modal>
                              <!-- </div> -->
                            </div>

                            <!-- </div>-->
                          </th>
                          <td class="deadline text-center">
                            <br />{{
                              new Date(item.due_date).toLocaleDateString()
                            }}
                          </td>

                          <!--<hr>-->
                          <td class="completion text-center">
                            <br />
                            <div v-if="item.completed_timestamp">Completed</div>

                            <div v-else>
                              <base-button
                                type="info"
                                class="mb-3"
                                @click="
                                  (modals.modal4 = true), (completeTask = item)
                                "
                                size="sm"
                              >
                                Complete Task
                              </base-button>
                              <modal :show.sync="modals.modal4">
                                <p class="modal-title">
                                  Completed Task?
                                </p>
                                <base-button
                                  @click="completedTask()"
                                  type="primary"
                                  class="ml-auto"
                                >
                                  Yes
                                </base-button>
                                <base-button
                                  type="link"
                                  class="ml-auto"
                                  @click="modals.modal4 = false"
                                  >Close
                                </base-button>
                              </modal>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!--</h4>-->
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import { service } from "@/plugins/request_service.js";
import { uuid } from "vue-uuid";
import store from "@/store";
import Modal from "../components/Modal.vue";
import Tabs from "../components/Tabs/Tabs";
import TabPane from "../components/Tabs/TabPane";
import PillsLayout from "../components/Tabs/PillsLayout";
import TabsLayout from "../components/Tabs/TabsLayout";
import Badge from "../components/Badge.vue";
import tooltip from "./components/JavascriptComponents/Tooltips";
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
    tooltip,
  },
  directives: {
    BTooltip: VBTooltip,
    BPopover: VBPopover,
  },

  data: () => ({
    progress: 70,
    checkboxes: [],
    subtask: [],
    completeTask: "",
    clicked: "",
    user_id: store.getters["getUserId"],
    task_id: store.getters["getTaskId"],
    subtask_id: "",
    tname: "",
    dates: {
      start: "2021-04-01",
      end: "2021-04-30",
    },
    description: "",
    validsubmit: true,
    task: [
      {
        key: "",
        description: "",
        due_date: "",
        name: "",
        type: "",
      },
    ],
    modals: {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
    },
    tasks_name: [],
  }),
  mounted() {
    //this.demo();
    this.fetchTask();
    this.noti();
  },
  methods: {
    getSubtask(tid) {
      //var tid = '9b400580-9ba7-11eb-afdf-7313663097dc';
      var subtask = [];
      var finished = 0;
      console.log("gesubtask", tid);
      service.get(`/tasks/getSubTasks/${tid}`).then((res) => {
        console.log("subtask", res.data.data);
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
        console.log("return", subtask[0]);
        return subtask[0];
      });
    },
    completeSubtask(index) {
      console.log("completed subtask");
      service
        .get(`/tasks/completeSubTask/${this.subtask[index].subtask_id}`)
        .then((res) => {
          if (res.data.success) {
            console.log("Update to task database success!");
            this.getSubtask(this.clicked.task_id);
          } else {
            console.log("Update to task database failed!");
          }
        });
    },
    completedTask() {
      console.log("completed");
      console.log(this.completeTask.name);
      service
        .get(`/tasks/completeTask/${this.completeTask.task_id}`)
        .then((res) => {
          if (res.data.success) {
            console.log("Update to task database success!");
            service
              .get(`/tasks/getTasks/${store.getters["getUserId"]}`)
              .then((res1) => {
                store.commit("setTask", res1.data.data);
                console.log("fetch task");
              });
             this.modals.modal4 = false;
              this.$router.replace("/empty2");
          } else {
            console.log("Update to task database failed!");
          }
        });
    },
    handleSubmit() {
      console.log("clicked");

      this.subtask_id = uuid.v1();
      if (this.tname == "") {
        this.validsubmit = false;
      } else {
        service
          .post("/tasks/createSubtask", {
            subtask_id: this.subtask_id,
            task_id: this.clicked.task_id,
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
                  `/tasks/updategroup/${this.clicked.task_id}/${this.user_id}/${this.subtask_id}`
                )
                .then((res) => {
                  console.log(res.data);
                })
                .catch((err) => {
                  console.log("err:", err);
                  this.validsubmit = false;
                });
              service.get(`/tasks/getTasks/${store.getters["getUserId"]}`)
              .then((res1) => {
                store.commit("setTask", res1.data.data);
                console.log("fetch task");
              });
              this.modals.modal4 = false;
              this.$router.replace("/empty2");
            } else {
              console.log("Update to subtask database failed!");
            }
          })
          .catch((err) => {
            console.log("err:", err);
            this.validsubmit = false;
          });
      }
    },
    Addsubtask(task_id) {
      store.commit("setTaskId", task_id);
      this.$router.push("/create_subtask");
    },
    fetchTask() {
      service
        .get(`/tasks/getTasks/${store.getters["getUserId"]}`)
        .then((res) => {
          //console.log(res.data.data.length );
          // console.log(res.data.data[0].task_id);
          // console.log(this.route);

          this.task = res.data.data;
        });
    },
    noti() {
      console.log("requests");
      service
        .get(`/users/notification/${store.getters["getUserId"]}`)
        .then((res) => {
          console.log(res.data);
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
<style></style>
