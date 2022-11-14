<template>
    <div class="container">
        <div class="wrap main_login">
            <div id="mainTitle">
                <h1>{{ title }}</h1>
            </div>
            <h2 id="subTitle">친구들의 사진과 동영상을 보려면 가입하세요.</h2>
            <face-book></face-book>
            <div class="goTo_login_wrap">
                <div></div>
                <div>또는</div>
                <div></div>
            </div>
            <signup-form></signup-form>
        </div>
        <div class="wrap sub_login">
            <p>
                계정이 있으신가요?
                <router-link to="/">로그인</router-link>
            </p>
        </div>
        <p class="down">앱을 다운로드하세요.</p>
        <div class="download_wrap">
            <a
                href="https://apps.apple.com/kr/app/instagram/id389801252"
                class="store_wrap"
                target="_blank"
            >
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
</template>


<script>
import FaceBook from "@/sns/FaceBook.vue";
import SignupForm from "@/components/SignupForm.vue";

export default {
    components: {
        FaceBook,
        SignupForm,
    },
    data() {
        return {
            title: this.$store.state.title,
            app_src: require("@/assets/app_store.png"),
            google_src: require("@/assets/google_play.png"),
            state: "ins",
            user: this.$store.state.user,
            // user_id_rule: [
            //     (v) => !!v || "아이디는 필수 입력사항입니다.",
            //     (v) =>
            //         !(v && v.length >= 30) ||
            //         "아이디는 30자 이상 입력할 수 없습니다.",
            //     (v) => {
            //         // const replaceV = v.replace(/(\s*)/g, "");
            //         const pattern =
            //             /^\d{3}-\d{3,4}-\d{4}|^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
            //         return (
            //             pattern.test(v) || "메일 또는 휴대폰 번호를 입력하세요"
            //         );
            //     },
            // ],
        };
    },
    computed: {},
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
                    alert(error);
                    console.log(error);
                });
        },
    },
};
</script>

<style lang="scss" scoped>
/* 메인 로그인 */
.container {
    margin-top: 100px;
    display: flex;
    width: 100%;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: "consolas";

    .wrap {
        background: rgb(255, 255, 255);
        border: 1px solid rgba(219, 219, 219, 1);
        box-sizing: border-box;
        #mainTitle {
            height: 50px;
            margin-top: 50px;
            h1 {
                font-size: 40px;
            }
        }
        #subTitle {
            color: rgba(var(--f52, 142, 142, 142), 1);
            font-size: 17px;
            font-weight: 600;
            line-height: 20px;
            margin: 0 40px 10px;
            text-align: center;
        }
        .goTo_login_wrap {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 0 auto;
            width: 270px;
            height: 40px;
            div:nth-of-type(1) {
                width: 30%;
                border: solid 1px rgba(var(--i1d, 38, 38, 38), 0.2);
            }
            div:nth-of-type(2) {
                color: rgba(38, 38, 38, 0.5);
                font-size: 15px;
                font-weight: 600;
            }
            div:nth-of-type(3) {
                width: 30%;
                border: solid 1px rgba(var(--i1d, 38, 38, 38), 0.2);
            }
        }
        form {
            height: 50%;
        }
    }
    .main_login {
        height: 600px;
        width: 350px;
        margin: 30px 0 10px 0;
    }
    /* 메인 로그인 종료 */
    .sub_login {
        height: 70px;
        width: 350px;
    }
}
.download_wrap {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    width: 350px;
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

.sub_login {
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
</style>