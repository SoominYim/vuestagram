<template>
    <!-- 게시물을 표시하는 컨테이너 -->
    <div class="post">
        <!-- 게시물 헤더 -->
        <div class="post-header">
            <!-- 프로필 이미지를 표시하는 요소 -->
            <div class="profile" :style="{ backgroundImage: `url(${gramData.userImage})` }"></div>
            <!-- 사용자 이름을 표시하는 요소 -->
            <span class="profile-name">{{ gramData.name }}</span>
        </div>
        <!-- 게시물 바디 -->
        <div class="post-body" :style="{ backgroundImage: `url(${gramData.postImage})` }" :class="gramData.filter"
            @click="$store.commit('likesUp')"></div>
        <!-- 게시물 콘텐츠 -->
        <div class="post-content">
            <!-- 좋아요 수를 표시하는 요소 -->
            <p>{{ $store.state.likes }} Likes</p>
            <!-- 게시물 작성자와 내용을 표시하는 요소 -->
            <p>
                <strong>{{ gramData.name }}</strong> {{ gramData.content }}
            </p>
            <!-- 게시물 작성 날짜를 표시하는 요소 -->
            <p class="date">{{ gramData.date }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "GramPost",
    props: {
        gramData: Object,
    },
    mounted() { },
};
</script>

<style>
.post {
    width: 100%;
}

.profile {
    background-image: url("https://placeimg.com/100/100/arch");
    width: 30px;
    height: 30px;
    background-size: 100%;
    border-radius: 50%;
    float: left;
}

.profile-name {
    display: block;
    float: left;
    padding-left: 10px;
    padding-top: 7px;
    font-size: 14px;
}

.post-header {
    height: 30px;
    padding: 10px;
}

.post-body {
    background-image: url("https://placeimg.com/640/480/animals");
    height: 450px;
    background-position: center;
    background-size: cover;
}

.post-content {
    padding-left: 15px;
    padding-right: 15px;
    font-size: 14px;
    margin-top: 10px;
}

.date {
    font-size: 11px;
    color: grey;
    margin-top: 10px;
}
</style>