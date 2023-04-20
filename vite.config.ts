import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({mode}) => {
  if (mode === 'development') {
    return {
      plugins: [react()],
      server: {
        port: 3000, //端口号为3000
        open: true, //是否在默认浏览器中自动打开该地址
        proxy: { //使用代理
          '/remote': { //当有 /remote开头的地址時，代理到target地址
            target: 'http://127.0.0.1:8090', // 需要跨域代理的本地路径
            changeOrigin: true, //是否改变请求源头
            rewrite: (path) => path.replace(/^\/remote/, '') // 路径重写
          }
        }
      }
    }
  } else {
    return {
      plugins: [react()],
      base: './',
    }
  }
})