<template>
    <div>
        <form class="login-form">
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
            <div class="field">
                <input
                    id="user_password"
                    type="password"
                    placeholder="password"
                    v-model="user.user_password"
                />
                <label for="password">비밀번호</label>
            </div>
            <button class="login-button" title="login" @click="login()">
                로그인
            </button>
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
        login() {
            this.$axios
                .post("api/users/login", {
                    user: this.user,
                })
                .then((res) => {
                    if (res.data.success == true) {
                        alert(res.data.message);
                        this.$router.push("/main");
                        this.accessToken = res.data.token;
                        console.log(this.accessToken);
                        this.$cookies.set("accesstoken", res.data.token, 1);

                        axios.defaults.headers.common["x-access-token"] =
                            res.data.token;
                    }
                    if (res.data.success == false) {
                        alert(res.data.message);
                    }
                })
                .catch((error) => {
                    alert(error);
                });
        },
        getPhoneMask(val) {
            console.log(val);
            if (val[0] == 0) {
                let res = this.getMask(val.replace("-", ""));
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
                        res =
                            phoneNumber.substr(0, 2) +
                            "-" +
                            phoneNumber.substr(2, 3);
                    } else if (
                        phoneNumber.length > 5 &&
                        phoneNumber.length <= 9
                    ) {
                        //02-123-5678
                        res =
                            phoneNumber.substr(0, 2) +
                            "-" +
                            phoneNumber.substr(2, 3) +
                            "-" +
                            phoneNumber.substr(5);
                    } else if (phoneNumber.length > 9) {
                        //02-1234-5678
                        res =
                            phoneNumber.substr(0, 2) +
                            "-" +
                            phoneNumber.substr(2, 4) +
                            "-" +
                            phoneNumber.substr(6);
                    }
                } else {
                    if (phoneNumber.length < 8) {
                        res = phoneNumber;
                    } else if (phoneNumber.length == 8) {
                        res =
                            phoneNumber.substr(0, 4) +
                            "-" +
                            phoneNumber.substr(4);
                    } else if (phoneNumber.length == 9) {
                        res =
                            phoneNumber.substr(0, 3) +
                            "-" +
                            phoneNumber.substr(3, 3) +
                            "-" +
                            phoneNumber.substr(6);
                    } else if (phoneNumber.length == 10) {
                        res =
                            phoneNumber.substr(0, 3) +
                            "-" +
                            phoneNumber.substr(3, 3) +
                            "-" +
                            phoneNumber.substr(6);
                    } else if (phoneNumber.length > 10) {
                        //010-1234-5678
                        res =
                            phoneNumber.substr(0, 3) +
                            "-" +
                            phoneNumber.substr(3, 4) +
                            "-" +
                            phoneNumber.substr(7);
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

/* hiding placeholder in all browsers */

input::placeholder {
    visibility: hidden;
}

/* hiding  placeholder in mozilla */
.login-form ::-moz-placeholder {
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