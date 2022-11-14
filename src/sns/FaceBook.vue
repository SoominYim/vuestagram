<template>
    <div>
        <button
            v-if="checkThisLocation()"
            scope="public_profile,email"
            @click="checkLoginState()"
            class="face_btn1"
        >
            <div class="face_icon"></div>
            FaceBook으로 로그인
        </button>
        <button
            v-else
            scope="public_profile,email"
            @click="checkLoginState()"
            class="face_btn2"
        >
            <div class="face_icon"></div>
            Facebook으로 로그인
        </button>
        <!-- <div>
            <button @click="facebookLogout()">로그아웃</button>
        </div> -->
    </div>
</template>

<script>
export default {
    created() {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: process.env.VUE_APP_FACEBOOK_APP_KEY,
                cookie: true,
                xfbml: true,
                version: "v9.0",
            });

            window.FB.AppEvents.logPageView();
        };
        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/ko_KR/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
    },
    mounted() {},
    methods: {
        checkLoginState() {
            window.FB.login(
                (response) => {
                    if (response.status === "connected") {
                        window.FB.api(
                            "/me",
                            "get",
                            {
                                fields: "name,email,id,picture",
                            },
                            (r) => {
                                const facebook_email = r.email;
                                const facebook_name = r.name;

                                console.log(facebook_email);
                                console.log(facebook_name);
                            }
                        );
                    } else if (response.status === "not_authorized") {
                        alert("앱에 로그인해야 이용가능한 기능입니다.");
                    } else {
                        alert("페이스북에 로그인해야 이용가능한 기능입니다.");
                    }
                },
                {
                    scope: "public_profile,email",
                }
            );
        },
        checkThisLocation() {
            if (
                window.location.href.substring(
                    location.href.lastIndexOf("/") + 1
                ) == "signup"
            ) {
                return true;
            } else {
                return false;
            }
        },
        // facebookLogout() {
        //     window.FB.getLoginStatus((response) => {
        //         window.FB.logout((res) => {
        //             console.log(response);
        //             console.log(res);
        //         });
        //     });
        // },
    },
};
</script>

<style lang="scss" scoped>
.face_btn1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif !important;
    border-radius: 4px;
    padding: 5px 9px;
    height: 36px;
    width: 250px;
    background: rgb(0, 149, 246);
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    &:hover {
        color: #fff;
        opacity: 0.8;
    }
    .face_icon {
        display: inline-block;
        background: url("@/assets/icons.png") -414px -300px no-repeat;
        width: 16px;
        height: 16px;
        margin-right: 6px;
        position: relative;
        top: 2px;
    }
}
.face_btn2 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif !important;
    border-radius: 4px;
    padding: 5px 9px;
    background-color: rgb(255, 255, 255);
    color: rgb(56, 81, 133);
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    .face_icon {
        display: inline-block;
        background: url("@/assets/icons.png") -414px -259px no-repeat;
        width: 16px;
        height: 16px;
        margin-right: 6px;
        position: relative;
        top: 3px;
    }
}
</style>