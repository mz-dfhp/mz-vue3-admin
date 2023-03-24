import { App } from 'vue'
import dayjs from 'dayjs'

export default function setupGlobalProperties(app: App<Element>) {
  app.config.globalProperties.$dayjs = dayjs
}
