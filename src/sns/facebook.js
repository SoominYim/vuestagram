// const path = require("path");
// const resolve =

// const Facebook = {
//     init() {
//         window.fbAsyncInit = function () {
//             window.FB.init({
//                 appId: process.env.VUE_APP_FACEBOOK_APP_KEY,
//                 cookie: true,
//                 xfbml: true,
//                 version: "v9.0",
//             });

//             window.FB.AppEvents.logPageView();
//         };
//         (function (d, s, id) {
//             var js,
//                 fjs = d.getElementsByTagName(s)[0];
//             if (d.getElementById(id)) {
//                 return;
//             }
//             js = d.createElement(s);
//             js.id = id;
//             js.src = "https://connect.facebook.net/ko_KR/sdk.js";
//             fjs.parentNode.insertBefore(js, fjs);
//         })(document, "script", "facebook-jssdk");
//     },
//     checkLoginState() {
//         window.FB.login(
//             (response) => {
//                 if (response.status === "connected") {
//                     window.FB.api(
//                         "/me",
//                         "get", {
//                             fields: "name,email,picture",
//                         },
//                         (r) => {
//                             const req_body = {
//                                 id: r.id,
//                                 name: r.name,
//                                 email: r.email,
//                                 picture: r.picture.data.url,
//                                 social: "Facebook",
//                             };
//                             resolve(req_body);
//                         }
//                     );
//                 } else if (response.status === "not_authorized") {
//                     alert("앱에 로그인해야 이용가능한 기능입니다.");
//                 } else {
//                     alert("페이스북에 로그인해야 이용가능한 기능입니다.");
//                 }
//             }, {
//                 scope: "public_profile,email",
//             }
//         );
//     },
//     checkThisLocation() {
//         if (
//             window.location.href.substring(
//                 location.href.lastIndexOf("/") + 1
//             ) == "signup"
//         ) {
//             return true;
//         } else {
//             return false;
//         }
//     },
//     // async login() {
//     // },
//     // ​
//     // async signup() {
//     // },
//     // facebookLogout() {
//     //     window.FB.getLoginStatus((response) => {
//     //         window.FB.logout((res) => {
//     //             console.log(response);
//     //             console.log(res);
//     //         });
//     //     });
//     // },
// }

// export default Facebook;
