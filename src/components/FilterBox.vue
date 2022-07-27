<template>
    <div class="container">
        <v-slot name="filterName"
            ><span class="filter_title">{{ filter }}</span></v-slot
        >
        <div class="filter-item" @click="send">
            <img :src="uploadImage" alt="" />
            <!-- 슬롯에 name을 안주면 부모에서 맘대로 써도된다 -->
        </div>
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

<style lang="scss" scoped>
.container {
    box-sizing: border-box;
    margin: 30px 10px 10px auto;
    display: inline-block;
    height: 120px;
}
.filter_title {
    position: absolute;
    top: -21px;
    font-weight: bold;
}
.filter-item {
    box-sizing: border-box;
    width: 120px;
    height: 120px;

    color: white;
    img {
        width: 120px;
        height: 120px;
        left: 0;
    }
}
</style>