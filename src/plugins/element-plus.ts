import ElementPlus from 'element-plus'
import { App } from 'vue'
export default function setupElementPlus(app: App<Element>) {
  app.use(ElementPlus)
}
