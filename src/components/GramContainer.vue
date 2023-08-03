<template>
    <!-- Vue 템플릿을 정의 -->
    <div>
        <div v-if="step == 0">
            <!-- 'step'이 0일 때, 'gramData'에 대한 게시물 목록을 표시 -->
            <gram-post :gramData="data" v-for="(data, i) in gramData" :key="i">
            </gram-post>
        </div>

        <!-- 필터 선택 페이지 -->
        <div v-if="step == 1">
            <!-- 'step'이 1일 때, 이미지에 필터를 적용하는 페이지를 표시 -->
            <div class="upload-image" :class="imageFilter">
                <!-- 이미지를 표시하고 선택된 필터 스타일을 적용 -->
                <img :src="uploadImage" alt="" />
            </div>
            <div class="filters">
                <!-- 'filters' 배열에 대한 필터 박스를 생성하여 표시 -->
                <filter-box :uploadImage="uploadImage" v-for="(filter, i) in filters" :key="i" :class="filter"
                    :filter="filter">
                    <!-- 필터의 이름을 표시하기 위해 슬롯에 'filterName' 이름을 지정 -->
                    <template v-slot:filterName>{{ filter }}</template>
                </filter-box>
            </div>
        </div>

        <!-- 글 작성 페이지 -->
        <div v-if="step == 2">
            <!-- 'step'이 2일 때, 글을 작성하는 페이지를 표시 -->
            <div class="upload-image" :class="imageFilter">
                <!-- 이미지를 표시하고 선택된 필터 스타일을 적용 -->
                <img :src="uploadImage" alt="" />
            </div>
            <div class="write">
                <!-- 글 작성을 위한 textarea를 생성 -->
                <textarea @input="$emit('write', $event.target.value)" class="write-box"></textarea>
            </div>
        </div>
        <div v-if="step == 3">
            <!-- 'step'이 3일 때, 마이 페이지를 표시 -->
            <my-page></my-page>
        </div>
    </div>
</template>

<script>
import GramPost from "@/components/GramPost.vue";
import FilterBox from "@/components/FilterBox";
import MyPage from "@/components/MyPage";

// import GramObserver from "./GramObserver.vue";

export default {
    name: "GramContainer",
    components: {
        // GramObserver,
        GramPost,
        FilterBox,
        MyPage,
    },
    props: {
        gramData: Array,
        step: Number,
        uploadImage: String,
        imageFilter: String,
    },
    data() {
        return {
            filters: this.$store.state.filters,
            page: 1,
            list: [],
        };
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.upload-image {
    position: relative;
    width: 100%;
    height: 450px;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
    }
}

.filters {
    overflow-x: scroll;
    white-space: nowrap;
}

.filters::-webkit-scrollbar {
    height: 5px;
}

.filters::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>