import { App, Component } from 'vue'
export default function setupBaseComponents(app: App<Element>) {
  const modules = import.meta.glob('../components/**/*.{js,jsx,ts,tsx,vue}', {
    eager: true,
    import: 'default'
  })
  Object.keys(modules).forEach((key: string) => {
    const component = modules[key]
    const name = key.replace('../components/', '').split('/')[0]
    app.component(name, component as Component)
  })
}
