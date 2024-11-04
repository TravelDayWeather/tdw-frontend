const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  build: {
    outDir: "../tdw-backend/src/main/resources/static",
  }, // 빌드 결과물이 생성되는 경로
  server: {
    proxy: {
      "/api": "http://localhost:8080",
    }, // proxy 설정
  },
})
