<template>
  <div class='orders-index'>
    <h1>My Orders</h1>
       
      <div v-for="order in orders">
          Order  {{ order.id }}: {{ order.status }}
        <div v-for="drink in order.drinks">
          {{ drink.name }} 
          <button 
            v-if="order.status === 'ordering'" 
            v-on:click="destroyDrink(drink, order)"
          >
            Remove
          </button>
        </div>


        <button 
          v-if="$parent.bartender_status === 'true' && order.status === 'in_process'" 
          v-on:click="acceptOrder(order)"
        >
          Accept Order
        </button>
        <button 
          v-if="$parent.bartender_status === 'true' && order.status === 'mixing'" 
          v-on:click="completeOrder(order)"
        >
          Complete Order
        </button>
        <button 
          v-else-if="order.status === 'ordering'" 
          v-on:click="confirmOrder(order)"
        >
          Confirm
        </button>
        <button 
          v-if="order.status === 'ordering'"
          v-on:click="cancelOrder(order)"
        >
          Cancel
       </button>
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
      orders: [{
        drinks: [],
        status: ""
      }]
    };
  },
  created: function() {
    axios.get("/api/orders").then(response => {
      this.orders = response.data;
    });
  },
  methods: {
    confirmOrder: function(inputOrder) {

      var params = {
                    status: "in_process"
                    };
      axios.patch("/api/orders/" + inputOrder.id, params).then(response => {
        axios.get("/api/orders").then(response => {
          this.orders = response.data;
        });
        console.log(inputOrder.status);
      });
    },
    acceptOrder: function(inputOrder) {

      var params = {
                    status: "mixing"
                    };
      axios.patch("/api/orders/" + inputOrder.id, params).then(response => {
        axios.get("/api/orders").then(response => {
          this.orders = response.data;
        });
      });
    },
    completeOrder: function(inputOrder) {

      var params = {
                    status: "completed"
                    };
      axios.patch("/api/orders/" + inputOrder.id, params).then(response => {
        axios.get("/api/orders").then(response => {
          this.orders = response.data;
        });
      });
    },
    cancelOrder: function(inputOrder) {
     
      axios.delete("/api/orders/" + inputOrder.id).then(response => {
        var index = this.orders.indexOf(inputOrder);
        this.orders.splice(index, 1);
      });
    },
    destroyDrink: function(drink, order) {
     
      axios.delete("/api/drinks/" + drink.id).then(response => {
        var index = order.drinks.indexOf(drink);
        order.drinks.splice(index, 1);
      });
    }
  }
};
</script>