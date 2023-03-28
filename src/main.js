import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useStyleStore } from "@/stores/style.js";
import { darkModeKey, styleKey } from "@/config.js";

/* set tailwind */
import './css/main.css'

/* Init pinia */
const pinia = createPinia();

/* Create Vue app */
createApp(App).use(pinia).use(router).mount('#app')

/* App style */
const styleStore = useStyleStore();
styleStore.setStyle('basic')
//styleStore.setStyle(localStorage[styleKey] ?? "basic")

/* Dark mode */
/* if (
  (!localStorage[darkModeKey] &&
    window.matchMedia("(prefers-color-scheme: dark)").matches) ||
  localStorage[darkModeKey] === "1"
) {
  styleStore.setDarkMode(true);
}
 */