<template>
  <div class="recipes-index">

    <div class="row">
      <div class="col-md-2">
        <h1>Menu</h1>
        
        <h2 v-on:click="recipeList = cocktails">Cocktails</h2>
        <h2 v-on:click="recipeList = beers">Beers</h2>
        <h2 v-on:click="recipeList = hardLiquors">Bottles</h2>
      </div>
      <div class="col-md-2">
        <div v-for="recipe in recipeList" v-bind:key="recipe.id">
          <span v-on:click="selectedRecipe = recipe">{{ recipe.name }}</span>
        </div>
      </div>
      <div class="col-md-4" v-if="selectedRecipe.name">
          <h1>{{ selectedRecipe.name }}</h1>

          <h5>Ingredient: {{ selectedRecipe.ingredients }}</h5>
          <h5>Price: {{ selectedRecipe.price }}</h5>

          <h4 >Reviews</h4>

          <!-- <div v-if="selectedRecipe.average_rating"> -->
            <p>Rating</p>
            <p>{{ selectedRecipe.average_rating || "N/A" }}</p>
          <!-- </div> -->

            <p>Comments</p>
          <div v-if="selectedRecipe.comment_messages.length > 0">
            <div v-for="comment_message in selectedRecipe.comment_messages" v-bind:key="comment_message">
             {{ comment_message }}
            </div>
          </div>
          <div v-else>
            N/A
          </div>

          <div>
           <button v-on:click="orderDrink(selectedRecipe)">Order</button>
          </div>
      </div>
      <div v-else>
        <h4>Pick a list and a drink to order</h4>
      </div>
      <div class="col-md-4">
          <h1>My Orders</h1>
        <div v-for="drink in current_order.drinks">
        {{ drink.name }}
        <button 
          v-if="current_order.status === 'ordering'" 
          v-on:click="destroyDrink(drink, order)"
        >
          Remove
        </button>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      cocktails: [],
      beers: [],
      hardLiquors: [],
      recipeList: [],
      selectedRecipe: {
                        comment_messages: []
                      },
      current_order: {
                      drinks: []
                      }
    };
  },
  created: function() {
    axios.get("/api/orders/current").then(response => {
      this.current_order = response.data;
    });
    axios.get("/api/recipes").then(response => {
      this.cocktails = response.data.cocktails;
      this.beers = response.data.beers;
      this.hardLiquors = response.data.hard_liquors;
    });
  },
  methods: {
    orderDrink: function(recipe) {
      var params = {
                    recipe_id: recipe.id
                    };

      axios.post("/api/drinks", params).then(response => {
        response;
        axios.get("/api/orders/current").then(response => {
          this.current_order = response.data;
        });
      });
    },
    destroyDrink: function(drink, order) {
     
      axios.delete("/api/drinks/" + drink.id).then(response => {
        var index = current_order.drinks.indexOf(drink);
        current_order.drinks.splice(index, 1);
      });
    }
  }
};
</script>