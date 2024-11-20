<template>
    <ViewHeader></ViewHeader>
    <div>
      <h3 class="signup-email-input signup-input">email</h3>
      <input type="text" v-model="signUpRequest.email"  placeholder="Enter Email" class="signup-duplicate-input-field input-field" required>
      <button class="validate-chk-button" @click="validateEmail" :disabled="isEmailAvailable" :class="{ 'success': isEmailAvailable }">중복확인</button>
      <h3 class="signup-pw-input signup-input">password</h3>
      <input type="password" v-model="signUpRequest.pw" placeholder="Enter Password" class="signup-input-field input-field" required>
      <h3 class="signup-name-input signup-input">name</h3>
      <input type="text" v-model="signUpRequest.name" placeholder="Enter Your Name" class="signup-input-field input-field" required>
      <h3 class="signup-nickname-input signup-input">nickname</h3>
      <input type="text" v-model="signUpRequest.nickname" placeholder="Enter Nickname" class="signup-duplicate-input-field input-field" required>
      <button class="validate-chk-button" @click="validateNickname" :disabled="isNicknameAvailable" :class="{ 'success': isNicknameAvailable }">중복확인</button>
      <h3 class="signup-phone-input signup-input">phone</h3>
      <input type="text" v-model="signUpRequest.phone" placeholder="Enter Phone Number" class="signup-input-field input-field" required>
    </div>
    <div>
      <button class="signup-button common-button" @click="handleSignUp">회원가입</button>
    </div>
    
  </template>
  
  <script>
  import ViewHeader from './Header/ViewHeader.vue';
  import '@/assets/css/sign-up.css';
  import '@/assets/css/common.css';
  import axios from 'axios';

  export default {
    components: {
      ViewHeader
    },
    data() {
      return {
        signUpRequest: {
        email: "",
        pw: "",
        name: "",
        nickname: "",
        phone: ""
        },
        isEmailAvailable: false,
        isNicknameAvailable: false
      }
    },
    methods: {
      async validateEmail() {
        await axios.get(`/api/users/validate-email`, {
          params: { email: this.signUpRequest.email }
        }).then((res) => {
          console.log(res);
          console.log(this.email);
          if (!res.data) {
            alert('사용 가능한 이메일입니다.');
            this.isEmailAvailable = true;
          } else {
            alert('이미 사용 중인 이메일입니다.');
          }
        }).catch((error) => {
          console.log(error);
          alert('오류가 발생했습니다. 다시 시도해주세요.');
        });
      },
      async validateNickname() {
        await axios.get(`/api/users/validate-nickname`, {
          params: { nickname: this.signUpRequest.nickname }
        }).then((res) => {
          console.log(res);
          console.log(this.nickname);
          if (!res.data) {
            alert('사용 가능한 닉네임입니다.');
            this.isNicknameAvailable = true;
          } else {
            alert('이미 사용 중인 닉네임입니다.')
          }
          
        }).catch((error) => {
          console.log(error);
          alert('오류가 발생했습니다. 다시 시도해주세요.')
        });
      },
      async handleSignUp() {
        if (!this.signUpRequest.email || !this.signUpRequest.pw || !this.signUpRequest.name ||
          !this.signUpRequest.nickname || !this.signUpRequest.phone) {
          alert("모든 필드를 입력해주세요.");
          return;
        } else if (!this.isEmailAvailable || !this.isNicknameAvailable) {
          alert("중복확인을 모두 해주세요.")
        } else {
          await axios.post(`/api/signup`, this.signUpRequest, {
            header: {
              "Context-Type": "application/json"
            }
          }).then((res) => {
            console.log(this.signUpRequest);
            console.log(res.data);
            alert("회원가입에 성공했습니다.");
            this.$router.push({ name: 'Login' });
          }).catch((error) => {
            console.log(error);
            alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.")
          })
        }
      }
    }
  }
  </script>
  