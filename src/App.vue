<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Dr!nk</router-link> |
      <router-link to='/signup'>SignUp</router-link> |
      <router-link to='/login'>Login</router-link> |
      <router-link to='/logout'>Logout</router-link> |
      <router-link to='/recipes'>Menu</router-link> |
      <router-link to='/orders'>My Orders</router-link> |
      <router-link to='/drinks'>My Drinks</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>

</style>

<script>

export default {
  data: function () {
    return {
      bartender_status: false
    };
  },

  created: function() {
    this.bartender_status = localStorage.getItem("bartender_status");
  },
};

</script>