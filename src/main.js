import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routes'
import store from './vuex/store'
// import vueRouter from 'vue-router'
const app=createApp(App);
app.use(router);
app.use(store);
// app.use(vueRouter);
app.mount("#app")
// createApp(App).use(router).mount('#app');