<template>
  <div>
    <form class="login-form">
      <!-- 휴대폰 번호 또는 이메일 주소 입력 필드 -->
      <div class="field">
        <input
          id="user_id"
          type="name"
          placeholder="Phone number, or email"
          v-model="user.user_id"
          @keyup="getPhoneMask(user.user_id)"
        />
        <label for="username">휴대폰 번호 또는 이메일 주소</label>
      </div>
      <!-- 비밀번호 입력 필드 -->
      <div class="field">
        <input id="user_password" type="password" placeholder="password" v-model="user.user_password" />
        <label for="password">비밀번호</label>
      </div>
      <!-- 로그인 버튼 -->
      <button class="login-button" title="login" @click="login()">로그인</button>
    </form>
  </div>
</template>

<script>
import atuh_store from "@/store/atuh";
import axios from "axios";

export default {
  data() {
    return {
      user: {
        user_id: this.$store.state.user.user_id,
        user_password: this.$store.state.user.user_password,
      },
      aceessToken: atuh_store.state.aceessToken,
    };
  },
  methods: {
    // 로그인 요청 함수
    login() {
      // 로그인 API에 사용자 정보(user)를 POST로 전달
      this.$axios
        .post("api/users/login", {
          user: this.user,
        })
        .then((res) => {
          // 로그인 성공 시
          if (res.data.success == true) {
            // 로그인 성공 알림 메시지 출력
            alert(res.data.message);
            // 메인 페이지로 이동
            this.$router.push("/main");
            // 서버에서 받아온 액세스 토큰 저장
            this.accessToken = res.data.token;
            console.log(this.accessToken);
            // 액세스 토큰을 쿠키에 저장 (1일 유효 기간 설정)
            this.$cookies.set("accesstoken", res.data.token, 1);

            // 모든 요청 헤더에 액세스 토큰 추가
            axios.defaults.headers.common["x-access-token"] = res.data.token;
          }
          // 로그인 실패 시
          if (res.data.success == false) {
            // 로그인 실패 알림 메시지 출력
            // alert(res.data.message);
            alert("현재 서버는 사용이 불가합니다. /main으로 접속하시면 사용 가능합니다.");
          }
        })
        .catch(() => {
          // 에러 발생 시 알림 메시지 출력
          alert("현재 서버는 사용이 불가합니다. /main으로 접속하시면 사용 가능합니다.");

          //   alert(error);
        });
    },
    // 휴대폰 번호 입력 시 하이픈 추가
    getPhoneMask(val) {
      console.log(val);
      if (val[0] == 0) {
        // 입력된 값에 하이픈 추가하여 서버에 전송하는 값 변경
        let res = this.getMask(val.replace("-", ""));
        this.user.user_id = res;
        // 서버 전송 값에는 '-'를 제외하고 숫자만 저장
      }
    },
    // 휴대폰 번호 형식으로 변환하는 함수
    getMask(phoneNumber) {
      if (!phoneNumber) return phoneNumber;
      // 숫자 외의 문자 제거
      phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

      let res = "";
      if (phoneNumber.length < 3) {
        res = phoneNumber;
      } else {
        if (phoneNumber.substr(0, 2) == "02") {
          if (phoneNumber.length <= 5) {
            // 서울 지역 번호 형식: 02-123-5678
            res = phoneNumber.substr(0, 2) + "-" + phoneNumber.substr(2, 3);
          } else if (phoneNumber.length > 5 && phoneNumber.length <= 9) {
            res = phoneNumber.substr(0, 2) + "-" + phoneNumber.substr(2, 3) + "-" + phoneNumber.substr(5);
          } else if (phoneNumber.length > 9) {
            // 서울 지역 번호 형식: 02-1234-5678
            res = phoneNumber.substr(0, 2) + "-" + phoneNumber.substr(2, 4) + "-" + phoneNumber.substr(6);
          }
        } else {
          if (phoneNumber.length < 8) {
            res = phoneNumber;
          } else if (phoneNumber.length == 8) {
            res = phoneNumber.substr(0, 4) + "-" + phoneNumber.substr(4);
          } else if (phoneNumber.length == 9) {
            res = phoneNumber.substr(0, 3) + "-" + phoneNumber.substr(3, 3) + "-" + phoneNumber.substr(6);
          } else if (phoneNumber.length == 10) {
            res = phoneNumber.substr(0, 3) + "-" + phoneNumber.substr(3, 3) + "-" + phoneNumber.substr(6);
          } else if (phoneNumber.length > 10) {
            // 지역 번호 외 서비스 번호 형식: 010-1234-5678
            res = phoneNumber.substr(0, 3) + "-" + phoneNumber.substr(3, 4) + "-" + phoneNumber.substr(7);
          }
        }
      }
      return res;
    },
  },
};
</script>

<style lang="scss" scoped>
.field {
  margin: 10px 0;
  position: relative;
  font-size: 14px;
  width: 100%;
  text-overflow: ellipsis;
}

input {
  padding: 9px 0px 7px 9px;
  font-size: 12px;
  width: 258px;
  height: 36px;
  outline: none;
  background: #fafafa;
  border-radius: 3px;
  border: 1px solid #efefef;
}

/* label 초기 위치 */
label {
  position: absolute;
  pointer-events: none;
  left: 54px;
  padding-bottom: 15px;
  transform: translateY(10px);
  line-height: 6px;
  transition: all ease-out 0.1s;
  font-size: 12px;
  color: #999;
  padding-top: 6px;
}

/* 입력 값이 없을 때 placeholder 감추기 */
input::placeholder {
  visibility: hidden;
}

/* Mozilla에서 placeholder 감추기 */
.login-form ::-moz-placeholder {
  color: transparent;
}

/* label 최종 위치 */
input:not(:placeholder-shown) + label {
  transform: translateY(0);
  font-size: 11px;
}

/* 입력 값이 있을 때 input padding 변경 */
input:not(:placeholder-shown) {
  padding-top: 14px;
  padding-bottom: 2px;
}

.login-button {
  text-align: center;
  margin: 8px 40px;
  width: 258px;
  height: 30px;
  padding: 5px 9px;
  border: 1px solid transparent;
  background-color: #3897f0;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
}
</style>
