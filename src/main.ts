import { createApp } from "vue";
import App from "./App.vue";
import { MainProcess } from "./MainProcess";
import "./registerServiceWorker";
import router from "./router";

const vue = createApp(App);
vue.config.globalProperties.$mainProcess = new MainProcess();

vue.use(router).mount("#app");