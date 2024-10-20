import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HelloPage from "@/pages/HelloPage.vue";
import FormPage from "@/pages/FormPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HelloPage,
  },
  {
    path: "/form",
    name: "form",
    component: FormPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
