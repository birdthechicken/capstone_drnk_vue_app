<template>
  <div class='beers-index'>
    <h1>Beers</h1>

    <div v-for="beer in recipes">
      <div v-for="drink in beer">
        <p v-if="drink.list === 'hard_liquors'">
          {{ drink.name }}
        <br>
        {{ drink.ingredients }}
        <br>
        {{ drink.price }}
        </p> 
      </div>
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
      recipes: []

    };
  },
  created: function() {
    axios.get("/api/recipes").then(response => {
      this.recipes = response.data;
    });
  },
  methods: {

  }
};
</script>