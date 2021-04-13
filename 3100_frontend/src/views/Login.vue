<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="row justify-content-center align-items-center">
      <div class="col-lg-7 text-center pt-lg">
        <img src="img/brand/test.png" style="width: 300px;" class="img-fluid" />
      </div>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-center text-muted mb-4">
                <small>Sign In</small>
              </div>
              <div v-if="!validLogIn" class="invalid mb-4">
                Invalid email or password! Please try again.
              </div>
              <form role="form">
                <base-input
                  v-model="email"
                  alternative
                  class="mb-3"
                  placeholder="Email"
                  addon-left-icon="ni ni-email-83"
                >
                </base-input>
                <base-input
                  v-model="password"
                  alternative
                  type="password"
                  placeholder="Password"
                  addon-left-icon="ni ni-lock-circle-open"
                >
                </base-input>
                <div class="text-right">
                  <label @click="modals = true">
                    <small>Forgot password? </small></label
                  >
                </div>

                <div class="text-center">
                  <base-button type="primary" class="my-4" @click="login()"
                    >Sign In</base-button
                  >

                  <modal :show.sync="modals">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      Forgot password
                    </h6>
                    <template>
                      <div class="text-center text-muted mb-4">
                        <small
                          >Get your password reminder by input your email</small
                        >
                      </div>
                      <form role="form">
                        <base-input
                          v-model="forgotEmail"
                          alternative
                          placeholder="Email"
                          addon-left-icon="ni ni-email-83"
                        >
                        </base-input>
                        <base-button
                          type="primary"
                          class="my-4"
                          @click="getPasswordreminder()"
                          >Get password reminder</base-button
                        >

                        <div v-if="password_reminder">
                          {{ password_reminder }}
                        </div>
                      </form>
                    </template>
                  </modal>
                </div>
                <div class="text-center">
                  You do not have an account?
                  <a href="/register" class="text-light">
                    <router-link to="/register">
                      <small>Register here</small>
                    </router-link>
                  </a>
                </div>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { service } from "@/plugins/request_service.js";
import store from "@/store";
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal,
  },
  data: () => ({
    email: "",
    password: "",
    validLogIn: true,
    modals: false,
    forgotEmail: "",
    password_reminder: "",
  }),
  methods: {
    getPasswordreminder() {
      service
        .get(`/users/getPasswordReminder/${this.forgotEmail}`)
        .then((res) => {
          this.password_reminder =
            "Your password reminder: " + res.data.data[0].password_reminder;
          console.log("forgot email", res.data.data[0].password_reminder);
        })
        .catch((err) => {
          console.log("err:", err);
          this.password_reminder =
            "Invalid email. Please register a new account.";
        });
    },
    // fetchTask() {
    //   service.get(`/tasks/getTasks/${store.getters["getUserId"]}`)
    //     .then((res) => {
    //       store.commit("setTask", res.data.data);
    //       console.log('fetch task');
    //     });
    // },
    login() {
      console.log("clicked");

      service
        .post("/users/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log("Login Sucess!");
          //this.finished = true;
          // store.state.user = this.email;

          // set state - email
          store.commit("setUserEmail", this.email);

          // set state - user id
          service.get(`/users/getUserId/${this.email}`).then((res) => {
            store.commit("setUserId", res.data.data[0].user_id);
            service.get(`/tasks/getTasks/${res.data.data[0].user_id}`)
            .then((res1) => {
              store.commit("setTask", res1.data.data);
              console.log('fetch task');
            });
          });
          

          this.$router.push("/list");
        })
        .catch((err) => {
          console.log("err:", err);
          this.validLogIn = false;
        });
    },
  },
};
</script>
<style>
.invalid {
  color: red;
}
</style>
