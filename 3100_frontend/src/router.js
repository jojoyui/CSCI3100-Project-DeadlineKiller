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
        header: AppHeader,
        default: Login,
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register
      }
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

router.beforeEach(async (to, from, next) => {
  
  if (!store.getters['checkLogged'] && to.path !== "/login" && to.path !== "/register"){
    console.log("not yet log in");
    next("/login");
  }
  else 
    next();

  // if (to.path === "/") next();
  // else {
  //   let stateLoggedIn = store.state.loggedIn;
  //   const expiryTime = store.state.expiryTime;
  //   if (stateLoggedIn && expiryTime > Math.floor(Date.now() / 1000)) {
  //     if (to.path !== "/login" && to.path !== "/sign_up") next();
  //     else next("/matching");
  //   } else if (await loggedIn()) {
  //     if (to.path !== "/login" && to.path !== "/sign_up") next();
  //   } else {
  //     if (to.path === "/login" || to.path === "/sign_up") next();
  //     else if (expiryTime <= Math.floor(Date.now() / 1000)) {
  //       alert("Session expired!");
  //     }
  //     store.commit("logout");
  //   }
  // }
});
export default router;
