import Vue from "vue";
import Listdog from "../views/Listdog.vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import About from "../views/About.vue";
import Dogprofile from "../views/Dogprofile.vue";
import Userprofile from "../views/Userprofile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/listdog",
    name: "Listdog",
    component: Listdog
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/dogprofile",
    name: "Dogprofile",
    component: Dogprofile
  },
  {
    path: "/userprofile",
    name: "Userprofile",
    component: Userprofile
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
