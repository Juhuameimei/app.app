const { defineConfig } = require('@vue/cli-service')
module.exports = {
  lintOnSave: false,
  transpileDependencies: true,
  //代理跨越
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        // pathRewrite: { '^/api': '' },


      },

    },
  },
}
