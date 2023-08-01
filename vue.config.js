const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {},
    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        },
    },
});
module.exports = {
    // publicPath: "/vuestagram",
    // outputDir: "./docs",
    outputDir: "../vuestagram_back/public",
    devServer: {
        https: false,
        proxy: {
            "/api": {
                target: "http://localhost:3000/api",
                changerOrigin: true,
                pathRewrite: {
                    "^/api": "",
                },
            },
        },
    },

    pwa: {
        name: "vuestagram", //빌드 할때마다 이름을 안바꿔줌
        themeColor: "#4DBA87",
        msTileColor: "#000000",
        workboxOptions: {
            exclude: [/\.map$/, /manifest\.json$/, "index.html"], // 캐싱(하드에 저장하지 말라달라고)목록에서 제외 해달라는것임
        },
    },

    pluginOptions: {
        vuetify: {},
    },
};
