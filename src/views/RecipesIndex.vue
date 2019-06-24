<template>
  <div class="home">
    <div class="recipes-index">


      <h1>Menu</h1>
      
      <h2><router-link v-bind:to="'/recipes/cocktails'">Cocktails</router-link></h2>
      <h2><router-link v-bind:to="'/recipes/beers/'">Beers</router-link></h2>
      <h2><router-link v-bind:to="'/recipes/hard_liquors'">Bottles</router-link></h2>
     
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      recipes: []
    };
  },
  created: function() {
    axios.get("/api/recipes").then(response => {
      this.recipes = response.data;
    });
  },
  methods: {}
};
</script>