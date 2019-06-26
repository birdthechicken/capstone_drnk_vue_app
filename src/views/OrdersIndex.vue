<template>
  <div class='orders-index'>
    <h1>My Orders</h1>
       
      <div v-for="order in orders">
          {{ "Order" }}  {{ order.id }}: {{ order.status }}
        <div v-for="drink in order.drinks">
            {{ drink.name }} 
        </div>


        <button 
          v-if="$parent.bartender_status === 'true' && order.status === 'in_process'" 
          v-on:click="acceptOrder(order)"
        >
          Accept Order
        </button>
        <button 
          v-else-if="order.status === 'ordering'" 
          v-on:click="confirmOrder(order)"
        >
          Confirm
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
    }
  }
};
</script>