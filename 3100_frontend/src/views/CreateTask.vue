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
                        <p class="btn btn-link text-default"> Task Name </p >
                        <base-input 
                            alternative
                            class="mb-3" 
                            v-model="tname" 
                            placeholder="e.g 3100_project">
                        </base-input>
                        <div>
                            <!-- Radio buttons -->
                            <div class="mb-3">
                                <p class="btn btn-link text-default">Type</p >
                            </div>                        
                            <base-radio name="radio0" class="mb-3" v-model="radio.radio1">
                                Assignment
                            </base-radio>
                            <base-radio name="radio1" class="mb-3" v-model="radio.radio1">
                               Project
                            </base-radio>
                            <base-radio name="radio2" class="mb-3" v-model="radio.radio1">
                                Midterm-Exam
                            </base-radio>
                            <base-radio name="radio3" class="mb-3" v-model="radio.radio1">
                               Final-Exam
                            </base-radio>
                        </div>
                        <p class="btn btn-link text-default"> Due Date </p >
                        <base-input alternative class="DueDate col-" v-model="DueDate" placeholder="e.g 20210319"></base-input>
                        <!-- <date-pickers></date-pickers> -->
                        <p class="btn btn-link text-default"> Partner</p >
                        <base-input alternative class="Partner col-" v-model="partnerEmail" placeholder="e.g yourfriend@mail.com"></base-input>
                        <p class="btn btn-link text-default"> Description </p >
                        <textarea class=" Description form-control form-control-alternative" placeholder="e.g Kill me Please!"></textarea>
                    </div>
                    <div class= "col-lg-12 pt-lg text-center">
                        <base-button class="btn-1" outline type="primary" @click="handleSubmit()">Submit</base-button>
                    </div>
                </card>
            </div>
        </section>
        
        
        <ul>
            <todo-item 
            v-for="(item, index) of list"
            v-bind:content="item"
            :key="index"
            :index="index"
            @delete="handleDelete"
            ></todo-item>
        </ul>
    </div>
</template>


<script>
/* eslint-disable */
import TodoItem from './List';
//import { saveIndex } from '@/api/index';
const DatePickers = () => import("./components/JavascriptComponents/DatePickers");

export default {
  components:{
    'todo-item':TodoItem,
    DatePickers,
  },
  data() {
    return {
      checkboxes: {
        unchecked: false,
        checked: true
      },
      radio: {
        radio1: "radio1"
      },
      switches: {
        off: false,
        on: true
      },
      sliders: {
        slider1: 0,
        slider2: [150, 400]
      }
    };
  },
  methods:{
    handleSubmit(){
    //   this.list.push(this.inputValue)
    //   this.inputValue=''
      //saveIndex()
    },
    handleDelete:function(index){
      this.list.splice(index,1)
    }
  },
  
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
