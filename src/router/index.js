import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Intro",
    component: () => import("../views/Intro.vue")
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue")
  },
  {
    path: "/context",
    name: "Context",
    component: () => import("../views/Context.vue")
  },
  {
    path: "/skills",
    name: "Skills",
    component: () => import("../views/Skills.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
