<template>
    <HomeViewHeader></HomeViewHeader>
    <div class="mypage-container">
    <!-- 왼쪽 메뉴 -->
        <div class="menu-wrapper">
            <MyPageMenu />
        </div>

    <!-- 오른쪽 콘텐츠 -->
        <div class="content-wrapper">
            <router-view />
        </div>
    </div>
</template>

<script> 
import HomeViewHeader from './Header/HomeViewHeader.vue';
import MyPageMenu from './MyPageMenu.vue';
import '@/assets/css/mypage.css';

    export default {
        components: {
            MyPageMenu,
            HomeViewHeader
        }
    }
</script>