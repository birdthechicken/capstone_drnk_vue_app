<template>
  <div class='orders-index'>
    <h1>My Drinks</h1>
      <div v-for="drink in drinks">
        <div v-if="drink.status === 'completed'">
        <p>  {{drink.name}} </p>
        <p>  {{drink.price}} </p>
       <!--  <p> Rating: {{drink.rating}} </p>
        <p> Comments: {{drink.comment}} </p> -->
        <!-- <form v-on:submit.prevent="rate(drink)">
          <input type="text" placeholder="Add Rating" v-model="drink.rating">
          <input type="submit" value="Rate Me">
        </form> -->
        <form v-on:submit.prevent="submit(drink)">
          <input type="text" placeholder="Add Rating" v-model="drink.rating">
          <br>
          <input type="text" placeholder="Add Comment" v-model="drink.comment">
          <input type="submit" value="Submit">
        </form>
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
    submit: function(drink) {
      var params = {
                    comment: drink.comment,
                    rating: drink.rating
                    };
      axios.patch("/api/drinks/" + drink.id, params).then(response => {
        axios.get("/api/drinks").then(response => {
        this.drinks = response.data;
        });
      });
    },
    rate: function(drink) {
      var params = {
                    rating: drink.rating
                    };
      axios.patch("/api/drinks/" + drink.id, params).then(response => {
        axios.get("/api/drinks").then(response => {
          this.drinks = response.data
          console.log(response.data);
        });
      });
    }
  }
};
</script>



