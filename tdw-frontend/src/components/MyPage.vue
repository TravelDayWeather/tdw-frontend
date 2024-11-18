<template>
    <div>
      <h1>My Page</h1>
      <p>User ID: {{ userId }}</p>
    </div>
  </template>
  
  <script>
  export default {
      name: 'MyPage',
      computed: {
          userId() {
              return this.$route.params.userId;
          }
      }
  };
  </script>