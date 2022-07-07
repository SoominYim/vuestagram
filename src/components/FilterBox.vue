<template>
    <div
        class="filter-item"
        @click="send"
        :style="`background-image:url(${uploadImage})`"
    >
        <!-- 슬롯에 name을 안주면 부모에서 맘대로 써도된다 -->
        <slot name="filterName"></slot>
    </div>
</template>

<script>
export default {
    name: "FilterBox",
    methods: {
        send() {
            this.emitter.emit("send", this.filter); //('작명','데이터')
        },
    },
    props: {
        uploadImage: String,
        filter: String,
    },
};
</script>

<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
    background: #333;
}
</style>