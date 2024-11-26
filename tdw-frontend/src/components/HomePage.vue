<template>
    <div>
        <HomeViewHeader></HomeViewHeader>
    </div>
    <div>
        <WeatherPage></WeatherPage>
    </div>
</template>

<script>
import HomeViewHeader from './Header/HomeViewHeader.vue';
import WeatherPage from './WeatherPage.vue';

export default {
    components: {
        HomeViewHeader, WeatherPage
    },

}
</script>