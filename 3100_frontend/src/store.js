import Vue from "vue";
import Vuex from "vuex";
import { service } from "@/plugins/request_service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user_id: undefined, 
    user_email: undefined,
    task_id: undefined
  },
  mutations: {
  
    setUserId(state, id){
        console.log("setuserid", id);
        state.user_id = id;
    },
    setTaskId(state, id){
      console.log("settaskid", id);
      state.task_id = id;
    },
    setUserEmail(state, email){
        console.log("setemail", email);
        state.user_email = email;
    },
    logOut(state){
        state.user_id = undefined;
        state.user_email= undefined;
    }    
  },
  getters:{
      getUserId(state){
          return state.user_id;
      },
      getTaskId(state){
        return state.task_id;
      },
      checkLogged(state){
          if(state.user_email || state.user_id) return true;
          else return false;
      }
  }
  
});