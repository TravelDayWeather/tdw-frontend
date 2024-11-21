import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/LoginPage.vue';
import SignUpPage from '@/components/SignupPage.vue';
import HomePage from '@/components/HomePage.vue';
import MyPage from '@/components/MyPage.vue';
import EditProfile from '@/components/EditProfile.vue';
// import apiClient from '@/utils/apiClient';


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
        component: MyPage,
        children: [
            {
                path: 'editProfile',
                name: 'EditProfile',
                component: EditProfile,
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

// router.beforeEach(async (to, from, next) => {
//     const token = localStorage.getItem('accessToken');
//     if (token) {
//         try {
//             await apiClient.post('/api/validate', {}, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             next(); // 인증된 상태에서 라우팅 진행
//         } catch (error) {
//             console.error('Invalid token:', error);
//             localStorage.removeItem('accessToken');
//             localStorage.removeItem('refreshToken');
//             next({ name: 'Login' }); // 로그인 페이지로 리다이렉트
//         }
//     } else {
//         next({ name: 'Login' }); // 토큰이 없으면 로그인 페이지로 리다이렉트
//     }
// });

export default router;