<template>
  <div class="register">
    <div>
      <label>Email</label>
      <input type="text" v-model="form.email" />
    </div>
    <div>
      <label>Username</label>
      <input type="text" v-model="form.username" />
    </div>
    <div>
      <label>Password</label>
      <input type="password" v-model="form.password" />
    </div>
    <div>
      <button @click="register">Register</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        email: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
       axios
        .post("http://localhost:5000/register", this.form, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: false,
        })
        .then(
          (response) => {
            console.log(response);
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