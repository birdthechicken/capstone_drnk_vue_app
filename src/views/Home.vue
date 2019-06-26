<template>
  <div class="home">

    <div v-if="$parent.bartender_status === true">
      <h1>{{ "Welcome Bartender" }}</h1> 
    </div>
    <div v-else>
      <h1>{{ message }}</h1>

    </div>
  </div>
</template>

<style>
</style>

<script>
  // var axios = require('axios');
// import axios from 'axios'


export default {
  data: function() {
    return {
      message: "DR!NK"
      // bartender_status: false
      // user: {}
    };
  },
  created: function() {

    // axios.get("/api/users/" + this.$route.params.id).then(response => {
    //   this.user = response.data;
      // console.log(this.user);
    // });
    // this.bartender_status = localStorage.getItem("bartender_status");
  },
  methods: {}
};
</script>