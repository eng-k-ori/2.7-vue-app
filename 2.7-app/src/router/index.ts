import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HelloPage from "@/pages/HelloPage.vue";
import RegistForm from "@/pages/RegistForm.vue";
import ModRegistForm from "@/pages/ModRegistForm.vue";
import SimplePage from "@/pages/SimplePage.vue";

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
    component: RegistForm,
  },
  {
    path: "/mod-form",
    name: "mod-form",
    component: ModRegistForm,
  },
  {
    path: "/simple",
    name: "simple",
    component: SimplePage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
