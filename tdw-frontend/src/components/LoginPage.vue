<template>
  <img alt="Vue logo" src="../assets/img/tdw logo.png">
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
import '@/assets/css/Login.css';
import axios from 'axios';

export default {
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
      this.$router.push('/signup'); // 회원가입 페이지로 이동
    },
    async handleLogin() {
      await axios.post(`api/login`, this.loginRequest, {
        header: {
          "Context-Type": "multipart/form-data"
        }
      }).then((res) => {
        console.log(res.data);
        alert('로그인에 성공했습니다.');
      }).catch((error) => {
        console.log(this.loginRequest);
        console.log(error);
        alert('로그인에 실패했습니다. 다시 시도해주세요.');
      })
    }
  }
}
</script>