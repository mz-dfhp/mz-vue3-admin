import ElementPlus from 'element-plus'
import { App } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

export default function setupElementPlus(app: App<Element>) {
  app.use(ElementPlus, {
    locale: zhCn
  })
}
