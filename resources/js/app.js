import { createApp } from 'vue';
// import { createRouter, createWebHistory } from 'vue-router';
import router from './router';
// Import components
import App from './components/App.vue';
import MainComponent from "./components/Dashboard/Main.vue";

const app = createApp(App);
app.component("mainComponent", MainComponent);
app.use(router);
app.mount('.page-wrapper');