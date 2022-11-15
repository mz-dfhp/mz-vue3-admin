import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/styles/index.scss'
import { setupStore } from '@/stores'
import { setupRouter } from '@/router'
import {
  setupElementPlus,
  setupGlobalProperties,
  setupBaseComponents
} from '@/plugins'
const app = createApp(App)

function setupApp() {
  setupStore(app)
  setupRouter(app)
  setupElementPlus(app)
  setupGlobalProperties(app)
  setupBaseComponents(app)
}
setupApp()
app.mount('#app')
