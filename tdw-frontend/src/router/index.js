import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/LoginPage.vue';
import SignUpPage from '@/components/SignupPage.vue';
import HomePage from '@/components/HomePage.vue';
import MyPage from '@/components/MyPage.vue';

const routes = [
    {
    path: '/',
    name: 'home',
    component: LoginPage,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUpPage,
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/mypage/:userId',
        name: 'MyPage',
        component: MyPage
    }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;