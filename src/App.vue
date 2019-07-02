<template>
  <div id="app">



    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-transparent">
        <div class="container">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="/">DR!NK</a>
            <div  id="navbarNavDropdown" class="navbar-collapse collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Pages</a>
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
                <li class="nav-item"><a href="javascript:void(0)" class=" menu-btn nav-link"><i class="fa fa-dot-circle-o"></i> </a></li>
                <li class="nav-item"><a href="login" class=" btn btn-primary btn-rounded btn-sm">Login</a></li>
                <li class="nav-item"><a href="/signup" class=" btn btn-primary btn-rounded btn-sm">Sign up free</a></li>
                <li class="nav-item"><a href="logout" class=" btn btn-primary btn-rounded btn-sm">Logout</a></li>
            </ul>
        </div>
    </nav>

    <div class="bg-parallax fullscreen" data-jarallax='{"speed": 0.1}' style='background-image: url("/images/bg1.jpg")'>
        <div class="d-flex align-items-center">
            <div class="container">
                <div class=" row">
                    <div class="col-md-10  mr-auto ml-auto text-center">
                        <div class="hero-text-style1">
                            <h1 class="mt0 mb10">DR!NK</h1>
                            <p class="lead mb20">
                                An easy way to order a dr!nk
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><!--hero-->

    


    <div id="nav">
      <router-link to="/">Dr!nk</router-link> |
      <router-link to='/signup'>SignUp</router-link> |
      <router-link to='/login'>Login</router-link> |
      <router-link to='/logout'>Logout</router-link> |
      <router-link to='/recipes'>Menu</router-link> |
      <router-link to='/orders'>My Orders</router-link> |
      <router-link to='/drinks'>My Drinks</router-link> |
    </div>

    <router-view/>

    <footer class="footer footer-dark pt50 pb10">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 mb40">
                    <h3>About Us</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a href="#" class="btn btn-sm btn-white-outline">Learn More</a>
                </div>
                <div class="col-lg-3 col-md-6 mb40">
                    <h3>Recent Post</h3>
                    <ul class="list-unstyled footer-list-item">
                        <li>
                            <a href="#">
                                Lorem ipsum dolor sit amet
                            </a><br>
                            <em>April 5, 2017</em>
                        </li>
                        <li>
                            <a href="#">
                                Consectetur adipiscing elit
                            </a><br>
                            <em>April 5, 2017</em>
                        </li>
                        <li>
                            <a href="#">
                                Sed do eiusmod tempor incididunt
                            </a><br>
                            <em>April 5, 2017</em>
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
                        <a href="#" class="thumb-hover-icon">
                            <img src="images/img4.jpg" alt="" class="img-fluid" width="90">
                            <span class="ti-plus"></span>
                        </a><!--/.hover-->
                        <a href="#" class="thumb-hover-icon">
                            <img src="images/img5.jpg" alt="" class="img-fluid" width="90">
                            <span class="ti-plus"></span>
                        </a><!--/.hover-->
                        <a href="#" class="thumb-hover-icon">
                            <img src="images/img6.jpg" alt="" class="img-fluid" width="90">
                            <span class="ti-plus"></span>
                        </a><!--/.hover-->
                    </div><!--/.clearfix-->
                </div>
                <div class="col-lg-3 col-md-6 mb40">
                    <h3>Contact Us</h3>
                    <ul class="list-unstyled contact-list-item">
                        <li>
                            <i class="ti-home"></i>
                            124, Monalisa Street, Lorem Ipsum, 302012
                        </li>
                        <li>
                            <i class="ti-email"></i>
                            support@assan.com
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

export default {
  data: function () {
    return {
      bartender_status: false
    };
  },

  created: function() {
    this.bartender_status = localStorage.getItem("bartender_status");
  },
};

</script>