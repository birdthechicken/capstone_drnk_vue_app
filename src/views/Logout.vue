<template>
  <div class="logout">
   

  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    this.$parent.bartender_status = null;


    localStorage.removeItem("jwt");
    localStorage.removeItem("bartender_status");
    this.$router.push("/login");
  }
};
</script>