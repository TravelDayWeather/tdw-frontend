<template>
    <img alt="tdw logo" class="logo-style" src="../assets/tdw logo.png">
    <div>
      <h3 class="signup-email-input signup-input">email</h3>
      <input type="text" placeholder="Enter Email" class="signup-input-field" required>
      <h3 class="signup-pw-input signup-input">password</h3>
      <input type="text" placeholder="Enter Password" class="signup-input-field" required>
      <h3 class="signup-name-input signup-input">name</h3>
      <input type="text" placeholder="Enter Your Name" class="signup-input-field" required>
      <h3 class="signup-nickname-input signup-input">nickname</h3>
      <input type="text" placeholder="Enter Nickname" class="signup-input-field" required>
      <h3 class="signup-phone-input signup-input">phone</h3>
      <input type="text" placeholder="Enter Phone Number" class="signup-input-field" required>
    </div>
    <div>
      <button class="signup-button" @click="handleLogin">회원가입</button>
    </div>
    
  </template>
  
  <script>
  import '@/assets/css/Signup.css';

  export default {
    name: 'SignupComponent',
    props: {
      msg: String
    }
  }
  </script>
  