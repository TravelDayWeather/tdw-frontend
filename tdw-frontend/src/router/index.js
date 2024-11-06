import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/LoginPage.vue';
import SignUpPage from '@/components/SignupPage.vue';

const routes = [
    {
    path: '/',
    name: 'Home',
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;