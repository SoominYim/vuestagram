<template>
    <div id="app">
        <router-view></router-view>
        <gram-footer></gram-footer>
    </div>
</template>

<script>
// import GramSignup from "./views/GramSignup";
// import GramLogin from "./views/GramLogin";
// import GramMain from "./views/GramMain.vue";
import GramFooter from "@/components/GramFooter.vue";

export default {
    name: "App",
    components: {
        // GramSignup,
        // GramLogin,
        // GramMain,
        GramFooter,
    },
    data() {
        return {
            login: this.$store.state.login,
        };
    },
};
</script>

<style lang="scss" >
@import "@/assets/reset.scss";
#app {
    width: 100vw;
    height: 100vh;
    background: rgb(250, 250, 250);
}
</style>
