import { presetUno, presetAttributify, presetIcons, defineConfig } from 'unoCSS'
export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  rules: [['aaa', { color: 'red' }]],
  theme: {}
})
