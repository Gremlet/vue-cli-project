import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Drinks from "../views/Drinks.vue";
import Ingredients from "../views/Ingredients.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/drinks",
    name: "Drinks",

    component: Drinks
  },
  {
    path: "/ingredients/:ingredient",
    name: "Ingredients",
    component: Ingredients
  }
];

const router = new VueRouter({
  routes
});

export default router;
