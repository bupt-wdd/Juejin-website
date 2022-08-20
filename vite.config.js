import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy:{
      '/path' : {
        target: 'http://43.138.21.235:8080', //需代理的地址
        changeOrigin: true, //开启代理，允许跨域
        rewrite: path=>path.replace(/^\/path/,'') //匹配自定义代理的名字,重写路径
      }
    }
  }
})
