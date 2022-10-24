import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "normalize.css";
import "./assets/css/index.less";
import "./assets/font/iconfont.css";
import "./assets/icons/iconfont.js";
import "element-plus/theme-chalk/dark/css-vars.css";
import "./assets/theme/dark.less";
import { refresh } from "@/store/login";
import { globalRegister } from "./global";

const app = createApp(App);
app.use(createPinia());

refresh();
console.log("环境", process.env.NODE_ENV);

app.use(router).use(globalRegister).mount("#app");
