<template>
    <div class="header">
        <ul class="header-button-left">
            <li @click="step--">Cancel</li>
        </ul>
        <ul class="header-button-right">
            <li v-if="step == 1" @click="step++">Next</li>
            <li v-if="step == 2" @click="publish">작성</li>
        </ul>
        <img src="./assets/logo.png" class="logo" />
    </div>
    <!-- commit(a,b) a는 실행할 함수 b는 store에 반납할 값임 -->
    <!--     <button @click="ageUp(100)">한살 더먹기</button>
    <h1>{{ $store.state.age }}</h1> -->

    <!--     <p>{{ $store.state.more }}</p>
    <button @click="$store.dispatch('getData')">더보기버튼</button> -->
    <!--     <p>{{ name }} {{ age }} {{ 내이름 }}</p> -->
    <gram-container
        :gramData="gramData"
        :step="step"
        :uploadImage="uploadImage"
        @write="uploadContent = $event"
        :imageFilter="imageFilter"
    />
    <button @click="more" v-if="step == 0">더보기</button>

    <div class="footer">
        <ul class="footer-button-plus">
            <input
                @change="upload"
                accept="image/*"
                type="file"
                id="file"
                class="inputfile"
            />
            <label for="file" class="input-plus">+</label>
        </ul>
    </div>
</template>

<script>
import GramContainer from "./components/GramContainer.vue";
import gramData from "@/gramData";
import axios from "axios";
import { mapMutations, mapState } from "vuex";

export default {
    name: "App",
    components: { GramContainer },
    data() {
        return {
            gramData: gramData,
            moreClick: 0, //state
            step: 3,
            uploadImage: "",
            uploadContent: "",
            imageFilter: "",
            카운터: 0,
        };
    },
    computed: {
        // computed 함수는 사용해도 실행되지않음 웹페이지가 처음 실행하고 값을 간직함
        name() {
            return this.$store.state.name;
        },
        ...mapState(["name", "age", "likes"]),
        ...mapState({ 내이름: "name" }),
    },
    methods: {
        // methods 함수는 사용할때마다 실행되고 값을 계속 뱉음
        ...mapMutations(["setMore", "likesUp", "ageUp"]),

        more() {
            axios
                .get(
                    `https://codingapple1.github.io/vue/more${this.moreClick}.json`
                )
                .then((result) => {
                    console.log(result);
                    this.gramData.push(result.data);
                })
                .catch((error) => {
                    console.log(error.data);
                });
            if (this.moreClick == 0) {
                this.moreClick += 1;
            } else if (this.moreClick == 1) {
                this.moreClick -= 1;
            }
        },
        upload(e) {
            let uploadFile = e.target.files;
            let uploadUrl = URL.createObjectURL(uploadFile[0]); //업로드한 이미지를 URL로 만들어줌
            this.uploadImage = uploadUrl;
            this.step++;
        },
        publish() {
            var myGramData = {
                name: "Kim Hyun",
                userImage: "https://placeimg.com/100/100/arch",
                postImage: this.uploadImage,
                likes: 36,
                date: "May 15",
                liked: false,
                content: this.uploadContent,
                filter: this.imageFilter,
            };
            this.gramData.unshift(myGramData);
            this.step = 0;
        },
    },
    mounted() {
        // emitter로 받은 데이터는 mounted에 넣어놓는게 관습이다
        this.emitter.on("send", (e) => {
            this.imageFilter = e;
        });
    },
};
</script>

<style>
@import "style.css";
</style>
