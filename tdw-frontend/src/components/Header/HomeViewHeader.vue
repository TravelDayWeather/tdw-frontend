<template>
    <header>
        <div class="image-container">
            <img alt="Vue logo" src="../../assets/img/TdwLogo.png" @click="goToHome" class="logo-resize">
            <img alt="search icon" src="../../assets/img/searchIcon.png" @click="goToSearch" class="icon-resize search-icon-location icon-location">
            <img alt="mypage icon" src="../../assets/img/mypageIcon.png" @click="goToMyPage" class="icon-resize mypage-icon-location icon-location">
        </div>
        <div class="divider-line"></div>
    </header>
</template>
<script>
import "../../assets/css/home-header.css"
import axios from "axios";

export default{
    methods: {
        goToHome() {
            this.$router.push({ name: 'Home' });
        },
        goToSearch() {
            
        },
        goToMyPage() {
            const userId =localStorage.getItem('userId');
            const token = localStorage.getItem('accessToken');
            console.log(userId);
            console.log(`Bearer ${token}`)
            axios.get(`/api/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                console.log(res.data);

                localStorage.setItem('userData', JSON.stringify({
                    userId: res.data.userId,
                    name: res.data.name,
                    email: res.data.email,
                    nickname: res.data.nickname,
                    phone: res.data.phone,
                    pw: res.data.pw
                }));

                this.$router.push({name: 'MyPage', 
                params: {
                    userId: res.data.userId,            
                },
            });
            }).catch((error) => {
                console.log(error);
                alert('오류가 발생했습니다. 다시 시도해주세요.')
            });
        }
    }
}

</script>