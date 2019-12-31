import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Expressions from "../views/Expressions.vue";
import Gcd from "../views/Gcd.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/expressions",
    name: "expressions",
    component: Expressions
  },
  {
    path: "/gcd",
    name: "gcd",
    component: Gcd
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
