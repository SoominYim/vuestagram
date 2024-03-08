<template>
  <form class="signup-form" ref="form" action="">
    <div class="field">
      <input
        v-model="user.user_id"
        name="emailOrPhone"
        id="user_id"
        :rules="user_id_rule"
        placeholder="Phone number, or email"
        @keyup="getPhoneMask(user.user_id)"
      /><label for="user_id">휴대폰 번호 또는 이메일 주소 </label>
      <div class="inputState">
        <div class="no_check" v-show="user_id_check == 1"></div>
        <div class="yes_check" v-show="user_id_check == 2"></div>
      </div>
    </div>
    <div class="field">
      <input v-model="user.user_name" id="nickname" :rules="user_name_rule" placeholder="Name" /><label for="user_name"
        >성명</label
      >
      <div class="inputState">
        <div class="no_check" v-show="user_name_check == 1"></div>
        <div class="yes_check" v-show="user_name_check == 2"></div>
      </div>
    </div>
    <div class="field">
      <input
        v-model="user.user_nickname"
        aria-required="true"
        :rules="user_nickname_rule"
        placeholder="NickName"
      /><label for="user_nickname">사용자 이름</label>
      <div class="inputState">
        <div class="no_check" v-show="user_nickname_check == 1"></div>
        <div class="yes_check" v-show="user_nickname_check == 2"></div>
      </div>
    </div>
    <div class="field">
      <input
        v-model="user.user_password"
        type="password"
        id="user_password"
        :rules="user_password_rule"
        placeholder="PassWord"
      /><label for="user_password">비밀번호</label>
      <div class="inputState">
        <div class="no_check" v-show="user_password_check == 1"></div>
        <div class="yes_check" v-show="user_password_check == 2"></div>
      </div>
    </div>
    <div>저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. 더 알아보기</div>
    <button
      @click="signUp"
      :disabled="user_id_check != 0 || user_password_check != 0 || user_name_check != 0 || user_nickname_check != 0"
    >
      가입
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.state.user,
      user_id_rule: [
        (v) => !!v || "아이디는 필수 입력사항입니다.",
        (v) => !(v && v.length >= 30) || "아이디는 30자 이상 입력할 수 없습니다.",
        (v) => {
          //   const replaceV = v.replace(/(\s*)/g, "");
          const pattern =
            /^\d{3}-\d{3,4}-\d{4}|^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
          return pattern.test(v) || "메일 또는 휴대폰 번호를 입력하세요";
        },
      ],
      user_name_rule: [
        (v) => !!v || "성명은 필수 입력사항입니다.",
        (v) => !(v && v.length >= 30) || "성명은 30자 이상 입력할 수 없습니다.",
        (v) => !/[~!@#$%^&*()_+|<>?:{}]/.test(v) || "성명에는 특수문자를 사용할 수 없습니다.",
      ],
      user_nickname_rule: [
        (v) => !!v || "사용자 이름은 필수 입력사항입니다.",
        (v) => !(v && v.length >= 30) || "사용자 이름은 30자 이상 입력할 수 없습니다.",
        (v) => !/[~!@#$%^&*()_+|<>?:{}]/.test(v) || "사용자 이름에는 특수문자를 사용할 수 없습니다.",
        (v) => !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(v) || "사용자 이름에는 한글을 사용할 수 없습니다.",
      ],
      user_password_rule: [
        (v) => (this.state === "ins" ? !!v || "패스워드는 필수 입력사항입니다." : true),
        (v) => !(v && v.length >= 30) || "패스워드는 30자 이상 입력할 수 없습니다.",
      ],
      user_id_check: 0,
      user_name_check: 0,
      user_nickname_check: 0,
      user_password_check: 0,
    };
  },
  computed: {
    // user_id_rule() {
    //   return (
    //     !!this.user.user_id ||
    //     !(this.user.user_id && this.user.user_id.length >= 30) ||
    //     !/[~!@#$%^&*()_+|<>?:{}]/.test(this.user.user_id) ||
    //     /^\d{3}-\d{3,4}-\d{4}|^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/.test(
    //       this.user.user_id
    //     ) ||
    //     this.user_id_check == 1
    //   );
    // },
  },
  methods: {
    signUp() {
      this.$axios
        .post("api/users/signUp", {
          user: this.user,
        })
        .then((result) => {
          if (result.data.success == true) {
            alert(result.data.message);
            this.$router.push("/login");
          }
          if (result.data.success == false) {
            alert(result.data.message);
          }
        })
        .catch((error) => {
          //   alert(error);
          alert("현재 서버는 사용이 불가합니다. /main으로 접속하시면 사용 가능합니다.");
          console.log(error);
        });
    },
    // 전화번호일 경우 하이픈 추가
    getPhoneMask(val) {
      console.log(val);
      if (val[0] == 0) {
        let res = this.getMask(val);
        this.user.user_id = res;
        //서버 전송 값에는 '-' 를 제외하고 숫자만 저장
      }
    },
    // 전화번호일 경우 하이픈 추가
    getMask(phoneNumber) {
      if (!phoneNumber) return phoneNumber;
      phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

      let res = "";
      if (phoneNumber.length < 3) {
        res = phoneNumber;
      } else {
        if (phoneNumber.substr(0, 2) == "02") {
          if (phoneNumber.length <= 5) {
            //02-123-5678
            res = phoneNumber.substr(0, 2) + "-" + phoneNumber.substr(2, 3);
          } else if (phoneNumber.length > 5 && phoneNumber.length <= 9) {
            //02-123-5678
            res = phoneNumber.substr(0, 2) + "-" + phoneNumber.substr(2, 3) + "-" + phoneNumber.substr(5);
          } else if (phoneNumber.length > 9) {
            //02-1234-5678
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
            //010-1234-5678
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
button {
  border-radius: 4px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(0, 149, 246, 1);
  opacity: 1;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: inherit;
  width: 266px;
  height: 35px;
}
button:disabled {
  background-color: rgba(0, 149, 246, 0.3);
}
form {
  div {
    color: rgba(142, 142, 142, 1);
    font-size: 12px;
    line-height: 16px;
    margin: 30px auto;
    text-align: center;
  }
}
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

/* label intial position*/

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

.inputState {
  position: absolute;
  right: 40px;
  bottom: -53px;
  padding-right: 8px;
  display: flex;
  .no_check {
    background: url("../assets/icons.png");
    width: 22px;
    height: 22px;
  }
  .yes_check {
    background: url("../assets/icons.png");
    width: 22px;
    height: 22px;
  }
}
/* hiding placeholder in all browsers */

input::placeholder {
  visibility: hidden;
}

/* hiding  placeholder in mozilla */
.signup-form ::-moz-placeholder {
  color: transparent;
}

/* label final position */
input:not(:placeholder-shown) + label {
  transform: translateY(0);
  font-size: 11px;
}

/* input padding increases if placeholder is not shown */
input:not(:placeholder-shown) {
  padding-top: 14px;
  padding-bottom: 2px;
}
</style>
