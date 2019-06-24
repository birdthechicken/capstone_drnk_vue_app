<template>
  <div class='orders-index'>
    <h1>My Drinks</h1>
    {{ drinks }}

    <div v-for="drink in drinks">
        {{ drink }}
      
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      drinks: []
    };
  },
  created: function() {
    axios.get("/api/drinks").then(response => {
      this.drinks = response.data;
    });
  },
  methods: {

  }
};
</script>