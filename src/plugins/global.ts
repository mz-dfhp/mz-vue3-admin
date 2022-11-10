import { App } from 'vue'
export default function setupGlobalProperties(app: App<Element>) {
  app.config.globalProperties.a = 1
}
