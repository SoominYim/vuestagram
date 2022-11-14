import {
  createStore
} from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      name: "김",
      age: 20,
      likes: 30,
      getLikes: false,
      more: {},
      title: 'vuestagram',
      login: false,
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
      moreClick: 0, //state
      limit: 0, //state
      step: 0,
      uploadImage: "",
      uploadContent: "",
      imageFilter: "",
      counter: 0,
      bottom: false,
      user: {
        user_id: '',
        user_password: '',
        user_name: '',
        user_nickname: '',
      }
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