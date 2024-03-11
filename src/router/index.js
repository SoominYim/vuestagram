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

router.beforeEach((to, from, next) => {
  // 페이지 이동 시 입력 폼 초기화
  clearInputForm();
  next();
});

function clearInputForm() {
  const inputElements = document.querySelectorAll("input");
  inputElements.forEach((input) => {
    input.value = "";
  });
}

export default router;
