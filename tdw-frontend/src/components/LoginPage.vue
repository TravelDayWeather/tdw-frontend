<template>
  <ViewHeader></ViewHeader>
    <div>
      <h3 class="login-email-input login-input">email</h3>
      <input type="text" v-model="loginRequest.email" placeholder="Enter Email" class="login-input-field" required>
      <h3 class="login-pw-input login-input">password</h3>
      <input type="password" v-model="loginRequest.pw" placeholder="Enter Password" class="login-input-field" required>
    </div>
    <div>
      <button class="login-button" @click="handleLogin">로그인</button>
    </div>
    <div>
      <button class="signup-button" @click="goToSignUp">회원가입</button>
    </div>
    
  </template>
  
<script>
import ViewHeader from './Header/ViewHeader.vue';
import '@/assets/css/Login.css';
import axios from 'axios';

export default {
  components: {
    ViewHeader
  },
  data() {
      return {
        loginRequest: {
          email: "",
          pw: "",
        },
      }
    },
  methods: {
    goToSignUp() {
      this.$router.push('/signup');
    },
    async handleLogin() {
      await axios.post(`api/login`, this.loginRequest, {
        headers: {
          "Context-Type": "application/json"
        }
      }).then((res) => {
        console.log(res.data);
        alert('로그인에 성공했습니다.');
        this.$router.go(1);
        this.$router.push({ name: 'Home' });
        this.$cookies.set('userId', res.data.userId);
        this.$cookies.set('token', res.data.accessToken);
      }).catch((error) => {
        console.log(this.loginRequest);
        console.log(error);
        if (error.response.status == 404) {
          alert('잘못된 이메일입니다. 다시 시도해주세요.');
        } else if (error.response.status == 401) {
          alert('비밀번호가 틀렸습니다. 다시 시도해주세요.');
        } else {
          alert('로그인에 실패했습니다. 다시 시도해주세요.');
        }
      })
    }
  }
}
</script>