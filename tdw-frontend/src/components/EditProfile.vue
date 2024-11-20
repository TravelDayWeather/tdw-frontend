<template>
    <div>
        <h3 class="signup-email-input margin-top signup-input">email</h3>
        <input type="text" v-model="userData.email"  placeholder="Enter Email" class="signup-input-field input-field" disabled>
        <h3 class="signup-name-input signup-input">name</h3>
        <input type="text" v-model="userData.name" placeholder="Enter Your Name" class="signup-input-field input-field" disabled>
        <h3 class="signup-nickname-input signup-input">nickname</h3>
        <input type="text" v-model="userData.nickname" placeholder="Enter Nickname" class="signup-input-field input-field" required>
        <h3 class="signup-phone-input signup-input">phone</h3>
        <input type="text" v-model="userData.phone" placeholder="Enter Phone Number" class="signup-input-field input-field" required>
    </div>
    <div>
        <button class="modify-button common-button" @click="updateUser">수정</button>
    </div>
</template>

<script>
import '@/assets/css/sign-up.css';  
import '@/assets/css/edit-profile.css';
import '@/assets/css/common.css';
import axios from 'axios';

export default {
    data() {
        return {
            userData: JSON.parse(sessionStorage.getItem('userData'))
        };
    },
    methods:{
        async updateUser() {
            const userId =this.$cookies.get('userId');
            const token = this.$cookies.get('token');

            const {nickname, phone} = this.userData;
            const userUpdateRequest = {
                nickname: nickname,
                phone: phone
            };

            await axios.patch(
                `/api/users/${userId}`,
                userUpdateRequest,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            ).then((res) => {
                console.log('수정 성공: ', res.data);
                alert('정보가 성공적으로 수정되었습니다.');

                sessionStorage.setItem('userData', JSON.stringify(res.data));
            }).catch((error) => {
                console.error('수정 실패:', error.response || error.message);
                alert('정보 수정에 실패했습니다. 다시 시도해주세요.');
            });
        }
    }
}
</script>