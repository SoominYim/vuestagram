<template>
    <div style="padding: 10px">
        <div style="padding: 10px">
            <h4>팔로워</h4>
            <input placeholder="🔍" />
            <div class="post-header">
                <div class="profile"></div>
                <span class="profile-name">{{ follower }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
export default {
    name: "MyPage",
    setup() {
        // composition API써서 개발하는것 created랑 비슷함
        // 모든 변수를 만들때 ref를 꼭 써야함
        // vue는 값을 공유하는 래퍼런스타입인데 그게 뭐냐면 렌더링할때 html이랑 값을 공유하는게 래퍼런스타입임
        // 이렇게 컴포지션 API는 그냥 변수를 호출하기 때문에 ref를 감싸지 않으면 렌더링이 안됨
        let follower = ref([]);

        onMounted(() => {
            axios
                .get("https://soominyim.github.io/vuestagram/follower.json")
                .then((a) => {
                    // 데이터를 수정하려면 .value를 꼭 써야함
                    follower.value = a.data;
                });
        });
        return { follower };
    },
};
</script>

<style>
</style>