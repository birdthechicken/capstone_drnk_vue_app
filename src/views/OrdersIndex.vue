<template>
  <div class='orders-index'>
    <h1>My Orders</h1>
      {{ orders }}
    <div v-for="order in orders">
        {{ order }}
      
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
      orders: []
    };
  },
  created: function() {
    axios.get("/api/orders").then(response => {
      this.orders = response.data;
    });
  },
  methods: {

  }
};
</script>