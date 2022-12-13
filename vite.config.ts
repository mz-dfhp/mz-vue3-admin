import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

//viteEslint
import viteEslint from 'vite-plugin-eslint'
// 按需引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// jsx
import vueJsx from '@vitejs/plugin-vue-jsx'
//component name
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

//unocss
import Unocss from 'unocss/vite'

const reslovePath = (pathName) => {
  return path.resolve(__dirname, pathName)
}

// https://vitejs.dev/config/
export default ({ mode, command }) => {
  console.log(mode, 'mode')
  console.log(command, 'command')
  return defineConfig({
    plugins: [
      vue(),
      viteEslint(),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        include: [/\.vue$/, /\.vue\?vue/, /\.vue\?v=/, /\.[jt]sx$/],
        resolvers: [ElementPlusResolver()]
      }),
      VueSetupExtend(),
      Unocss()
    ],
    resolve: {
      alias: {
        '@': reslovePath('./src')
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs']
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/variables.scss";' // 踩坑记录 要加上;
        }
      }
    },
    server: {
      open: true,
      port: 8080
    },
    build: {}
  })
}
