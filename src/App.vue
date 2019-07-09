<template>
  <div id="app">

    <!-- Pushy Menu -->
    <aside class="pushy pushy-right">
        <h4>
            <h2>Current Order</h2>

            <p v-if="current_order.drinks.length === 0"><router-link to="/recipes">Order some drinks</router-link></p>

             <div v-for="drink in current_order.drinks">
             {{ drink.name }}
             <button 
               v-if="current_order.status === 'ordering'" 
               v-on:click="destroyDrink(drink, current_order)"
               class="btn btn-sm btn-primary m-1"
             >
               Remove
             </button>
             </div>
             <button 
               v-if="current_order.status === 'ordering'"
               v-on:click="confirmOrder(current_order)"
               class="btn btn-sm btn-success"
             >
               Confirm
             </button>
              <button 
               v-if="current_order.status === 'ordering'"
               v-on:click="cancelOrder(current_order)"
               class="btn btn-sm btn-danger m-1"
             >
               Cancel
            </button>
        </h4>
    </aside>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-transparent">
        <div class="container">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="/">DR!NK</a>
            <div  id="navbarNavDropdown" class="navbar-collapse collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                      <ul class="dropdown-menu dropdown-menu-left">
                         <li><a href="about.html" class="dropdown-item"> About us</a></li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown"><a href="/" class="nav-link">Home</a></li>
                    <li class="nav-item dropdown"><a href="/recipes" class="nav-link">Menu</a></li>
                    <li class="nav-item dropdown"><a href="/orders" class="nav-link">My Orders</a></li>
                    <li class="nav-item dropdown"><a href="/drinks" class="nav-link">My Drinks</a></li>
                </ul>        
            </div>
            <ul class=" navbar-nav ml-auto navbar-right">                     
                <li class="nav-item"><a href="javascript:void(0)" class="menu-btn nav-link"><i class="fa fa-dollar" v-on:click="toggleMenu()"></i> </a></li>
                <li class="nav-item"><a href="login" class=" btn btn-primary btn-rounded btn-sm">Login</a></li>
                <li class="nav-item"><a href="/signup" class=" btn btn-primary btn-rounded btn-sm">Sign up free</a></li>
                <li class="nav-item"><a href="logout" class=" btn btn-primary btn-rounded btn-sm">Logout</a></li>
            </ul>
        </div>
    </nav>






    <!-- <div id="nav">
      <router-link to="/">Dr!nk</router-link> |
      <router-link to='/signup'>SignUp</router-link> |
      <router-link to='/login'>Login</router-link> |
      <router-link to='/logout'>Logout</router-link> |
      <router-link to='/recipes'>Menu</router-link> |
      <router-link to='/orders'>My Orders</router-link> |
      <router-link to='/drinks'>My Drinks</router-link> |
    </div> -->

    <router-view/>

    <footer class="footer footer-dark pt50 pb10">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 mb40">
                    <h3>THANKS FOR YOUR INTEREST!</h3>
                    <p>
                        We are always looking for new places to launch our app! If you think DR!NK can benefit your bar, or just want to learn more about it, feel free to email either of us. We will be sure to get back to you as soon as possible so you can start enjoying the DR!NK life. Cheers!
                    </p>
                    <a href="#" class="btn btn-sm btn-white-outline">Learn More</a>
                </div>
                <div class="col-lg-3 col-md-6 mb40">
                    <h3>Recent Post</h3>
                    <ul class="list-unstyled footer-list-item">
                        <li>
                            <a href="#">
                                Easy to use
                            </a><br>
                            <em>April 5, 2019</em>
                        </li>
                        <li>
                            <a href="#">
                                Life is so much easier
                            </a><br>
                            <em>Jan 4, 2019</em>
                        </li>
                        <li>
                            <a href="#">
                                Where were you before?
                            </a><br>
                            <em>Feb 13, 2019</em>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb40">
                    <h3>Featured properties</h3>
                    <div class="clearfix">
                        <a href="#" class="thumb-hover-icon">
                            <img src="images/img1.jpg" alt="" class="img-fluid" width="90">
                            <span class="ti-plus"></span>
                        </a><!--/.hover-->
                        <a href="#" class="thumb-hover-icon">
                            <img src="images/img2.jpg" alt="" class="img-fluid" width="90">
                            <span class="ti-plus"></span>
                        </a><!--/.hover-->
                        <a href="#" class="thumb-hover-icon">
                            <img src="images/img3.jpg" alt="" class="img-fluid" width="90">
                            <span class="ti-plus"></span>
                        </a><!--/.hover-->
                        
                    </div><!--/.clearfix-->
                </div>
                <div class="col-lg-3 col-md-6 mb40">
                    <h3>Contact Us</h3>
                    <ul class="list-unstyled contact-list-item">
                        <li>
                            <i class="ti-home"></i>
                            215 W Ohio, Chicago, IL 60610
                        </li>
                        <li>
                            <i class="ti-email"></i>
                            info@dr!nk.com
                        </li>
                        <li>
                            <i class="ti-mobile"></i>
                            1800 394 3939
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bottom-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <span>&copy; Copyright 2020. All Right Reserved.</span>
                    </div>
                    <div class="col-sm-8 text-right">
                        <ul class="list-inline footer-nav">
                            <li class="list-inline-item">
                                <a href="#">Home</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#">About</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#">News</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#">Contact</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer><!--/footer-->
  </div>
</template>

<style>
#app {
  height: 100%;
}

</style>

<script>
var axios = require('axios');

export default {
  data: function () {
    return {
      bartender_status: false,
      current_order: {
                      drinks: []
                      }
    };
  },

  created: function() {
    this.bartender_status = localStorage.getItem("bartender_status");

    axios.get("/api/orders/current").then(response => {
      this.current_order = response.data;
    });
  },
  methods: {
    toggleMenu: function() {
      document.querySelector("body").classList.toggle("pushy-open-right");
    },
    destroyDrink: function(drink, order) {
     
      axios.delete("/api/drinks/" + drink.id).then(response => {
        var index = order.drinks.indexOf(drink);
        order.drinks.splice(index, 1);
      });
    },
    confirmOrder: function(order) {

      var params = {
                    status: "in_process"
                    };
      axios.patch("/api/orders/" + order.id, params).then(response => {
        // var siteOverlay = document.querySelector(".site-overlay")
        // siteOverlay.style.display = siteOverlay.style.display === 'none' ? '' : 'none';
        document.querySelector("body").classList.toggle("pushy-open-right");
        $('#exampleModalCenter').modal('hide');
        this.$router.push('/orders');
      });
    },
    cancelOrder: function(order) {
     
      axios.delete("/api/orders/" + order.id).then(response => {
        // var siteOverlay = document.querySelector(".site-overlay")
        // siteOverlay.style.display = siteOverlay.style.display === 'none' ? '' : 'none';
        document.querySelector("body").classList.toggle("pushy-open-right");
        this.current_order = {
                        drinks: []
                        };
        this.$router.push('/recipes');
      });
    }
  }
};

</script>