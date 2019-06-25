<template>
  <div class="home">
    <div class="recipes-index">


      <h1>Menu</h1>
      
      <h2 v-on:click="recipeList = cocktails">Cocktails</h2>
      <h2 v-on:click="recipeList = beers">Beers</h2>
      <h2 v-on:click="recipeList = hardLiquors">Bottles</h2>
     
      <div>
        <div v-for="recipe in recipeList">
          <span v-on:click="recipe.display = !recipe.dispplay">{{ recipe.name }}</span>
          <div v-if="recipe.display">Reviews</div>
          ingredients: {{recipe.ingredients}}
          price: {{ recipe.price }}
          <div>
            <button v-on:click="orderDrink(recipe)">Order</button>
          </div>

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
      recipeList: []
    };
  },
  created: function() {
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
        this.$router.push('/orders');
        console.log("success");
      });
    }
  }
};
</script>