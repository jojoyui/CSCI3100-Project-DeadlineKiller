import Vue from "vue";
import Vuex from "vuex";
import { service } from "@/plugins/request_service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user_id: undefined, 
    user_email: undefined,
    tasks: []
  },
  mutations: {
  
    setUserId(state, id){
      localStorage.setItem("user_id", id);
      console.log("setuserid", id);
      state.user_id = id;
    },
    setTask(state, task){
      console.log("settask", task);
      state.tasks = task;
    },
    setUserEmail(state, email){
      localStorage.setItem("user_email", email);
      console.log("setemail", email);
      state.user_email = email;
    },
    logOut(state){
      console.log('logout');
      localStorage.removeItem("user_id");
      localStorage.removeItem("user_email");
      state.user_id = undefined;
      state.user_email= undefined;
    },
    
  },
  getters:{
    getUserId(state){
      return state.user_id;
    },
    getTask(state){
      // console.log(state.tasks);
      return state.tasks;
    },
    checkLogged(state){
        if(state.user_email || state.user_id) return true;
        else return false;
    },
  },
  actions:{
    async sessionStorage(context){
      console.log("session storage ing");
      const id = await localStorage.getItem("user_id");
      const email = await localStorage.getItem("user_id");
      if(id && email){
        context.state.user_id = id;
        context.state.user_email = email;
      }
    }
  }
});