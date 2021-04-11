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
              Your account has been verified.
              <a href="/login" class="text-light">
                <small>Log in here</small>
              </a>
            </template>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { uuid } from "vue-uuid";
import { service } from "@/plugins/request_service.js";

export default {
  data: () => ({}),
  mounted() {
    this.verify();
  },
  methods: {
    verify() {
      service
        .post("/users/verify", { user_id: this.$route.params.user_id })
        .then((res) => {
          //action for successful connection
          if (res.data.success) {
            console.log("verified acount");
            //this.finished = true;
          } else {
            //action for unsuccessful connection
            console.log("verify account failed!");
          }
        });
      console.log("???", this.$route.params.user_id);
    },
  },
};
</script>
<style></style>
