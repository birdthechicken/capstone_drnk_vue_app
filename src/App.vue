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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
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