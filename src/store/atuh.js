import { createStore } from "vuex";
import axios from "axios";
import { VueCookies } from "vue3-cookies";

const auth_store = createStore({
    state() {
        return {
            accessToken: null, // 액세스 토큰을 상태에 저장하는 변수
            refreshToken: null, // 리프레시 토큰을 상태에 저장하는 변수
        };
    },
    mutations: {
        // 로그인 토큰을 저장하는 뮤테이션
        loginToken(state, payload) {
            // 로그인에 성공한 경우 쿠키에 액세스 토큰과 리프레시 토큰을 설정하고 상태를 업데이트
            VueCookies.set("accessToken", payload.accessToken, "60s");
            VueCookies.set("refreshToken", payload.refreshToken, "1h");
            state.accessToken = payload.accessToken;
            state.refreshToken = payload.refreshToken;
        },
        // 액세스 토큰 재설정을 처리하는 뮤테이션
        refreshToken(state, payload) {
            // 액세스 토큰을 새로운 값으로 설정하고 쿠키를 업데이트
            VueCookies.set("accessToken", payload.accessToken, "60s");
            VueCookies.set("refreshToken", payload.refreshToken, "1h");
            state.accessToken = payload;
        },
        // 토큰을 제거하는 뮤테이션
        removeToken() {
            // 쿠키에 저장된 토큰을 삭제
            VueCookies.remove("accessToken");
            VueCookies.remove("refreshToken");
        },
    },
    getters: {
        // 쿠키에 저장된 토큰 가져오기
        getToken(state) {
            // 상태에서 액세스 토큰과 리프레시 토큰을 가져와서 객체로 반환
            let ac = VueCookies.get("accessToken");
            let rf = VueCookies.get("refreshToken");
            console.log(state);
            return {
                access: ac,
                refresh: rf,
            };
        },
    },
    actions: {
        // 로그인 액션
        login: ({ commit }, params) => {
            return new Promise((resolve, reject) => {
                // 로그인 요청을 보내고 성공하면 뮤테이션을 호출하여 토큰을 저장
                axios
                    .post("api/users/login", params)
                    .then((res) => {
                        commit("loginToken", res.data.auth_info);
                        resolve(res);
                    })
                    .catch((err) => {
                        console.log(err.message);
                        reject(err.message);
                    });
            });
        },
        // 액세스 토큰 재요청 액션
        refreshToken: ({ commit }) => {
            // 액세스 토큰 재요청을 위해 비동기 처리를 위해 Promise를 사용
            return new Promise((resolve, reject) => {
                axios
                    .post("/v1/auth/certify")
                    .then((res) => {
                        commit("refreshToken", res.data.auth_info);
                        resolve(res.data.auth_info);
                    })
                    .catch((err) => {
                        console.log("refreshToken error : ", err.config);
                        reject(err.config.data);
                    });
            });
        },
        // 로그아웃 액션
        logout: ({ commit }) => {
            // 로그아웃 시 상태와 쿠키에 저장된 토큰
            commit("removeToken");
            location.reload(); // 페이지를 새로고침하여 로그아웃 적용
        },
    },
});

export default auth_store;
