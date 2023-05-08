<template>
  <div class="open-page">
    OPEN PAGE
    <div>
      {{ result }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "OpenPage",
  data() {
    return {
      result: "",
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("http://localhost:3000/getData", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.access_token,
          },
          withCredentials: false,
        })
        .then(
          (res) => {
            this.result = res.data;
            console.log("data get succesfully");
          },
          (error) => {
            console.log(error);
          }
        )
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>


