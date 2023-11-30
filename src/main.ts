import { createApp } from 'vue';
import '@/assets/styles/main.scss';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { vuetify } from './plugins/vuetify';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.use(vuetify);

app.mount('#app');
