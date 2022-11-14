<template>
    <footer id="container">
        <div class="footer_wrap">
            <div class="menu1">
                <div class="icons" v-for="(icon, i) in menu1" :key="i">
                    <a :href="icon.href">
                        <div>{{ icon.name }}</div>
                    </a>
                </div>
            </div>
            <div class="menu2">
                <div class="icons" v-for="(icon, i) in menu2" :key="i">
                    <a :href="icon.href">
                        <div>{{ icon.name }}</div>
                    </a>
                </div>
            </div>
            <div class="copyrightContainer">
                <div class="copy_wrap">
                    <div class="text_wrap">
                        <div class="text">한국어</div>
                    </div>
                    <div class="text_wrap">
                        <div class="text">© 2021 Instagram from Meta</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            menu1: {
                a: {
                    name: "Meta",
                    href: "https://about.facebook.com/meta",
                },
                b: {
                    name: "소개",
                    href: "https://about.instagram.com/",
                },
                c: {
                    name: "블로그",
                    href: "https://about.instagram.com/blog",
                },
                d: {
                    name: "도움말",
                    href: "https://help.instagram.com/",
                },
                e: {
                    name: "채용 정보",
                    href: "https://about.instagram.com/about-us/careers",
                },
                f: {
                    name: "API",
                    href: "https://developers.facebook.com/docs/instagram",
                },
                g: {
                    name: "개인정보처리방침",
                    href: "https://help.instagram.com/519522125107875",
                },
                h: {
                    name: "약관",
                    href: "https://help.instagram.com/581066165581870",
                },
                i: {
                    name: "인기 계정",
                    href: "https://www.instagram.com/directory/profiles/",
                },
                j: {
                    name: "해시태그",
                    href: "https://www.instagram.com/directory/hashtags/",
                },
                k: {
                    name: "위치",
                    href: "https://www.instagram.com/explore/locations/",
                },
                l: {
                    name: "Instagram Lite",
                    href: "https://www.instagram.com/web/lite/",
                },
            },
            menu2: {
                a: {
                    name: "뷰티",
                    href: "https://www.instagram.com/topics/beauty/",
                },
                b: {
                    name: "댄스",
                    href: "https://www.instagram.com/topics/dance-and-performance/",
                },
                c: {
                    name: "피트니스",
                    href: "https://www.instagram.com/topics/fitness/",
                },
                d: {
                    name: "식음료",
                    href: "https://www.instagram.com/topics/food-and-drink/",
                },
                e: {
                    name: "집 및 정원",
                    href: "https://www.instagram.com/topics/home-and-garden/",
                },
                f: {
                    name: "음악",
                    href: "https://www.instagram.com/topics/music/",
                },
                g: {
                    name: "시각 예술",
                    href: "https://www.instagram.com/topics/visual-arts/",
                },
            },
        };
    },
};
</script>

<style lang="scss" scoped>
#container {
    position: relative;
    height: 140px;
    width: 100%;
    margin-top: 100px;
    .footer_wrap {
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        padding: 0px 16px;
        margin-bottom: 40px;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif !important;
        .menu1 {
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            flex-wrap: wrap;
            .icons {
                margin: 0px 8px 12px;
                a {
                    text-decoration: none;
                    color: rgb(38, 38, 38);
                    div {
                        color: rgb(142, 142, 142);
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 16px;
                        margin: -2px 0px -3px;
                    }
                }
            }
        }
        .menu2 {
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            flex-wrap: wrap;
            .icons {
                margin: 0px 8px 12px;
                a {
                    text-decoration: none;
                    color: rgb(38, 38, 38);
                    div {
                        color: rgb(142, 142, 142);
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 16px;
                        margin: -2px 0px -3px;
                    }
                }
            }
        }
        .copyrightContainer {
            margin: 12px 0px;
            .copy_wrap {
                display: flex;
                -webkit-box-pack: center;
                justify-content: center;
                flex-wrap: wrap;

                .text_wrap {
                    margin: 0px 8px 12px;
                    .text {
                        color: rgb(142, 142, 142);
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 16px;
                        margin: -2px 0px -3px;
                    }
                }
            }
        }
    }
}
</style>