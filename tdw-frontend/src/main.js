import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueCookies from 'vue-cookies';

const app = createApp(App);
app.use(router);
app.use(VueCookies);

// const token = localStorage.getItem('accessToken');
// if (token) {
//     store.dispatch('authenticate', token); // Vuex의 상태 업데이트
// }

app.mount('#app');