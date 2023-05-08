<template>
  <div class="login">
    <div>
      <label>Username</label>
      <input type="text" v-model="form.username" />
    </div>
    <div>
      <label>Password</label>
      <input type="password" v-model="form.password" />
    </div>
    <div>
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:5000/login", this.form, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: false,
        })
        .then(
          (response) => {
            if (response.data) {
              localStorage.access_token = response.data;

              router.replace({
                path: "/openpage",
              });
            }
          },
          (error) => {
            console.log(error);
          }
        );
    },
  },
};
</script>

<style>
</style>