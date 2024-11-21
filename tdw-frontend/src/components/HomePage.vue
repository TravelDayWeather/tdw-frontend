<template>
    <div>
        <HomeViewHeader></HomeViewHeader>
    </div>
</template>

<script>
import HomeViewHeader from './Header/HomeViewHeader.vue';

export default {
    components: {
        HomeViewHeader
    },
    mounted() {
        const token = localStorage.getItem('accessToken');
        if (token) {
        this.$store.dispatch('authenticate', token); // Vuex 상태 갱신
        }
    },

}
</script>