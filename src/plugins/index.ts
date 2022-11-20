import setupElementPlus from './element-plus'
import setupGlobalProperties from './global'
import setupBaseComponents from './baseComponents'
import setupSetting from './setting'
import { App } from 'vue'

export default function (app: App<Element>) {
  setupElementPlus(app)
  setupGlobalProperties(app)
  setupBaseComponents(app)
  setupSetting()
}
