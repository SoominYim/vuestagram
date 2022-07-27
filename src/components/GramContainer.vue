<template>
    <div>
        <div v-if="step == 0">
            <gram-post :gramData="data" v-for="(data, i) in gramData" :key="i">
            </gram-post>
        </div>

        <!-- 필터선택페이지 -->
        <div v-if="step == 1">
            <div class="upload-image" :class="imageFilter">
                <img :src="uploadImage" alt="" />
            </div>
            <div class="filters">
                <filter-box
                    :uploadImage="uploadImage"
                    v-for="(filter, i) in filters"
                    :key="i"
                    :class="filter"
                    :filter="filter"
                >
                    <!-- slot에 이름 안주면 바로바로 쓸수있다 그러므로 이름을 정해주자-->
                    <template v-slot:filterName>{{ filter }}</template>
                </filter-box>
            </div>
        </div>

        <!-- 글작성페이지 -->
        <div v-if="step == 2">
            <div class="upload-image" :class="imageFilter">
                <img :src="uploadImage" alt="" />
            </div>
            <div class="write">
                <textarea
                    @input="$emit('write', $event.target.value)"
                    class="write-box"
                ></textarea>
            </div>
        </div>
        <div v-if="step == 3">
            <my-page></my-page>
        </div>
    </div>
</template>

<script>
import GramPost from "@/components/GramPost.vue";
import FilterBox from "@/components/FilterBox";
import MyPage from "@/components/MyPage";

export default {
    name: "GramContainer",
    components: {
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
            filters: [
                "aden",
                "_1977",
                "brannan",
                "brooklyn",
                "clarendon",
                "earlybird",
                "gingham",
                "hudson",
                "inkwell",
                "kelvin",
                "lark",
                "lofi",
                "maven",
                "mayfair",
                "moon",
                "nashville",
                "perpetua",
                "reyes",
                "rise",
                "slumber",
                "stinson",
                "toaster",
                "valencia",
                "walden",
                "willow",
                "xpro2",
            ],
        };
    },
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