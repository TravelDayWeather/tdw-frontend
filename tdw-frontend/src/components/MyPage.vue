<template>
    <HomeViewHeader></HomeViewHeader>
    <div>
      <h1>My Page</h1>
      <p>User ID: {{ routeUserId }}</p>
      <p>UserData: {{ parsedUserData }}</p>
    </div>
  </template>
  
  <script>
  import HomeViewHeader from './Header/HomeViewHeader.vue';

  export default {
    components: {
        HomeViewHeader
    },
      name: 'MyPage',
      computed: {
          routeUserId() {
            return this.$route.params.userId;
          },
          parsedUserData() {
            try {
                return JSON.parse(this.$route.query.userData);
            } catch (e) {
                console.error('Error parsing userData:', e);
                return null;
            }
          }
        }
  };
  </script>