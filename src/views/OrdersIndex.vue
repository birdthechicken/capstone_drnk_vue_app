<template>
  <div class='orders-index'>
    <h1>My Orders</h1>
       
    <div v-for="order in orders">
        {{ "Order" }}  {{ order.id }}: {{ order.status }}
      <div v-for="drinks in order">
        <div v-for="drink in drinks">
          {{ drink.name }} 
        </div>
      </div>

    <div v-if="order.status === 'ordering'">
      <button v-on:click="confirmOrder(order)">Confirm</button>
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
      orders: {
        drinks: [],
        status: ""
      },
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
    }
  }
};
</script>