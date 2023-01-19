const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // allowedHosts:['.xxxx.com','.xxx.com'],  或者是all
       allowedHosts: 'all',
       // 配置跨域代理
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:7000/api',    // 你自己的api接口地址
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '',  
                }
            }
        }
    }
})
