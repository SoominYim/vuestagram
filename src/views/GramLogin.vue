<template>
  <div class="container">
    <div class="img_container">
      <div class="img_wrap">
        <img :src="require('@/assets/home-phone.png')" alt="" />

        <div class="home_image_wrap">
          <transition-group name="home_img">
            <img v-for="(src, i) in home_src" :key="i" v-show="fade == i" :src="src" art="" />
          </transition-group>
        </div>
      </div>
    </div>
    <div class="login_container">
      <div class="wrap main_login">
        <div id="mainTitle">
          <h1>{{ title }}</h1>
        </div>
        <login-form></login-form>
        <div class="goTo_login_wrap">
          <div></div>
          <div>또는</div>
          <div></div>
        </div>
        <face-book></face-book>
        <a class="forget_pass" href="">비밀번호를 잊으셨나요?</a>
      </div>
      <div id="goToSignup">
        <p>
          계정이 없으신가요?
          <router-link to="/signup">가입하기</router-link>
        </p>
      </div>
      <p class="down">앱을 다운로드하세요.</p>
      <div class="download_wrap">
        <a href="https://apps.apple.com/kr/app/instagram/id389801252" class="store_wrap" target="_blank">
          <img :src="app_src" alt="" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=ko&gl=US"
          class="store_wrap"
          target="_blank"
        >
          <img :src="google_src" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import FaceBook from "@/sns/FaceBook.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
  components: {
    FaceBook,
    LoginForm,
  },
  data() {
    return {
      title: this.$store.state.title,
      app_src: require("@/assets/app_store.png"),
      google_src: require("@/assets/google_play.png"),
      fade: 0,
      home_src: [
        require("@/assets/home1.jpg"),
        require("@/assets/home2.jpg"),
        require("@/assets/home3.jpg"),
        require("@/assets/home4.jpg"),
        require("@/assets/home5.jpg"),
      ],
    };
  },
  created() {},
  methods: {
    callFunction() {
      setInterval(() => {
        this.fade = this.fade === this.home_src.length - 1 ? 0 : this.fade + 1;
      }, 5000);
    },
  },
  computed: {
    src() {
      return this.home[this.fade];
    },
  },
  mounted() {
    this.callFunction();
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 875px) {
  .img_wrap {
    display: none;
  }
  .container {
    flex-flow: column;
  }
}
.container {
  box-sizing: border-box;
  padding-top: 30px;
  display: flex;
  width: 100%;
  height: 618px;
  justify-content: center;
  align-items: center;
  text-align: center;
  -webkit-box-pack: center;
  font-family: "consolas";
  margin-top: 70px;
  .img_wrap {
    position: relative;
    height: 618px;
    width: 454px;
    img {
      background-size: 454px 618px;
      height: 618px;
      margin-left: -35px;
      margin-right: -15px;
      flex-basis: 454px;
      align-self: center;
    }
    .home_image_wrap {
      position: absolute;
      width: 240px;
      height: 427px;
      right: 88px;
      top: 100px;
      img {
        position: absolute;
        width: 240px;
        height: 427px;
        right: 0;
        top: 0;
      }
    }
  }
  .wrap {
    width: 348px;
    height: 394px;
    background: rgb(255, 255, 255);
    border: 1px solid rgba(219, 219, 219, 1);
    box-sizing: border-box;

    #mainTitle {
      height: 50px;
      margin: 30px 0;
      h1 {
        font-size: 40px;
      }
      h2 {
        font-size: 17px;
        margin: 0px 40px 10px;
        color: rgb(142, 142, 142);
        font-weight: 600;
        line-height: 20px;
        text-align: center;
      }
    }
  }
}
.goTo_login_wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 40px 18px;
  width: 268px;
  height: 15px;
  div:nth-of-type(1) {
    background-color: rgb(219, 219, 219);
    height: 1px;
    -webkit-box-flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    top: 0;
    position: relative;
  }
  div:nth-of-type(2) {
    color: rgb(142, 142, 142);
    font-size: 13px;
    font-weight: 600;
    margin: 0px 18px;
    line-height: 15px;
  }
  div:nth-of-type(3) {
    background-color: rgb(219, 219, 219);
    height: 1px;
    -webkit-box-flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    top: 0;
    position: relative;
  }
}

.forget_pass {
  display: block;
  margin-top: 20px;
  font-size: 12px;
  line-height: 16px;
  color: rgb(56, 81, 133);
  width: 100%;
  text-align: center;
  text-decoration: none;
}

#goToSignup {
  margin-top: 10px;
  width: 348px;
  height: 63px;
  border: 1px solid rgb(219, 219, 219);
  background-color: rgb(255, 255, 255);
  p {
    margin: 25px;
    font-size: 14px;
    a {
      text-decoration: none;
      font-weight: 600;
      color: rgb(0, 149, 246);
    }
  }
}
.down {
  font-size: 14px;
  margin: 15px 0;
}
.download_wrap {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  width: 350px;
  padding: 10px 30px;
  .store_wrap:nth-of-type(1) {
    img {
      width: 133px;
    }
  }
  .store_wrap:nth-of-type(2) {
    img {
      width: 140px;
    }
  }
}
.home_img-enter-active,
.home_img-leave-active {
  transition: all 3s ease;
}
.home_img-enter-from,
.home_img-leave-to {
  opacity: 0;
}
</style>
