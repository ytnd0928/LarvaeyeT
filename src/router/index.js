import { createRouter, createWebHistory } from "vue-router";
import Look from "../components/Look"; // Look.vueのパスを適切に設定してください
import Home from "../components/Home";
import Shop from "../components/Shop";
// Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/look",
    name: "Look",
    component: Look,
  },
  {
    path: "/store",
    name: "SHOP",
    component: Shop,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
