import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";


//new
import Schedule from "./views/Schedule.vue"
import List from "./views/List.vue"
import Report from "./views/Report.vue"
import CreateTask from "./views/CreateTask.vue"
import Subtask from "./views/Subtask.vue"
import Notification from "./views/Notifications.vue"
import empty from "./views/empty.vue"
import empty2 from "./views/empty2.vue"
import VerifyAccount from "./views/VerifyAccount.vue"

Vue.use(Router);
import store from "@/store";
//import router from "../../3100_backend/routes/users";



const router = new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        //header: AppHeader,
        default: Login,
      },
      beforeEnter: async (to, from, next) => {
        await store.commit('logOut');
        next();
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        //header: AppHeader,
        default: Register
      }
    },
    {
      path: "/verifyAccount/:user_id",
      name: "verifyAccount",
      components: {
        default: VerifyAccount,
      },
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/schedule",
      name: "schedule",
      components: {
        header: AppHeader,
        default: Schedule,
      }
    },
    {
      path: "/list",
      name: "list",
      components: {
        header: AppHeader,
        default: List,
      }
    },
    {
      path: "/report",
      name: "report",
      components: {
        header: AppHeader,
        default: Report,
      }
    },
    {
      path: "/create_task",
      name: "create_task",
      components: {
        header: AppHeader,
        default: CreateTask,
      }
    },
    {
      path: "/create_subtask",
      name: "create_subtask",
      components: {
        header: AppHeader,
        default: Subtask,
      }
    },
    {
      path: "/notification",
      name: "notification",
      components: {
        header: AppHeader,
        default: Notification
      }
    },
    {
      path: "/empty",
      name: "empty",
      components: {
        default: empty,
      }
    },
    {
      path: "/empty2",
      name: "empty2",
      components: {
        default: empty2,
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

// check logged in or not before route to each page
router.beforeEach(async (to, from, next) => {
  await store.dispatch('sessionStorage');
  if (!store.getters['checkLogged'] && to.path !== "/login" && to.path !== "/register" && !to.path.startsWith("/verifyAccount")){
    console.log("not yet log in");
    next("/login");
  }
  else {
    next();
  }
});
export default router;
