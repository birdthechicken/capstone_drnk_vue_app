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
        <button v-on:click="orderDrink()">Order</button>
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
      recipes: [],
      order_id: "",
      recipe_id: "",
      status : ""

    };
  },
  created: function() {
    axios.get("/api/recipes/").then(response => {
      this.recipes = response.data;
    });
  },
  methods: {
    orderDrink: function() {
      axios.post("/api/recipes").then(response => {
        console.log("drink");
        this.$router.push('/recipes');
        console.log("success");
      });
    }
  }
};
</script>