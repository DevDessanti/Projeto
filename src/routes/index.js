import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/Sobre",
    name: "Sobre",
    component: () =>
      import("../views/Sobre.vue")
  },
  {
    path: "/Perfil",
    name: "Perfil",
    component: () =>
      import("../views/Perfil.vue")
  }

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });

  export default router;