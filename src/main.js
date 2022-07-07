import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";

let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

import store from "./store";
import './registerServiceWorker'

app.use(store).mount("#app"); // 모든 컴포넌트가 store안에있는 데이터를 공유할거다
