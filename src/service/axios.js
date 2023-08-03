import axios from "axios";
import VueCookies from "vue-cookies";

/**
 * Axios 인터셉터를 이용하여 토큰 재발급 후 axios 헤더 값을 수정.
 * 이 코드는 response 처리 중 무한 로딩이 발생하여 소스를 분리하고, async/await를 사용하여 처리.
 */

// Request 설정
axios.interceptors.request.use(
    async function (config) {
        if (config.retry === undefined) {
            /**
             * axios 요청 중에 accessToken 만료시 재발급 후 다시 요청할 땐
             * 기존 요청 정보에서 retry=true만 주가되고
             * 나머지는 그대로 다시 요청하기 때문에 url이 이상해져서 이렇게 나눔
             */
        }

        // 헤더 셋팅
        config.timeout = 10000; // 요청 제한 시간을 10초로 설정
        config.headers["x-access-token"] = VueCookies.get("accessToken"); // access token 헤더에 추가
        config.headers["x-refresh-token"] = VueCookies.get("refreshToken"); // refresh token 헤더에 추가
        config.headers["Content-Type"] = "application/json"; // JSON 형식의 Content-Type으로 설정

        // console.log(config);
        return config;
    },
    function (error) {
        console.log("axios request error : ", error);
        return Promise.reject(error);
    }
);

// Response 설정
axios.interceptors.response.use(
    function (response) {
        try {
            return response; // 응답이 성공적으로 도착하면 그대로 반환
        } catch (err) {
            console.error("[axios.interceptors.response] response : ", err.message);
        }
    },
    async function (error) {
        try {
            // 에러에 대한 response 정보
            const errorAPI = error.response.config; // 요청했던 request 정보가 담겨있음

            // 인증에러 및 재요청이 아닐 경우... (+재요청인데 refreshToken이 있을 경우)
            if (error.response.status === 401 && errorAPI.retry === undefined && VueCookies.get("refreshToken") !== null) {
                errorAPI.retry = true; // 재요청이라고 추가 정보를 담음
                await store.dispatch("refreshToken"); // 로그인 중간 저장소에 있는 토큰 재발급 action을 실행
                return await axios(errorAPI); // 다시 axios 요청
            }
        } catch (err) {
            console.error("[axios.interceptors.response] error : ", err.message);
        }
        return Promise.reject(error);
    }
);

export default axios;
