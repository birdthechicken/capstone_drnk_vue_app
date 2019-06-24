import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import RecipesIndex from './views/RecipesIndex.vue'
import CocktailsIndex from './views/CocktailsIndex.vue'
import BeersIndex from './views/BeersIndex.vue'
import BottlesIndex from './views/BottlesIndex.vue'
import OrdersIndex from './views/OrdersIndex.vue'
import DrinksIndex from './views/DrinksIndex.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home',component: Home },
    { path: '/signup', name: 'signup', component: Signup},
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/recipes", name: "recipes-index", component: RecipesIndex },
    { path: "/recipes/cocktails", name: "cokctails-index", component: CocktailsIndex },
    { path: "/recipes/beers", name: "beers-index", component: BeersIndex },
    { path: "/recipes/hard_liquors", name: "bottles-index", component: BottlesIndex },
    { path: "/orders", name: "orders-index", component: OrdersIndex },
    { path: "/drinks", name: "drinks-index", component: DrinksIndex }
  ]
})
