import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import store from "@/store/store";
import axios from "axios";
import VueCookies from "vue3-cookies";

loadFonts();

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.config.productionTip = false;

app
  .use(router)
  .use(vuetify)
  .use(store)
  .use(VueCookies, {
    path: "/",
  })
  .mount("#app");
