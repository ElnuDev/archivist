import { createApp } from 'vue';
import App from './App.vue';

import { createStore } from "vuex";

import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(createStore({})).mount("#app");