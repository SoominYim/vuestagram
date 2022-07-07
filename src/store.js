import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      name: "김",
      age: 20,
      likes: 30,
      getLikes: false,
      more: {},
    };
  },
  mutations: {
    setMore(state, data) {
      state.more = data;
    },
    //반납받은 값은 두번째 파라미터로 들어옴
    ageUp(state, payload) {
      state.age += payload;
    },
    likesUp(state) {
      if (state.getLikes == false) {
        state.likes++;
        state.getLikes = true;
      } else {
        state.likes--;
        state.getLikes = false;
      }
    },
  },
  actions: {
    getData(context) {
      axios.get("https://codingapple1.github.io/vue/more0.json").then((a) => {
        console.log(a.payload);
        context.commit("setMore", a.data);
      });
    },
  },
});

export default store;
