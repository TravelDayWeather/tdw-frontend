const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  // npm run build 타켓 디렉토리 (벡엔드쪽)
  outputDir: "../tdw-backend/src/main/resources/static",

  devServer: {
    proxy: {
      '/api': {
        target: "http://localhost:8080",
        changeOrigin: true,
      }
    }
  }
})
