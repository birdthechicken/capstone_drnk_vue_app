<template>
  <div class='cocktails-index'>
    <h1>Cocktails</h1>

    <div v-for="cocktail in recipes">
      <div v-for="drink in cocktail">
        <p v-if="drink.list === 'cocktails'">
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