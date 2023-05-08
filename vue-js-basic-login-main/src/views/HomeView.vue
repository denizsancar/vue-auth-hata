<template>
  <div class="home">
    <button @click="goToRegister">Register</button>
    <button @click="goToLogin">Login</button>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "LoginPage",
  methods: {
    goToRegister() {
      router.replace({
        path: "/register",
      });
    },
    goToLogin() {
      router.replace({
        path: "/login",
      });
    },
  },
};
</script>
