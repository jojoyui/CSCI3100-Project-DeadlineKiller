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
