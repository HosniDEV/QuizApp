import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageNotFound from "@/views/PageNotFound.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/quiz/:id",
      name: "card",
      component: () => import("@/views/DetailView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Not found page",
      component: PageNotFound,
    },
    // reirect to the home page
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

export default router;
