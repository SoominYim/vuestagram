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
  mounted() {
    // 두 손가락으로 화면을 클릭 시 이벤트 무시
    document.documentElement.addEventListener(
      "touchstart",
      function (event) {
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      },
      false
    );

    // 두번 연속 탭이 0.3초보다 짧을 경우 이벤트 무시
    var lastTouchEnd = 0;
    document.documentElement.addEventListener(
      "touchend",
      function (event) {
        var now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      },
      false
    );
  },
};
</script>

<style lang="scss">
@import "@/assets/reset.scss";

html {
  background: rgb(250, 250, 250) !important;
}
#app {
  width: 100vw;
  height: 100vh;
  background: rgb(250, 250, 250);
}
</style>
