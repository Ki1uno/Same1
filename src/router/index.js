import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import AddFriend from "../views/AddFriend.vue";
import Sys from "../views/Sys.vue";
import Plan from "../views/Plan.vue";
import Shop from "../views/Shop.vue";
import ShopCart from "../views/ShopCart.vue";
import Me from "../views/Me.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/addFriend",
    name: "AddFriend",
    component: AddFriend,
  },
  {
    path: "/sys",
    name: "Sys",
    component: Sys,
  },
  {
    path: "/plan",
    name: "Plan",
    component: Plan,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/shopCart",
    name: "ShopCart",
    component: ShopCart,
  },
  {
    path: "/me",
    name: "Me",
    component: Me,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
