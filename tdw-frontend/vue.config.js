const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  outputDir: "/Users/jangseonho/tdw-backend/src/main/resources/static",

  devServer: {
    port: 3000,
    proxy: {
      "/api/": {
        target: "http://localhost:8080",
        changeOrigin: true,
      }
    }, // proxy 설정
  },
})
