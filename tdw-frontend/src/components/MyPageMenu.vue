<template>
    <div class="menu-container">
    <div 
      v-for="(menu, index) in menuItems" 
      :key="index"
      class="menu-item"
    >
      <h3 class="menu-title">{{ menu.title }}</h3>
      
      <div class="submenu">
        <p 
          v-for="(sub, subIndex) in menu.submenu" 
          :key="subIndex" 
          class="submenu-item"
          :class="{ active: activeMenu === sub.label }"
          @click="navigateTo(sub.route, sub.label)"
        >
          {{ sub.label }}
        </p>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import '@/assets/css/common.css';
  import '@/assets/css/mypage-menu.css';

  export default {
  data() {
    return {
      userData: JSON.parse(sessionStorage.getItem('userData')),
      activeIndex: null,
      activeMenu: null,
      menuItems: [
        {
          title: "내 정보",
          submenu: [
            { label: "프로필 편집", route: "EditProfile" },
          ],
        },
        {
          title: "관심 목록",
          submenu: [
            { label: "즐겨찾기", route: "Favorites" },
            { label: "최근 본 여행지", route: "RecentDestinations" },
          ],
        },
        {
          title: "설정 및 로그아웃",
          submenu: [
            { label: "알림 설정", route: "NotificationSettings" },
            { label: "로그아웃", route: "Logout" },
          ],
        },
      ],
    };
  },
  mounted() {
    this.setActiveMenuFromRoute();
  },
  watch: {
    '$route': 'setActiveMenuFromRoute',
  },
  methods: {
    navigateTo(routeName, menuLabel) {
      this.activeMenu = menuLabel;
      this.$router.push({ name: routeName });
    },
    setActiveMenuFromRoute() {
      const currentRoute = this.$route.name;
      this.menuItems.forEach(menu => {
        menu.submenu.forEach(sub => {
          if (sub.route === currentRoute) {
            this.activeMenu = sub.label;
          }
        });
      });
    },
  },
};
  </script>