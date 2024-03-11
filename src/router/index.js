import { createWebHashHistory, createRouter } from "vue-router";
import GramMain from "@/views/GramMain";
import GramSignup from "../views/GramSignup";
import GramLogin from "@/views/GramLogin";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/signup",
    name: "signup",
    component: GramSignup,
  },
  {
    path: "/login",
    name: "login",
    component: GramLogin,
  },
  {
    path: "/main",
    name: "main",
    component: GramMain,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
