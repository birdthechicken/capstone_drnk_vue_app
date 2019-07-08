<template>
  <div class='orders-index'>
    <div class="top-spacer"></div>

          <h1>My Drinks</h1>

    <div class="container">
      <div class="row">
        <div class="col-sm-4 drink-card" v-for="drink in drinks" v-if="drink.status === 'completed'" v-bind:style="{ backgroundImage: 'url(' + drink.image_url + ')' }">
          <h5>  {{drink.name}} </h5>
          <button v-on:click="selectedDrink = drink" type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Review Me</button>
        </div>
      </div>
    </div>
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
            <h2>Review {{ selectedDrink.name }}</h2>
            <form v-on:submit.prevent="submit(selectedDrink)">
              <label for="rating">Rating</label>
              <input type="text" placeholder="Rating" v-model="selectedDrink.rating">
              <br>
              <label for="comment">Comment</label>
              <input type="text" placeholder="Add Comment" v-model="selectedDrink.comment">
              <br>
              <input type="submit" value="Submit" class="btn btn-success">
            </form>
          </div>
        <!--   <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <input type="submit" value="Submit">
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.drink-card {
  height: 230px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      drinks: [],
      selectedDrink: {}
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
    }
    // rate: function(drink) {
    //   var params = {
    //                 rating: drink.rating
    //                 };
    //   axios.patch("/api/drinks/" + drink.id, params).then(response => {
    //     axios.get("/api/drinks").then(response => {
    //       this.drinks = response.data
    //       console.log(response.data);
    //     });
    //   });
    // }
  }
};
</script>



