import { createRouter, createWebHistory } from "vue-router";
import Look from "../components/Look";
import Home from "../components/Home";
import Shop from "../components/Shop";
import News from "../components/News";
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
  {
    path: "/news",
    name: "NEWS",
    component: News,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
