<template>
    <div>
      <h1>Weather Information</h1>
      <input v-model="city" placeholder="Enter city" />
      <button @click="fetchWeather">Get Weather</button>
      <div v-if="weather">
        <h2>{{ weather.name }}</h2>
        <p>Temperature: {{ weather.main.temp }}°C</p>
        <p>Condition: {{ weather.weather[0].description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        city: "",
        weather: null,
      };
    },
    methods: {
      async fetchWeather() {
        try {
          const token = localStorage.getItem('accessToken');
          const response = await axios.get(`/api/weather`, {
            params: { city: this.city },
            headers: {
                Authorization: `Bearer ${token}`
            }   
          });
          this.weather = (response.data); // 백엔드에서 JSON 문자열로 반환된 데이터를 파싱
          console.log(this.weather);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      },
    },
  };
  </script>