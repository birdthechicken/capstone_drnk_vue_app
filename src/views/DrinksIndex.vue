<template>
  <div class='orders-index'>
    <h1>My Drinks</h1>
    <!-- {{ drinks }} -->

    <div v-for="drink in drinks">
        <div v-if="drink.status === 'ordering'">
          {{ drink.name }}
          {{ drink.price }}
          {{ drink.rating }}
          {{ drink.comment }}
          <div>
           <button v-on:click="destroyDrink(drink)">Remove</button>
          </div>
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
      drinks: []
    };
  },
  created: function() {
    axios.get("/api/drinks").then(response => {
      this.drinks = response.data;
    });
  },
  methods: {
    destroyDrink: function(drink) {
     
      axios.delete("/api/drinks/" + drink.id).then(response => {
        var index = this.drinks.indexOf(drink);
        this.drinks.splice(index, 1);
      });
    }
  }
};
</script>