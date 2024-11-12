<template>
    <img alt="tdw logo" class="logo-style" src="../assets/img/tdw logo.png">
    <div>
      <h3 class="signup-email-input signup-input">email</h3>
      <input type="text" v-model="email" placeholder="Enter Email" class="signup-duplicate-input-field" required>
      <button class="duplicate-chk-button" @click="validateEmail">중복확인</button>
      <h3 class="signup-pw-input signup-input">password</h3>
      <input type="text" v-model="pw" placeholder="Enter Password" class="signup-input-field" required>
      <h3 class="signup-name-input signup-input">name</h3>
      <input type="text" v-model="name" placeholder="Enter Your Name" class="signup-input-field" required>
      <h3 class="signup-nickname-input signup-input">nickname</h3>
      <input type="text" v-model="nickname" placeholder="Enter Nickname" class="signup-duplicate-input-field" required>
      <button class="duplicate-chk-button" @click="validateNickname">중복확인</button>
      <h3 class="signup-phone-input signup-input">phone</h3>
      <input type="text" v-model="phone" placeholder="Enter Phone Number" class="signup-input-field" required>
    </div>
    <div>
      <button class="signup-button" @click="handleLogin">회원가입</button>
    </div>
    
  </template>
  
  <script>
  import '@/assets/css/Signup.css';
  import axios from 'axios';

  export default {
    data() {
      return {
        email: '',
        nickname: '',
        emailError: '',   // 이메일 중복 여부 메시지
        nicknameError: '' // 닉네임 중복 여부 메시지
      };
    },
    methods: {
      async validateEmail() {
        await axios.get(`/api/users/validate-email`, {
          params: { email: this.email }
        }).then((res) => {
          console.log(res);
          console.log(this.email);
          alert('사용 가능한 이메일입니다.');
        }).catch((error) => {
          console.log(error);
          alert('이미 사용 중인 이메일입니다.');
        });
      },
      async validateNickname() {
        await axios.get(`/api/users/validate-nickname`, {
          params: { nickname: this.nickname }
        }).then((res) => {
          console.log(res);
          console.log(this.nickname);
          alert('사용 가능한 닉네임입니다.');
        }).catch((error) => {
          console.log(error);
          alert('이미 사용 중인 닉네임입니다.')
        });
      }
    },
  }
  </script>
  