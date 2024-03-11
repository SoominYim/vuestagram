<template>
  <div id="container">
    <div class="header">
      <ul class="header-button-left">
        <li @click="step--">Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step == 1" @click="step++">Next</li>
        <li v-if="step == 2" @click="publish">작성</li>
      </ul>
      <img :src="require('@/assets/logo.png')" class="logo" />
    </div>

    <!--     <p>{{ $store.state.more }}</p>
    <button @click="$store.dispatch('getData')">더보기버튼</button> -->
    <gram-container
      :gramData="gramData"
      :step="step"
      :uploadImage="uploadImage"
      @write="uploadContent = $event"
      :imageFilter="imageFilter"
    />
    <div class="footer" v-if="step == 0">
      <ul class="footer-button-plus">
        <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
    <!-- <infinite-loading
            @infinity="infiniteHandler"
            spinner="spiral"
        ></infinite-loading> -->
  </div>
</template>

<script>
import GramContainer from "@/components/GramContainer.vue";
import gramData from "@/gramData";
import axios from "axios";
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    GramContainer,
  },
  data() {
    return {
      gramData: gramData,
      moreClick: this.$store.state.moreClick, //state
      limit: this.$store.state.limit, //state
      step: this.$store.state.step,
      uploadImage: this.$store.state.uploadImage,
      uploadContent: this.$store.state.uploadContent,
      imageFilter: this.$store.state.imageFilter,
      counter: this.$store.state.counter,
      bottom: this.$store.state.bottom,
    };
  },
  computed: {
    name() {
      return this.$store.state.name;
    },
    ...mapState(["name", "age", "likes"]),
  },
  watch: {
    bottom(newValue) {
      setTimeout(() => {
        if (newValue) {
          this.more();
        }
      }, 1000);
    },
  },
  created() {
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });
  },
  methods: {
    ...mapMutations(["setMore", "likesUp", "ageUp"]),
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.moreClick}.json`).then((result) => {
        this.gramData.push(result.data);
      });
    },
    upload(e) {
      let uploadFile = e.target.files;
      let uploadUrl = URL.createObjectURL(uploadFile[0]);
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

<style lang="scss" scoped>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
  z-index: 100;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#container {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
