<template>


    <div class="home bg-parallax fullscreen" data-jarallax='{"speed": 0.1}' style='background-image: url("/images/bg1.jpg")'>
      <div class="d-flex align-items-center">
        <div class="container">
          <div class=" row">
            <div class="col-md-10  mr-auto ml-auto text-center">
              <div class="hero-text-style1">
                <div v-if="$parent.bartender_status === true">
                  <h1 class="mt0 mb10">Hello Bartender</h1>
                   <p class="lead mb20">
                      Let's make some money!!
                  </p> 
                </div>
                <div v-else>
                  <h1 class="mt0 mb10">DR!NK</h1>
                  <p class="lead mb20">
                      An easy way to order a dr!nk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><!--hero-->


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