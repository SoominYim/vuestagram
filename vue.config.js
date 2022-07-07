const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  publicPath: "/vuestagram",
  outputDir: "./docs",
  pwa: {
    name: "님 앱이름", //빌드 할때마다 이름을 안바꿔줌
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    workboxOptions: {
      exclude: [/\.map$/, /manifest\.json$/, "index.html"], // 캐싱(하드에 저장하지 말라달라고)목록에서 제외 해달라는것임
    },
  },
};
