import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
<<<<<<< HEAD
// import * as MarkdownItToc from "vue-markdown-it-toc";

const app = createApp(App);
app.use(ElementPlus).use(router).use(store);
// app.use(MarkdownItToc);
=======


const app = createApp(App);
app.use(ElementPlus).use(router).use(store);
>>>>>>> f509068b65bca7ea6c241619d3c023ded1838a02

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
