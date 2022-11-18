const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require('unplugin-vue-define-options/webpack')({
        include: [/\.vue$/, /\.vue\?vue/]
      })
    ]
  }
})
