import { createApp } from "vue";
import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";
import "vue3-carousel/dist/carousel.css";
import "aos/dist/aos.css";

import App from "./App.vue";

createApp(App).use(FloatingVue).mount("#app");
