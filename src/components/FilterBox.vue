<template>
    <div class="container">
        <!-- 부모 컴포넌트에서 'filterName' 슬롯을 이용하여 'filter' 값을 표시 -->
        <v-slot name="filterName"><span class="filter_title">{{ filter }}</span></v-slot>
        <!-- 'filter-item' 클래스를 가진 영역을 클릭하면 'send' 메서드를 실행 -->
        <div class="filter-item" @click="send">
            <!-- 'uploadImage' 속성에 따라 이미지를 표시 -->
            <img :src="uploadImage" alt="" />
            <!-- 슬롯에 'name' 속성을 지정하지 않으면, 부모 컴포넌트에서 임의로 내용을 삽입 -->
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