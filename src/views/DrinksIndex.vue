<template>
  <div class='orders-index'>
    <div class="top-spacer"></div>
    <div class="container">
          <h1>My Drinks</h1>
      <div class="row mt-5"></div>
        <div class="col-sm-4">
            <div v-for="drink in drinks">
              <div v-if="drink.status === 'completed'">
              <h3>  {{drink.name}} </h3>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Review Me</button>
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form v-on:submit.prevent="submit(drink)">
                        <input type="text" placeholder="Add Rating" v-model="drink.rating">
                        <br>
                        <input type="text" placeholder="Add Comment" v-model="drink.comment">
                        <input type="submit" value="Submit">
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <input type="submit" value="Submit">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

   

    <!-- <h1>My Drinks</h1>
      <div v-for="drink in drinks">
        <div v-if="drink.status === 'completed'">
        <p>  {{drink.name}} </p>
        <p>  {{drink.price}} </p> -->
       <!--  <p> Rating: {{drink.rating}} </p>
        <p> Comments: {{drink.comment}} </p> -->
        <!-- <form v-on:submit.prevent="rate(drink)">
          <input type="text" placeholder="Add Rating" v-model="drink.rating">
          <input type="submit" value="Rate Me">
        </form> -->
        <!-- <form v-on:submit.prevent="submit(drink)">
          <input type="text" placeholder="Add Rating" v-model="drink.rating">
          <br>
          <input type="text" placeholder="Add Comment" v-model="drink.comment">
          <input type="submit" value="Submit">
        </form> -->
        <!-- </div> -->
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



