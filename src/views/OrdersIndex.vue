<template>
  <div class="home bg-parallax fullscreen" data-jarallax='{"speed": 0.1}' style='background-image: url("/images/bg6.jpg")'>
  <div class='orders-index'>
    <div class="top-spacer"></div>
    <div v-if="($parent.bartender_status === 'true' && alert.display === 'bartender') || ($parent.bartender_status !== 'true' && alert.display === 'customer')"> 
     <div class="alert alert-success" role="alert">
      <h3 class="alert-heading">{{ alert.message }}</h3>
     </div>
    </div>
    <div class="container">
      <h1>My Orders</h1>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title"><b>In-Process</b></h3>
                <div v-for="order in orders">
                  <div v-if="order.status !== 'completed'">
                    <h5>Order  {{ order.id }}: {{ order.status }}</h5>
                    <div v-for="drink in order.drinks">
                    <h5>{{ drink.name }}</h5> 
                    <button 
                      v-if="order.status === 'ordering'" 
                      v-on:click="destroyDrink(drink, order)"
                      class="btn btn-sm btn-primary"
                    >
                      Remove
                    </button> 
                    </div>
                    <button 
                     v-if="$parent.bartender_status === 'true' && order.status === 'in_process'" 
                     v-on:click="acceptOrder(order)"
                     class="btn btn-sm btn-primary m-1"
                    >
                     Accept Order
                    </button>
                    <button 
                     v-if="$parent.bartender_status === 'true' && order.status === 'mixing'" 
                     v-on:click="readyOrder(order)"
                     class="btn btn-sm btn-primary m-1"

                    >
                     Ready
                    </button>
                    <button 
                     v-if="order.status === 'ready'" 
                     v-on:click="completeOrder(order)"
                     class="btn btn-sm btn-info"
                    >
                     Complete
                    </button>
                    <button 
                     v-else-if="order.status === 'ordering'" 
                     v-on:click="confirmOrder(order)"
                     class="btn btn-sm btn-success"
                    >
                     Confirm
                    </button>
                    <button 
                     v-if="order.status === 'ordering'"
                     v-on:click="cancelOrder(order)"
                     class="btn btn-sm btn-danger m-1"
                    >
                     Cancel
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title"><b>Completed</b>
              </h3>
                <div v-for="order in orders">
                  <div v-if="order.status === 'completed'">
                  <h5>Order  {{ order.id }}: {{ order.status }}
                  </h5>
                    <div v-for="drink in order.drinks">
                    <h5>{{ drink.name }}
                    </h5>
                   </div>
                  </div>
               </div>
          <div v-if="$parent.bartender_status !== 'true'">
              <a href="/drinks" class="btn btn-primary">Review Me</a>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>

    <!-- <div v-if="($parent.bartender_status === 'true' && alert.display === 'bartender') || ($parent.bartender_status === 'false' && alert.display === 'customer')" class="alert alert-danger" role="alert">
      {{ alert.message }}
    </div>
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
          v-on:click="readyOrder(order)"
        >
          Ready
        </button>
         <button 
          v-if="order.status === 'ready'" 
          v-on:click="completeOrder(order)"
        >
          Complete
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
       </button> -->
  </div>
</div>
</template>

<style>
h1 {
  text-align: center;
}
.card-body {
  background: #222222;
}
.alert-heading {
  text-align: center;
}




</style>

<script>
import axios from 'axios'
import ActionCable from "actioncable";

export default {
  data: function() {
    return {
      orders: [{
        drinks: [],
        status: ""
      }],
      alert: {display: "false"}
    };
  },
  created: function() {
    axios.get("/api/orders").then(response => {
      this.orders = response.data;
    });
    var cable = ActionCable.createConsumer("ws://localhost:3000/cable");
        cable.subscriptions.create("AlertsChannel", {
          connected: () => {
            // Called when the subscription is ready for use on the server
            console.log("Connected to AlertsChannel");
          },
          disconnected: () => {
            // Called when the subscription has been terminated by the server
          },
          received: data => {
            // Called when there's incoming data on the websocket for this channel
            console.log("Data from AlertsChannel:", data);
            axios.get("/api/orders").then(response => {
              this.orders = response.data;
            });
            this.alert = data; // update the alerts in real time
          }
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
    readyOrder: function(inputOrder) {

      var params = {
                    status: "ready"
                    };
      axios.patch("/api/orders/" + inputOrder.id, params).then(response => {
        axios.get("/api/orders").then(response => {
        // alert("Your DR!NK is ready to pick-up!!")
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
        // alert("DR!NK has picked-up!!")
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