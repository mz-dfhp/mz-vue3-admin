import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import 'normalize.css'
import '@/styles/index.scss'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'
import setupPlugins from '@/plugins'
const app = createApp(App)

function setupApp() {
  setupStore(app)
  setupRouter(app)
  setupPlugins(app)
}
setupApp()
app.mount('#app')
